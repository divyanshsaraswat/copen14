import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SpeakersPageContent } from "@/components/speakers-page"

export default function SpeakersPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <SpeakersPageContent />
      </div>
      <Footer />
    </main>
  )
}
