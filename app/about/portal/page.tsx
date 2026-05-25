"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CopenPortalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Full-screen Hero */}
      <section className="relative w-full h-screen">
        <img
          src="/images/bg2.png"
          alt="COPEN Portal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-serif font-bold drop-shadow-lg mb-6">
            COPEN COMPREHENSIVE PORTAL
          </h1>
          <p className="text-white text-lg md:text-2xl mb-8">
            Explore the consolidated archive of COPEN conferences, including past editions, committees, publications, and related resources.
          </p>
          <a
            href="https://www.copen.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition"
          >
            Visit Portal
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
