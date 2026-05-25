"use client"

import { useEffect, useState } from "react"

const target = new Date("2026-12-18T09:00:00+05:30").getTime()

function format(n: number) {
  return n.toString().padStart(2, "0")
}

export function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const id = setInterval(() => {
      const now = Date.now()
      const diff = Math.max(target - now, 0)
      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const m = Math.floor((diff / (1000 * 60)) % 60)
      const s = Math.floor((diff / 1000) % 60)
      setTime({ d, h, m, s })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-8">COPEN 14 begins in</h3>
        <div className="flex justify-center gap-4 md:gap-6">
          {[
            { label: "Days", value: time.d },
            { label: "Hours", value: time.h },
            { label: "Minutes", value: time.m },
            { label: "Seconds", value: time.s },
          ].map((b) => (
            <div key={b.label} className="px-4 py-3 rounded bg-muted min-w-20">
              <div className="text-3xl md:text-4xl font-bold tabular-nums">{format(b.value)}</div>
              <div className="text-xs text-muted-foreground mt-1">{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
