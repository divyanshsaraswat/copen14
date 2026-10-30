import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import { CATEGORY_LABELS, TIER_LABELS, type Category, type Tier } from "@/lib/icici-pg"
import { PrintButton } from "./print-button"

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <div className="flex justify-between py-2 border-b border-dashed last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  )
}

function formatPaymentDateTime(raw?: string) {
  // bank format: YYYYMMDDHHMISS
  if (!raw || raw.length < 14) return raw
  const y = raw.slice(0, 4), mo = raw.slice(4, 6), d = raw.slice(6, 8)
  const h = raw.slice(8, 10), mi = raw.slice(10, 12), s = raw.slice(12, 14)
  return `${d}/${mo}/${y} ${h}:${mi}:${s}`
}

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>
}) {
  const sp = await searchParams
  const category = sp.category as Category | undefined
  const tier = sp.tier as Tier | undefined

  return (
    <>
      <div className="print:hidden">
        <Header />
      </div>
      <main className="max-w-2xl mx-auto px-4 py-16 print:py-0">
        <div className="text-center mb-8 print:hidden">
          <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-3" />
          <h1 className="text-2xl font-bold">Payment Successful</h1>
          <p className="text-muted-foreground">Thank you — your registration payment has been received.</p>
        </div>

        <div className="border rounded-lg p-6 sm:p-8 print:border-0 print:p-0 bg-card">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div>
              <h2 className="font-bold text-lg">COPEN 14 — Registration Receipt</h2>
              <p className="text-sm text-muted-foreground">MNIT Jaipur</p>
            </div>
            <CheckCircle2 className="w-8 h-8 text-green-600 hidden print:block" />
          </div>

          <div className="text-sm">
            <Row label="Transaction ID" value={sp.txnID} />
            <Row label="Merchant Reference" value={sp.merchantTxnNo} />
            <Row label="Date & Time" value={formatPaymentDateTime(sp.paymentDateTime)} />
            <Row label="Category" value={category ? CATEGORY_LABELS[category] : undefined} />
            <Row label="Registration Tier" value={tier ? TIER_LABELS[tier] : undefined} />
            <Row label="Payment Mode" value={sp.paymentMode} />
            <Row label="Email" value={sp.customerEmailID} />
            <Row label="Mobile" value={sp.customerMobileNo} />
            {sp.amount && (
              <div className="flex justify-between pt-3 mt-2 border-t font-bold text-base">
                <span>Amount Paid</span>
                <span>₹{Number(sp.amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-6 space-y-4 print:hidden">
          <PrintButton />
          <p className="text-sm text-muted-foreground">
            Please keep this receipt and submit the reference via the registration form.
          </p>
        </div>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  )
}
