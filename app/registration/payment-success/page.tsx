import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ txnID?: string; merchantTxnNo?: string }>
}) {
  const { txnID, merchantTxnNo } = await searchParams
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-24 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Payment Successful</h1>
        <p className="text-muted-foreground mb-6">
          Thank you — your registration payment has been received.
        </p>
        {txnID && (
          <p className="text-sm text-muted-foreground">
            Transaction ID: <span className="font-mono">{txnID}</span>
            {merchantTxnNo && <> &middot; Ref: <span className="font-mono">{merchantTxnNo}</span></>}
          </p>
        )}
        <p className="text-sm text-muted-foreground mt-4">
          Please keep this reference and submit it via the registration form.
        </p>
      </main>
      <Footer />
    </>
  )
}
