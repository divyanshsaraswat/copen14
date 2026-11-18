import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScheduleSection } from "@/components/schedule-section"
import { Calendar, Clock, MapPin } from "lucide-react"

export const metadata = {
  title: "Conference Program & Schedule | COPEN 14",
  description: "Tentative three-day program schedule for the 14th International Conference on Precision, Meso, Micro and Nano Engineering (COPEN 14) at MNIT Jaipur.",
}

export default function ProgramPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Program Hero Banner */}
      <div className="relative bg-gradient-to-br from-slate-900 via-primary to-slate-900 text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs md:text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Official Conference Schedule</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-4">
            Conference Programme
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            14th International Conference on Precision, Meso, Micro and Nano Engineering (COPEN 14)
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-slate-300">
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>18 – 20 December 2026</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>MNIT Jaipur, Rajasthan, India</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>3 Days • 5 Parallel Technical Tracks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Schedule Content */}
      <div className="flex-grow">
        <ScheduleSection />
      </div>

      <Footer />
    </main>
  )
}
