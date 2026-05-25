import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import ComingSoon from "@/components/coming-soon"

export default function ProgramPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Announcement bar */}
      <div className="w-full bg-primary/10">
        <div className="container mx-auto px-4">
          {/* <p className="mx-auto max-w-4xl text-center py-3 text-primary font-medium">
            COPEN 13 - BEST PAPER AWARDS in association with Springer Nature !!!
          </p> */}
        </div>
      </div>

      {/* Speakers card */}
      <div className="relative rounded-2xl border border-slate-200 bg-white text-slate-800 flex-grow">
        <div className="px-8 py-14 md:px-12 md:py-20 text-center">
          <p className="uppercase tracking-wider text-xs md:text-sm text-slate-500">
           Program
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            To Be Announced
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The complete program outline, featuring all sessions and activities, will be announced shortly.
          </p>

          <div className="mt-8 flex justify-center">
            <span className="h-px w-16 bg-slate-300" />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

