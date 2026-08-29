import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SponsorsHero } from "@/components/sponsors/hero";
import { SponsorsPageContent } from "@/components/sponsors-page-content";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SponsorsHero />
      <SponsorsPageContent />
      <Footer />
    </main>
  );
}
