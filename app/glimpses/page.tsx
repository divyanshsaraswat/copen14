import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const sections = [
  { title: "Pre Conference", key: "pre" },
  { title: "Day 1", key: "day1" },
  { title: "Day 2", key: "day2" },
  { title: "Day 3", key: "day3" },
  { title: "Post Conference", key: "post" },
  { title: "COPEN Highlights", key: "highlights" },
]

function sampleImages(key: string) {
  return [
    { w: 900, h: 620, q: `${key}%20keynote%20stage` },
    { w: 600, h: 900, q: `${key}%20auditorium` },
    { w: 700, h: 500, q: `${key}%20networking%20crowd` },
    { w: 600, h: 760, q: `${key}%20poster%20session` },
    { w: 880, h: 560, q: `${key}%20workshop` },
    { w: 640, h: 800, q: `${key}%20panel` },
    { w: 900, h: 560, q: `${key}%20campus` },
  ]
}

// generate random span 1 or 2
function randSpan() {
  return Math.random() < 0.5 ? 1 : 2
}

export default function GlimpsesPage() {
  return (
    <main>
      <Header />
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
            Glimpses
          </h1>
          {sections.map((s) => (
            <div key={s.key} className="mb-12">
              <div className="flex items-center gap-4 mb-5">
                <h2 className="text-xl md:text-2xl font-serif font-bold">{s.title}</h2>
                <div className="h-[2px] flex-1 bg-muted" />
              </div>
              <div className="grid grid-flow-dense auto-rows-auto gap-4 grid-cols-3">
                {sampleImages(s.key).map((img, idx) => {
                  const colSpan = randSpan()
                  const rowSpan = randSpan()
                  return (
                    <figure
                      key={`${s.key}-${idx}`}
                      className={`col-span-${colSpan} row-span-${rowSpan} overflow-hidden rounded-lg border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all`}
                    >
                      <img
                        src={`/placeholder.svg?height=${img.h}&width=${img.w}&query=${img.q}`}
                        alt={`${s.title} photo`}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  )
                })}
              </div>
            </div>
          ))}
          <hr className="border-t border-muted mt-12" />
        </div>
      </section>
      <Footer />
    </main>
  )
}
