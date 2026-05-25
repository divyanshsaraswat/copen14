import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SpeakersSection } from "@/components/speakers-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Countdown } from "@/components/countdown"
import { OrganisedBy } from "@/components/organised-by"
import { CarouselSection } from "@/components/CarouselSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />

      {/* 🔥 Carousel Section */}
      <CarouselSection />

      {/* Quick action cards */}
      <section className="bg-secondary/60 py-12 animate-in fade-in-50 slide-in-from-bottom-2">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="/call-for-papers"
              className="group rounded-lg bg-background border p-5 hover:shadow-md transition"
            >
              <img
                src="/images/call-for-papers.png"
                alt="Call for Papers"
                className="w-full h-36 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-primary group-hover:underline">
                Call for Papers
              </h3>
              <p className="text-sm text-muted-foreground">
                Areas, awards, volumes and recommended journals.
              </p>
            </a>

            <a
              href="/registration"
              className="group rounded-lg bg-background border p-5 hover:shadow-md transition"
            >
              <img
                src="/images/registration-fees.png"
                alt="Registration"
                className="w-full h-36 rounded mb-4"
              />
              <h3 className="font-semibold text-primary group-hover:underline">
                Registration Fees
              </h3>
              <p className="text-sm text-muted-foreground">
                National and International delegates, workshops and sessions.
              </p>
            </a>
          </div>
        </div>
      </section>

      <Countdown />
      <OrganisedBy />
      <AboutSection />
      {/* <SpeakersSection /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}
