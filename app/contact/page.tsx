import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, Globe, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative isolate">
        <div className="h-[260px] md:h-[340px] w-full bg-[url('/images/bg6.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">CONTACT US</h1>
            <div className="mx-auto mt-3 h-1 w-20 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary/20 py-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Prof. Harlal Singh Mali */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition hover:shadow-xl">
              <Image
                src="/images/co-pat.png"
                alt="Prof. Harlal Singh Mali"
                width={260}
                height={320}
                className="rounded-lg border-4 border-primary/30 object-cover mb-6"
              />
              <h2 className="text-2xl font-extrabold text-primary">
                Prof. Harlal Singh Mali
              </h2>
              <p className="text-gray-700 font-medium mt-1">Organizing Chair & Secretary</p>
              <div className="mt-3 space-y-1 text-gray-600 text-sm">
                <p>Professor & Head of Deptartment</p>
                <p>Department of Mechanical Engineering</p>
                <p>MNIT Jaipur</p>
              </div>
              <div className="mt-4">
                <a
                  href="mailto:harlal.singh@mnit.ac.in"
                  className="text-primary underline font-medium hover:text-primary/80"
                >
                  harlal.singh@mnit.ac.in
                </a>
              </div>
            </div>

            {/* Dr. Anup Malik */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition hover:shadow-xl">
              <Image
                src="/images/anup.png"
                alt="Dr. Anup Malik"
                width={260}
                height={320}
                className="rounded-lg border-4 border-primary/30 object-cover mb-6"
              />
              <h2 className="text-2xl font-extrabold text-primary">
                Dr. Anup Malik
              </h2>
              <p className="text-gray-700 font-medium mt-1">
                Joint Organising Secretary
              </p>
              <div className="mt-3 space-y-1 text-gray-600 text-sm">
                <p>Assistant Professor</p>
                <p>Department of Mechanical Engineering</p>
                <p>MNIT Jaipur, India</p>
              </div>
              <div className="mt-4">
                <a
                  href="mailto:anup.mech@mnit.ac.in"
                  className="text-primary underline font-medium hover:text-primary/80"
                >
                  anup.mech@mnit.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Conference Secretariat & Venue Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Conference Secretariat */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-between transition hover:shadow-xl">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-center text-primary mb-8">
                  Conference Secretariat
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground text-sm md:text-base">Email</h4>
                      <div className="text-sm text-muted-foreground flex flex-col space-y-1">
                        <a href="mailto:copen14@mnit.ac.in" className="hover:text-primary transition-colors">
                          copen14@mnit.ac.in
                        </a>
                        <a href="mailto:harlal.singh@mnit.ac.in" className="hover:text-primary transition-colors">
                          harlal.singh@mnit.ac.in
                        </a>
                        <a href="mailto:anup.mech@mnit.ac.in" className="hover:text-primary transition-colors">
                          anup.mech@mnit.ac.in
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground text-sm md:text-base">Phone</h4>
                      <div className="text-sm text-muted-foreground flex flex-col space-y-1">
                        <a href="tel:+919549654561" className="hover:text-primary transition-colors">
                          +91 95496 54561 (Dr. Harlal Singh Mali)
                        </a>
                        <a href="tel:+919549650950" className="hover:text-primary transition-colors">
                          +91 95496 50950 (Dr. Anup Malik)
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground text-sm md:text-base">Website</h4>
                      <div className="text-sm text-muted-foreground">
                        <a
                          href="https://www.mnit.ac.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          www.mnit.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue Address */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-between transition hover:shadow-xl">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-center text-primary mb-8">
                  Venue Address
                </h3>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-foreground leading-snug">
                      VLTC - Vivekananda Lecture Theatre Complex,
                    </p>
                    <p className="font-semibold text-foreground leading-snug">
                      Malaviya National Institute of Technology
                    </p>
                    <p className="text-muted-foreground">
                      JLN Marg, Jaipur Rajasthan 302017
                    </p>
                    <p className="text-muted-foreground">
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-border/50 shadow-sm mt-4">
                <Image
                  src="/images/vltc.jpg"
                  alt="VLTC - Vivekananda Lecture Theatre Complex, MNIT Jaipur"
                  width={700}
                  height={466}
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* General Contact */}
          <div className="text-center pt-6">
            <p className="text-lg text-gray-700 font-medium">
              For general queries, contact us at:
            </p>
            <a
              href="mailto:copen14@mnit.ac.in"
              className="text-primary underline text-xl font-semibold hover:text-primary/80"
            >
              copen14@mnit.ac.in
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
