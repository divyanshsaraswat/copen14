"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  "/images/carousel/4.png",
  "/images/carousel/3.png",
  "/images/carousel/2.png",
  "/images/carousel/1.png",
  // "/images/carousel/5.png",
]

const AUTO_SLIDE_INTERVAL = 4500

export function CarouselSection() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* HEADING */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Research at MNIT Jaipur — At a Glance
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            A snapshot of cutting-edge research facilities, laboratories and academic excellence
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative h-[65vh] md:h-[80vh] max-h-[760px] rounded-2xl overflow-hidden">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 p-5 md:p-8">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
                  <Image
                    src={src}
                    alt={`MNIT Research Highlight ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 z-10">
            <Button
              size="icon"
              variant="outline"
              onClick={prevSlide}
              className="bg-background/80 border-muted-foreground/30 backdrop-blur hover:bg-background"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              onClick={nextSlide}
              className="bg-background/80 border-muted-foreground/30 backdrop-blur hover:bg-background"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === current
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
