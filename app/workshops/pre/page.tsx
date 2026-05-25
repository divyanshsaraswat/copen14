import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ComingSoon from "@/components/coming-soon"

export default function PreWorkshopsPage() {
  return (
    <main>
      <Header />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Pre Conference Workshops</h1>
          <ComingSoon title="Pre Conference Workshops" subtitle="Workshops" />
        </div>
      </section>
      <Footer />
    </main>
  )
}
