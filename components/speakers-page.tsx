import { Globe } from "lucide-react"

type Speaker = {
  name: string
  role: string
  affiliation?: string
  bio: string
  photo: string
  profileUrl?: string
}

const keynoteSpeakers: Speaker[] = [
  {
    name: "Prof. Dr.-Ing. Frank Brückner",
    role: "Business Unit Leader – Additive Manufacturing and Printing",
    affiliation: "Fraunhofer Institute, Dresden",
    photo: "/images/speakers/f.jpg",
    bio: `Prof. Dr. Frank Brueckner studied automation and control engineering as well as business administration at the Technische Universität Dresden. He completed his PhD on theoretical aspects of laser cladding.

He currently leads the Additive Manufacturing and Printing unit at Fraunhofer IWS Dresden. His work focuses on nozzle- and powder-bed-based AM processes, printing technologies, and data management.

He also supervises PhD scholars at Luleå University of Technology and serves as a lecturer at Technische Universität Dresden.`,
    profileUrl: "https://france.additive-aerospace-summit.com/component/content/article?layout=edit&id=30&Itemid=101",
  },
  {
    name: "Prof. Manish Paliwal",
    role: "Professor of Mechanical Engineering",
    affiliation: "The College of New Jersey, USA",
    photo: "/images/speakers/manish.jpg",
    bio: `Prof. Manish Paliwal is a Professor and former Chair of Mechanical Engineering at The College of New Jersey. He holds an M.Tech from IIT Delhi and a Ph.D. from Southern Illinois University Carbondale.

His research focuses on biomechanics, prosthetic design, and mechanical system modeling, combining engineering analysis with real-world applications in human mobility.

He is also a licensed professional engineer in Maryland, United States.`,
    profileUrl: "https://engineering.tcnj.edu/engineering-faculty/manish-paliwal/",
  },
]

export function SpeakersPageContent() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[260px] md:h-[360px]">
        <img
          src="/images/bg4.png"
          alt="Speakers Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-white">
              SPEAKERS
            </h1>
            <div className="mx-auto mt-3 h-1 w-20 bg-[color:var(--primary)] rounded" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Keynote Speakers */}
        <section>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary uppercase text-center">
            Keynote Speakers
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-24 bg-muted" />

          <div className="mt-12 space-y-12">
            {keynoteSpeakers.map((sp, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                  i % 2 === 1 ? "md:bg-secondary/20" : ""
                } p-6 md:p-8 rounded-xl border border-border/10`}
              >
                {/* Image */}
                <div
                  className={`flex justify-center ${
                    i % 2 === 0
                      ? "md:col-span-3"
                      : "md:col-span-3 md:order-2"
                  }`}
                >
                  <div className="w-full max-w-[240px] aspect-[3/4] overflow-hidden rounded-lg border border-border/60 bg-muted shadow-sm">
                    <img
                      src={sp.photo}
                      alt={sp.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-grow text-left space-y-3 ${
                    i % 2 === 0
                      ? "md:col-span-9"
                      : "md:col-span-9 md:order-1"
                  }`}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {sp.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm md:text-base mt-1">
                      {sp.role}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                      {sp.affiliation}
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                    {sp.bio.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para.trim()}</p>
                    ))}
                  </div>

                  {sp.profileUrl && (
                    <div className="pt-2">
                      <a
                        href={sp.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        View Profile
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Invited Speakers */}
        {/* <section className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary uppercase">
            Invited Speakers
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-24 bg-muted" />
          <p className="mt-8 text-lg text-gray-500 italic">
            To be announced
          </p>
        </section> */}
      </div>
    </div>
  )
}