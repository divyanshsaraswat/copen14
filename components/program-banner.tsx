import Link from "next/link"
import { Calendar, Clock, ArrowRight, Sparkles, Layers, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProgramBanner() {
  return (
    <section className="relative -mt-4 md:-mt-6 z-20 container mx-auto px-4 max-w-6xl mb-6">
      <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-r from-slate-950 via-slate-900 to-primary/95 text-white shadow-xl p-5 md:p-7">
        
        {/* Subtle decorative glow */}
        <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Left Text / Info */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Program Schedule Announced</span>
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-primary-foreground/70" />
                <span>18 – 20 December 2026</span>
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
              COPEN 14 Tentative Programme Schedule
            </h3>

            <p className="text-xs sm:text-sm text-slate-200/90 max-w-2xl leading-relaxed">
              Explore the 3-day timeline featuring Plenary Keynotes, 5 Parallel Oral Presentation Tracks, Invited Expert Lectures, Industry Sponsors Showcase, and the Valedictory Awards.
            </p>

            {/* Quick Days Snapshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span className="text-slate-200">
                  <strong className="text-white">Day 1 (18 Dec):</strong> Inaugural & Keynotes
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                <span className="text-slate-200">
                  <strong className="text-white">Day 2 (19 Dec):</strong> 5 Parallel Sessions
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-slate-200">
                  <strong className="text-white">Day 3 (20 Dec):</strong> Valedictory & Awards
                </span>
              </div>
            </div>
          </div>

          {/* Right CTA Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 sm:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md text-sm sm:text-base px-6 h-11"
            >
              <Link href="/program" className="flex items-center justify-center gap-2">
                <span>View Full Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-xs h-9"
            >
              <Link href="/workshops/pre" className="flex items-center justify-center gap-1.5">
                <span>Pre-Conference Workshop (17 Dec)</span>
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
