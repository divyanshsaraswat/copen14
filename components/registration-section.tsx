 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function RegistrationSection() {
  const categories = [
    {
      title: "Student",
      price: "₹5,000",
      earlyBird: "₹4,000",
      features: [
        "Access to all technical sessions",
        "Conference materials",
        "Lunch and refreshments",
        "Certificate of participation",
        "Poster presentation opportunity",
      ],
    },
    {
      title: "Academic",
      price: "₹8,000",
      earlyBird: "₹6,500",
      features: [
        "Access to all technical sessions",
        "Conference materials",
        "Lunch and refreshments",
        "Certificate of participation",
        "Oral/Poster presentation",
        "Conference proceedings",
      ],
      popular: true,
    },
    {
      title: "Industry",
      price: "₹12,000",
      earlyBird: "₹10,000",
      features: [
        "Access to all technical sessions",
        "Conference materials",
        "Lunch and refreshments",
        "Certificate of participation",
        "Oral/Poster presentation",
        "Conference proceedings",
        "Networking opportunities",
      ],
    },
  ]

  return (
    <section id="registration" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-primary">Registration</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Secure your spot at COPEN 14. Early bird rates available until November 15, 2026.
          </p>
          <p className="text-sm text-muted-foreground">
            International participants: USD equivalent rates will be provided upon request.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`relative border-2 ${
                category.popular ? "border-primary shadow-lg scale-105" : "border-border"
              }`}
            >
              {category.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground line-through">{category.price}</p>
                  <p className="text-3xl font-bold text-primary">{category.earlyBird}</p>
                  <p className="text-xs text-muted-foreground">Early Bird Rate</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={category.popular ? "default" : "outline"}>
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto border-2">
          <CardHeader>
            <CardTitle className="text-center">Registration Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  1
                </div>
                <h3 className="font-semibold mb-2">Submit Abstract</h3>
                <p className="text-sm text-muted-foreground">Submit your research abstract for review</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  2
                </div>
                <h3 className="font-semibold mb-2">Await Acceptance</h3>
                <p className="text-sm text-muted-foreground">Receive notification of acceptance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  3
                </div>
                <h3 className="font-semibold mb-2">Complete Payment</h3>
                <p className="text-sm text-muted-foreground">Pay registration fee online</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  4
                </div>
                <h3 className="font-semibold mb-2">Receive Confirmation</h3>
                <p className="text-sm text-muted-foreground">Get registration confirmation email</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
