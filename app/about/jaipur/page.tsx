"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PinkCityJaipur() {
  const buildings = [
    { name: "Hawa Mahal", img: "/jaipur/1.png" },
    { name: "City Palace", img: "/jaipur/2.png" },
    { name: "Amber Fort", img: "/jaipur/3.png" },
    { name: "Jantar Mantar", img: "/jaipur/4.png" },
    { name: "Nahargarh Fort", img: "/jaipur/5.png" },
    { name: "Jaigarh Fort", img: "/jaipur/6.png" },
    { name: "Albert Hall Museum", img: "/jaipur/7.png" },
    { name: "Birla Mandir", img: "/jaipur/8.png" },
    { name: "Galta Ji Temple", img: "/jaipur/9.png" },
    { name: "Jal Mahal", img: "/jaipur/10.png" },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % buildings.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-[#FFF0E6] flex flex-col font-sans">
      <Header />

      {/* Tailwind Carousel */}
      <section className="relative w-full h-72 md:h-96 overflow-hidden">
        {buildings.map((building, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={building.img}
              alt={building.name}
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-[#8B5E3C]/30" />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-xl md:text-3xl font-serif font-bold bg-[#B45D6D]/70 px-4 py-2 rounded shadow">
              {building.name}
            </p>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {buildings.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                idx === currentSlide ? "bg-[#B45D6D]" : "bg-[#B45D6D]/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 max-w-6xl flex-grow">
        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#B45D6D] mb-6">
            About Pink City, Jaipur
          </h2>
          <p className="text-lg leading-relaxed text-[#5C4033] mb-6">
            Jaipur, the capital of Rajasthan, is fondly called the "Pink City" due to the distinct pink hue of its historic buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is a perfect blend of royal heritage, architectural brilliance, and vibrant culture. The city is a part of India’s famous Golden Triangle tourist circuit along with Delhi and Agra.
          </p>
          <p className="text-lg leading-relaxed text-[#5C4033] mb-6">
            With its well-planned streets, majestic forts, palaces, and bustling bazaars, Jaipur reflects the rich history of the Rajput era. Today, it is a thriving center for tourism, arts, handicrafts, and modern urban development.
          </p>
        </div>

        {/* Forts & Palaces */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#B45D6D] mb-6">
            Majestic Forts & Palaces
          </h2>
          <p className="text-lg leading-relaxed text-[#5C4033] mb-6">
            Jaipur's skyline is dotted with magnificent forts and palaces, representing centuries of royal legacy and architectural excellence.
          </p>
          <ul className="list-disc pl-6 text-[#5C4033] leading-relaxed space-y-2 mb-6">
            <li><strong>Amber Fort:</strong> Blend of Hindu and Mughal architecture with stunning courtyards.</li>
            <li><strong>City Palace:</strong> Royal residence with museums showcasing Jaipur’s history.</li>
            <li><strong>Hawa Mahal:</strong> The iconic “Palace of Winds” with 953 windows.</li>
            <li><strong>Jaigarh & Nahargarh Forts:</strong> Hilltop fortresses with panoramic city views.</li>
            <li><strong>Jal Mahal:</strong> Palace in the middle of Man Sagar Lake, perfect for photography.</li>
          </ul>
        </div>

        {/* Culture & Arts */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#B45D6D] mb-6">
            Culture, Arts & Festivals
          </h2>
          <p className="text-lg leading-relaxed text-[#5C4033] mb-6">
            Jaipur is a cultural hub renowned for its traditional music, dance, festivals, and crafts.
          </p>
          <ul className="list-disc pl-6 text-[#5C4033] leading-relaxed space-y-2 mb-6">
            <li>Vibrant bazaars: Johari Bazaar, Bapu Bazaar, Tripolia Bazaar</li>
            <li>Traditional crafts: block printing, miniature paintings, jewelry</li>
            <li>Festivals: Jaipur Literature Festival, Teej, Gangaur</li>
            <li>Architectural marvels: Jantar Mantar Observatory, Albert Hall Museum</li>
          </ul>
        </div>

        {/* Modern Jaipur */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#B45D6D] mb-6">
            Modern Jaipur
          </h2>
          <p className="text-lg leading-relaxed text-[#5C4033] mb-6">
            Jaipur balances heritage with modernity, featuring smart infrastructure, IT hubs, educational institutions, and industries, while preserving its historical charm.
          </p>
          <p className="text-lg leading-relaxed text-[#5C4033] mb-6">
            Recognized under India’s Smart Cities Mission, Jaipur combines tradition, sustainability, and urban innovation, making it a perfect blend of past and present.
          </p>
        </div>

        {/* Visitor Info */}
        <div className="bg-[#FDECE6] p-6 rounded-lg">
          <h2 className="text-3xl font-serif font-bold text-[#B45D6D] mb-4">Visitor Information</h2>
          <ul className="list-disc pl-6 text-[#5C4033] leading-relaxed space-y-2">
            <li><strong>Location:</strong> Jaipur, Rajasthan, India</li>
            <li><strong>Founded:</strong> 1727</li>
            <li><strong>Nickname:</strong> Pink City</li>
            <li><strong>Famous For:</strong> Historic forts, palaces, crafts, culture</li>
            <li>
              <strong>Tourist Website:</strong>{" "}
              <a 
                href="https://www.jaipur.rajasthan.gov.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#B45D6D] underline hover:text-[#8B5E3C]/80 transition-colors"
              >
                jaipur.rajasthan.gov.in
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}
