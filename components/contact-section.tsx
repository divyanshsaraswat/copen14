import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-primary">Contact Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions? Get in touch with the organizing committee. We're here to help.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Secretariat Card */}
          <Card className="border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <h3 className="font-semibold text-2xl mb-6 text-primary text-center">Conference Secretariat</h3>
              <div className="space-y-6 text-gray-800">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <div className="space-y-1">
                      <a href="mailto:copen14@mnit.ac.in" className="text-primary hover:underline block">
                        copen14@mnit.ac.in
                      </a>
                      <a href="mailto:harlal.singh@mnit.ac.in" className="text-primary hover:underline block">
                        harlal.singh@mnit.ac.in
                      </a>
                      <a href="mailto:anup.mech@mnit.ac.in" className="text-primary hover:underline block">
                        anup.mech@mnit.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:+919549654561" className="text-primary hover:underline block">
                        +91 95496 54561 (Dr. Harlal Singh Mali)
                      </a>
                      <a href="tel:+919549650950" className="text-primary hover:underline block">
                        +91 95496 50950 (Dr. Anup Malik)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Website</p>
                    <a href="https://www.mnit.ac.in" target="_blank" className="text-primary hover:underline">
                      www.mnit.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Venue Card */}
          <Card className="border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <h3 className="font-semibold text-2xl mb-6 text-primary text-center">Venue Address</h3>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-2">VLTC - Vivekananda Lecture Theatre Complex, Malaviya National Institute of Technology</p>
                  <p className="text-muted-foreground leading-relaxed">
                    JLN Marg, Jaipur 
                    Rajasthan 302017<br />
                    India
                  </p>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-xl overflow-hidden border">
                <img
                  src="/images/vltc.jpg"
                  alt="MNIT Jaipur Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Organizing Committee (Redesigned) */}
        <div className="max-w-6xl mx-auto mt-20 text-center">
          <h3 className="font-serif font-bold text-4xl text-primary mb-12">
            Organizing Committee
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Patron */}
            <Card className="hover:shadow-lg transition-transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="font-semibold text-xl text-primary mb-3">Patron</h4>
                <p className="font-medium text-lg">Prof. N. P. Padhy</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Director, MNIT Jaipur, India
                </p>
              </CardContent>
            </Card>

            {/* Chair */}
            <Card className="hover:shadow-lg transition-transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="font-semibold text-xl text-primary mb-3">
                  Organizing Chair & Secretary
                </h4>
                <p className="font-medium text-lg">Prof. Harlal Singh Mali</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Professor, Department of Mechanical Engineering, MNIT Jaipur, India
                </p>
              </CardContent>
            </Card>

            {/* Joint Secretaries */}
            <Card className="hover:shadow-lg transition-transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="font-semibold text-xl text-primary mb-3">
                  Joint Organizing Secretaries
                </h4>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium text-lg">Dr. Anup Malik</p>
                    <p className="text-muted-foreground text-sm">
                      Assistant Professor, Mechanical Engineering
                    </p>
                  </li>
                  <li>
                    <p className="font-medium text-lg">Dr. Pankaj Kumar Gupta</p>
                    <p className="text-muted-foreground text-sm">
                      Associate Professor, Mechanical Engineering
                    </p>
                  </li>
                  <li>
                    <p className="font-medium text-lg">Dr. Tapas Bajpai</p>
                    <p className="text-muted-foreground text-sm">
                      Assistant Professor, Mechanical Engineering
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
