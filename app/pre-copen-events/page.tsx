import { Header } from "@/components/header";
import Image from "next/image"

function EventCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-4">
      <Image
        src="/placeholder.svg?height=420&width=720"
        alt={`${title} group`}
        width={720}
        height={420}
        className="w-full rounded-lg object-cover"
      />
      <h3 className="text-xl font-extrabold tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  )
}

export default function PreCopenEventsPage() {
  return (
    <main>
      <Header/>
      
      <section className="relative isolate">
        <div className="h-[320px] w-full bg-[url('/placeholder.svg?height=720&width=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">PRE - COPEN EVENTS</h1>
            <div className="mx-auto mt-3 h-1 w-24 bg-primary" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <EventCard
            title="STTPS 2024"
            text="A BIS-Certified Short-Term Training Program on Standards for Mechanical Testing, Powder Metallurgy, Welding and Heat-treatment of Metals."
          />
          <EventCard
            title="NITC‑MoU Partners Annual Summit"
            text="NITC‑MoU Partners Annual Summit at NITC. Replace with full copy for the event summary."
          />
          <EventCard
            title="ADVANCES IN METAL ADDITIVE MANUFACTURING"
            text="Workshop addressing fundamentals, modelling, and materials in Metal Additive Manufacturing."
          />
          <EventCard
            title="AESDP IN ADDITIVE MANUFACTURING"
            text="An Advanced Entrepreneurship Skill Development Programme (2023‑24) in Additive Manufacturing."
          />
        </div>
      </div>
    </main>
  )
}
