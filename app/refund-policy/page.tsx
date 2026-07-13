import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertOctagon, Mail } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[220px] md:h-[300px]">
        <img
          src="/images/bg4.png"
          alt="Refund Policy Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-white uppercase tracking-wider">
              Refund & Cancellation Policy
            </h1>
            <div className="mx-auto mt-3 h-1 w-20 bg-primary rounded" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 max-w-3xl flex-grow">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-xs space-y-8">
          
          <div className="flex items-start gap-4 p-5 rounded-xl bg-destructive/5 border border-destructive/10">
            <AlertOctagon className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h2 className="font-bold text-foreground">Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Refund is not applicable once the payment is made.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">Cancellation & Registration Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Registered user can cancel his/her registration by reaching the organizers within 15 days from the date of registration.
            </p>
          </div>

          <div className="pt-6 border-t border-border space-y-4">
            <h2 className="text-lg font-bold text-foreground">Contact Organizers</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any cancellations, kindly reach out to us at:
            </p>
            <a
              href="mailto:copen14@mnit.ac.in"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              copen14@mnit.ac.in
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
