import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function VenuePage() {
  return (
    <main>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Venue</h1>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Malaviya National Institute of Technology, JLN Marg, Jaipur, Rajasthan 302017, India.
              </p>
              <div className="mt-6 aspect-video rounded-lg overflow-hidden bg-muted">
                <img src="/images/hero-mnit-vltc.jpg" alt="MNIT Jaipur Campus" className="w-full h-full object-cover" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}
