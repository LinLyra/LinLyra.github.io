// components/contact-section.tsx
"use client";

import type React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const AdvancedGalaxyCanvas = dynamic(
  () => import("./advanced-galaxy-canvas"),
  { ssr: false, loading: () => null }
);

const FORM_ENDPOINT = "https://formspree.io/f/mjkozkel";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
    _honeypot: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._honeypot) return;

    setSubmitting(true);
    setOk(null);
    setErrMsg(null);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setOk(true);
        setFormData({ name: "", contact: "", subject: "", message: "", _honeypot: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setOk(false);
        setErrMsg(data?.errors?.[0]?.message || "Submit failed. Please try again.");
      }
    } catch {
      setOk(false);
      setErrMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative z-10 min-h-screen px-4 py-20 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16" variant="soft">
          <h2 className="cosmic-heading text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Let’s Connect Across the <span className="cosmic-gradient">Stars</span>
          </h2>
          <p className="text-xl text-gray-200 mb-3">
            Open to work opportunities, research & projects, product ideas, collaborations,
            or simply a good conversation.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
  
          <ScrollReveal className="relative" variant="up">
            <AdvancedGalaxyCanvas />

            {/* tiny astronaut widgets */}
            <div className="pointer-events-none absolute -right-2 top-6 hidden lg:block">
              <MiniAstronautWidget variant="sketch" />
            </div>
            <div className="pointer-events-none absolute -left-2 bottom-8 hidden lg:block">
              <MiniAstronautWidget variant="comms" />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delayMs={80}>
          <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send a Message to My Universe
              </CardTitle>
              <p className="text-gray-300 text-sm">
                Work, research, projects, community ideas — or just a hello. All signals are welcome.
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <input
                  type="text"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact" className="text-white">Contact</Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="email / WeChat / LinkedIn"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Topic (work / research / idea / hello)"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                    placeholder="Tell me what you’re exploring, building, or curious about — links welcome."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>

                {ok === true && (
                  <p className="text-center text-emerald-300 text-sm">
                    Message sent. Thanks for your signal ✨
                  </p>
                )}
                {ok === false && (
                  <p className="text-center text-red-300 text-sm">
                    {errMsg || "Something went wrong. Please try again."}
                  </p>
                )}
              </form>

              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-gray-400 text-xs text-center italic">
                  "Every message is a star launched into our shared sky — it will find its place in my constellation."
                </p>
              </div>
            </CardContent>
          </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function MiniAstronautWidget({ variant }: { variant: "sketch" | "comms" }) {
  const title = variant === "sketch" ? "Sketch Pad" : "Comms"
  const subtitle =
    variant === "sketch" ? "Draw constellations" : "Ping me anytime"

  return (
    <div className="relative w-44 rounded-2xl border border-white/10 bg-black/35 px-3 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.10)]">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-pink-500/10 opacity-70" />
      <div className="relative flex items-center gap-2">
        <AstronautMiniSVG className="h-10 w-10 text-sky-200/90" />
        <div className="min-w-0">
          <div className="text-xs font-semibold tracking-[0.18em] text-gray-200/80">{title}</div>
          <div className="mt-0.5 truncate text-xs text-gray-300/80">{subtitle}</div>
        </div>
      </div>

      <div className="relative mt-2 h-7 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
        {variant === "sketch" ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.12),transparent_55%)]" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_50%,rgba(34,197,94,0.10),transparent_55%),radial-gradient(circle_at_75%_55%,rgba(56,189,248,0.14),transparent_60%)]" />
        )}
        <div className="absolute -left-6 top-1/2 h-[2px] w-24 -translate-y-1/2 rotate-6 bg-white/25 blur-[0.5px]" />
      </div>
    </div>
  )
}

function AstronautMiniSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 8c-9.4 0-17 7.6-17 17v1.8c0 4.1 1.4 8 4 11v12c0 3.4 2.8 6.2 6.2 6.2h13.6c3.4 0 6.2-2.8 6.2-6.2v-12c2.6-3 4-6.9 4-11V25c0-9.4-7.6-17-17-17Z"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="2"
      />
      <path
        d="M22 26c0-5.5 4.5-10 10-10h0c5.5 0 10 4.5 10 10v1.4c0 5.5-4.5 10-10 10h0c-5.5 0-10-4.5-10-10V26Z"
        fill="currentColor"
        fillOpacity="0.10"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      <path
        d="M24 44h16"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
