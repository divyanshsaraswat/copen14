import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Prof. Harlal Singh Mali */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition hover:shadow-xl">
              <Image
                src="/images/CoP.png"
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

          {/* General Contact */}
          <div className="text-center mt-14">
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
