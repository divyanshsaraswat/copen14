"use client"

import { useEffect, useState } from "react"

export default function ComingSoon({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  const [dots, setDots] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d + 1) % 4), 700)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white text-slate-800">
      <div className="px-8 py-14 md:px-12 md:py-20 text-center">
        <p className="uppercase tracking-wider text-xs md:text-sm text-slate-500">
          {subtitle || "Workshops"}
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
          Coming Soon{" "}
          <span className="inline-block w-5 text-left">
            {".".repeat(dots)}
          </span>
        </h2>

        <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {title} details will be announced shortly. Please check back later for
          schedules, topics, and speaker information.
        </p>

        {/* Subtle divider */}
        <div className="mt-8 flex justify-center">
          <span className="h-px w-16 bg-slate-300" />
        </div>
      </div>
    </div>
  )
}
