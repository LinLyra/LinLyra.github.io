"use client"

import ShipConsole from "@/components/ShipConsole"

/**
 * Previously this used next/dynamic with `loading: () => null`, which left a gap
 * after the first click while the chunk loaded — the trigger unmounted and nothing
 * was clickable. Static import keeps CONSOLE reliable.
 */
export default function ShipConsoleLazy() {
  return <ShipConsole />
}
