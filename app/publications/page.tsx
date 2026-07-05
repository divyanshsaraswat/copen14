import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PublicationsPageContent } from "@/components/publications-page"

export default function PublicationsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <PublicationsPageContent />
      </div>
      <Footer />
    </main>
  )
}
