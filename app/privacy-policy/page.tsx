import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShieldCheck, Mail } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[220px] md:h-[300px]">
        <img
          src="/images/bg4.png"
          alt="Privacy Policy Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-white uppercase tracking-wider">
              Privacy Policy
            </h1>
            <div className="mx-auto mt-3 h-1 w-20 bg-primary rounded" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 max-w-4xl flex-grow">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-xs space-y-8">
          
          <div className="border-b border-border pb-6">
            <div className="flex items-center gap-2 text-primary font-bold text-lg mb-3">
              <ShieldCheck className="w-5 h-5" />
              COPEN 14 - 2026
            </div>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Thank you for visiting COPEN 14 - 2026 website. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website. This website is managed by <strong>Scasys Technologies Pvt. Ltd. Rajasthan, India</strong> on behalf of <strong>COPEN 14 Organising Team</strong>.
            </p>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">1. Information we collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground/90">Personal Information</strong> – We may collect personal information that you voluntarily provide, including but not limited to your name, email address, phone number, company details, and other information necessary for the services we offer.
                </li>
                <li>
                  <strong className="text-foreground/90">Automatically Collected Information</strong> – We may also collect certain information automatically when you visit our website, such as your IP address, browser type, operating system, and browsing behavior.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground/90">Providing Services</strong> – We use the collected information to provide the services offered by COPEN 14 - 2026, including business matchmaking, investment facilitation, and other related services.
                </li>
                <li>
                  <strong className="text-foreground/90">Communication</strong> – We may use your contact information to communicate with you about our services, upcoming events, and other relevant information. You can opt-out of these communications at any time.
                </li>
                <li>
                  <strong className="text-foreground/90">Analytics</strong> – We may use analytics tools to analyze website traffic and user behavior, helping us improve our website and services.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share information with trusted partners and service providers who assist us in operating our website or providing services, subject to confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">4. Security</h2>
              <p>
                We take reasonable measures to protect the confidentiality and security of your personal information. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">5. Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Please review the privacy policies of these third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">7. Children’s Privacy</h2>
              <p>
                Our services are not directed at children under the age of 13. We do not knowingly collect or maintain personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">8. Government Organization</h2>
              <p>
                MNIT Jaipur is a central government funded organization. This Privacy Policy governs the collection and use of information by MNIT Jaipur.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">9. Changes to this Privacy Policy</h2>
              <p>
                COPEN 14 organising chair reserve the right to update or modify this Privacy Policy at any time. The effective date will indicate the latest revision. Please review this page periodically for changes.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="text-lg font-bold text-foreground mb-3">10. Contact Information</h2>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <a
                href="mailto:copen14@mnit.ac.in"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
                copen14@mnit.ac.in
              </a>
              <p className="mt-4 text-sm text-muted-foreground/80 italic">
                By using the COPEN 14 - 2026 website, you agree to the terms of this Privacy Policy.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
