import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Scale, Mail } from "lucide-react"

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[220px] md:h-[300px]">
        <img
          src="/images/bg4.png"
          alt="Terms and Conditions Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-white uppercase tracking-wider">
              Terms & Conditions
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
              <Scale className="w-5 h-5" />
              COPEN 14 - 2026 Terms of Use
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to the website of COPEN 14 - 2026. These terms and conditions (“Terms”) govern your access to and use of our website, including any content, features, and services offered through the website. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-foreground mb-2">Intellectual Property Rights</h2>
              <p>
                The content, features, and services provided on our website are owned or licensed by COPEN 14 - 2026 and are protected by copyright, trademark, patent, and other intellectual property laws. You may not use any content, features, or services on our website without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-2">Disclaimers and Limitations of Liability</h2>
              <p className="mb-4">
                Our website is provided “as is” and without warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or timeliness of the information on our website, and we are not responsible for any errors or omissions.
              </p>
              <p>
                In no event shall COPEN 14 Organising Team, MNIT Jaipur, its directors, faculties, officers, and employees, be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or the inability to use our website, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-2">Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless COPEN 14 - 2026, its organizers, directors, officers, employees, volunteers, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees and expenses) arising out of or relating to (i) your use of the website, (ii) your violation of these Terms and Conditions, or (iii) your infringement of any rights of a third party.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-2">Governing Law and Jurisdiction</h2>
              <p>
                These Terms and your use of our website shall be governed by and construed in accordance with the laws of the State of [Rajasthan], without giving effect to any choice of law or conflict of law provisions. Any legal action or proceeding arising out of or in connection with these Terms or your use of our website shall be brought exclusively in the state, and you consent to the jurisdiction of such courts.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground mb-2">Changes to These Terms</h2>
              <p>
                Our website is not intended for use by children and may update these Terms from time to time by posting a new version on our website. We encourage you to review these Terms periodically to stay informed about any changes. Your continued use of our website following the posting of changes to these Terms constitutes your acceptance of those changes' the age of 18, and we do not knowingly collect personal information from children. If you are under the age of 18, please do not use our website or provide any personal information to us.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="text-lg font-bold text-foreground mb-2">Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about this policy or our practices, please contact us at:
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
      </div>

      <Footer />
    </main>
  )
}
