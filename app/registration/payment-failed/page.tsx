import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { XCircle } from "lucide-react"

export default async function PaymentFailedPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string; reason?: string }>
}) {
  const { ref } = await searchParams
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-24 text-center">
        <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Payment Failed</h1>
        <p className="text-muted-foreground mb-6">
          Your payment could not be completed. No amount has been charged, or it will be reversed automatically.
        </p>
        {ref && (
          <p className="text-sm text-muted-foreground">
            Reference: <span className="font-mono">{ref}</span>
          </p>
        )}
        <Link href="/registration#payment-details" className="inline-block mt-6 text-primary underline">
          Try again
        </Link>
      </main>
      <Footer />
    </>
  )
}
