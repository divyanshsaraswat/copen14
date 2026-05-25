import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Globe,
      title: "Global Platform",
      description: "Connect with leading researchers and industry experts from around the world",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Explore cutting-edge research in precision and nano engineering",
    },
    {
      icon: Users,
      title: "Networking",
      description: "Build valuable connections with peers and potential collaborators",
    },
    {
      icon: Award,
      title: "Best Paper Awards",
      description: "Recognition for outstanding research contributions and presentations",
    },
  ]

  return (
    <section id="about" className="py-24 bg-background scroll-mt-[8.75rem]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-primary">About COPEN 14</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The International Conference on Precision, Meso, Micro and Nano Engineering (COPEN) is a premier forum for
            researchers, academicians, and industry professionals to exchange ideas and present research relevant to
            precision engineering at various scales.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img src="/images/mnit-logo.png" alt="MNIT Jaipur" className="w-48 h-48 object-contain" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl mb-4 text-primary">Hosted by MNIT Jaipur</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Malaviya National Institute of Technology Jaipur is one of India's premier technical institutions,
                    known for its excellence in engineering education and research. MNIT Jaipur is proud to host the
                    14th edition of COPEN, continuing the conference's tradition of fostering innovation and
                    collaboration in precision engineering.
                  </p>
                  {/* <p className="text-sm text-muted-foreground italic">
                    Building on the success of COPEN 13 at NIT Calicut, we aim to create an even more impactful platform
                    for knowledge exchange and professional development.
                  </p> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  )
}
