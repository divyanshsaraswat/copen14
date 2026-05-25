import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Globe } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-secondary text-white pt-16"
    >
      <div className="absolute inset-0 bg-[url('/images/hero-mnit-vltc.jpg')] bg-cover bg-center" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Slight upward shift */}
        <div className="max-w-4xl mx-auto text-center -translate-y-8 md:-translate-y-12">
          <div className="inline-block mb-5 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-accent font-semibold text-sm">
              14th Edition
            </span>
          </div>

          <h1 className="font-serif font-bold text-5xl md:text-7xl mb-5 text-balance">
            COPEN 14 - 2026
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-white/90 leading-relaxed text-balance">
            14th International Conference on Precision, Meso, Micro and Nano Engineering
          </p>

          {/* NEW LINE — International participants */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span>18–20 December, 2026</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>MNIT Jaipur, India</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />

            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span>Offline Mode</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8 text-white/80 text-base md:text-lg">
            <Globe className="w-5 h-5 text-accent " />
            <span >
              For international participants, online presentations will be allowed
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
              asChild
            >
              <Link href="#registration">Register Now</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-base px-8"
              asChild
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
