"use client"

type SoundState = {
  musicEnabled: boolean
  sfxEnabled: boolean
}

const LS_KEY = "lyra-sound"

let state: SoundState = {
  musicEnabled: false,
  sfxEnabled: true,
}

let audioEl: HTMLAudioElement | null = null
let audioCtx: AudioContext | null = null

function loadState() {
  if (typeof window === "undefined") return
  try {
    const raw = window.localStorage.getItem(LS_KEY)
    if (!raw) return
    const parsed = JSON.parse(raw)
    if (typeof parsed?.musicEnabled === "boolean") state.musicEnabled = parsed.musicEnabled
    if (typeof parsed?.sfxEnabled === "boolean") state.sfxEnabled = parsed.sfxEnabled
  } catch {
    // ignore
  }
}

function saveState() {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(LS_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

function ensureAudioEl() {
  if (typeof window === "undefined") return null
  if (audioEl) return audioEl
  audioEl = new Audio("/audio/ambient.mp3")
  audioEl.loop = true
  audioEl.preload = "none"
  audioEl.volume = 0.42
  return audioEl
}

function ensureAudioContext() {
  if (typeof window === "undefined") return null
  if (audioCtx) return audioCtx
  const Ctx = window.AudioContext || (window as any).webkitAudioContext
  if (!Ctx) return null
  audioCtx = new Ctx()
  return audioCtx
}

function broadcast() {
  if (typeof window === "undefined") return
  window.dispatchEvent(new CustomEvent("lyra-sound-change", { detail: { ...state } }))
}

export function initSoundFromStorage() {
  loadState()
  broadcast()
  // No autoplay; we only play when user clicks toggle.
}

export function getSoundState(): SoundState {
  if (typeof window !== "undefined" && audioEl === null) {
    // make sure state is loaded once in client sessions
    loadState()
  }
  return { ...state }
}

export function setMusicEnabled(next: boolean) {
  state.musicEnabled = next
  saveState()
  broadcast()
}

export function setSfxEnabled(next: boolean) {
  state.sfxEnabled = next
  saveState()
  broadcast()
}

export async function toggleMusic() {
  const next = !state.musicEnabled
  setMusicEnabled(next)

  if (!next) {
    if (audioEl) audioEl.pause()
    return
  }

  const el = ensureAudioEl()
  if (!el) return

  try {
    // Must be called from a user gesture to avoid autoplay restrictions.
    await el.play()
  } catch {
    // If browser blocks it or file missing, revert state.
    setMusicEnabled(false)
  }
}

export function playCardClick() {
  if (typeof window === "undefined") return
  if (!state.sfxEnabled) return

  // Avoid on touch devices (no hover/click sound needed, and prevents perceived lag)
  const coarse = window.matchMedia?.("(pointer: coarse)")?.matches
  if (coarse) return

  const ctx = ensureAudioContext()
  if (!ctx) return

  // Must be resumed by a user gesture in some browsers.
  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {})
  }

  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  const filter = ctx.createBiquadFilter()

  // A tiny “scan tick”: triangle -> lowpass -> short decay
  osc.type = "triangle"
  osc.frequency.setValueAtTime(880, now)
  osc.frequency.exponentialRampToValueAtTime(520, now + 0.06)

  filter.type = "lowpass"
  filter.frequency.setValueAtTime(1800, now)
  filter.Q.setValueAtTime(0.8, now)

  gain.gain.setValueAtTime(0.0001, now)
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.008)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.085)

  osc.connect(filter)
  filter.connect(gain)
  gain.connect(ctx.destination)

  osc.start(now)
  osc.stop(now + 0.1)
}

