import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SpeakersSection() {
  const speakers = [
    {
      name: "To Be Announced",
      title: "Keynote Speaker",
      affiliation: "Leading Research Institution",
      image: "/professional-speaker.png",
      expertise: ["Precision Engineering", "Nanotechnology"],
    },
    {
      name: "To Be Announced",
      title: "Invited Speaker",
      affiliation: "Industry Expert",
      image: "/professional-speaker.png",
      expertise: ["Micro Manufacturing", "Advanced Materials"],
    },
    {
      name: "To Be Announced",
      title: "Invited Speaker",
      affiliation: "Academic Researcher",
      image: "/professional-speaker.png",
      expertise: ["MEMS", "Precision Metrology"],
    },
  ]

  return (
    <section id="speakers" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-primary">Distinguished Speakers</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Learn from world-renowned experts and thought leaders in precision engineering, micro and nano
            manufacturing, and related fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted overflow-hidden">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{speaker.name}</h3>
                  <p className="text-primary font-medium mb-2">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{speaker.affiliation}</p>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((area, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">More speakers will be announced soon. Stay tuned for updates.</p>
        </div>
      </div>
    </section>
  )
}
