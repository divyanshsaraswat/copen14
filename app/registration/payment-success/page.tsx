import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CATEGORY_LABELS,
  TIER_LABELS,
  PAYMENT_MODE_LABELS,
  type Category,
  type Tier,
} from "@/lib/icici-pg"
import { PrintButton } from "./print-button"

function formatPaymentDateTime(raw?: string) {
  // bank format: YYYYMMDDHHMISS
  if (!raw || raw.length < 14) return raw
  const y = raw.slice(0, 4), mo = raw.slice(4, 6), d = raw.slice(6, 8)
  const h = raw.slice(8, 10), mi = raw.slice(10, 12), s = raw.slice(12, 14)
  return `${d}/${mo}/${y} · ${h}:${mi}`
}

function formatINR(amount?: string) {
  if (!amount) return "₹0.00"
  return `₹${Number(amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`
}

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>
}) {
  const sp = await searchParams
  const category = sp.category as Category | undefined
  const tier = sp.tier as Tier | undefined
  const categoryLabel = category ? CATEGORY_LABELS[category] : "Delegate"
  const tierLabel = tier ? TIER_LABELS[tier] : "Standard"
  const paymentModeLabel = sp.paymentMode ? (PAYMENT_MODE_LABELS[sp.paymentMode] ?? sp.paymentMode) : "Online Payment"

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 print:py-0 print:px-0">
      <div className="flex justify-center gap-3 mb-6 print:hidden">
        <PrintButton />
        <Button variant="outline" asChild>
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Back to Website
          </Link>
        </Button>
      </div>

      <div className="border border-gray-300 rounded-lg p-8 sm:p-10 bg-white text-gray-900 print:border-0 print:p-0">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 pb-4 border-b-2 border-gray-900">
          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-500">
              MALAVIYA NATIONAL INSTITUTE OF TECHNOLOGY (MNIT) JAIPUR
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold mt-1">COPEN 14 — Payment Receipt</h1>
            <p className="text-sm text-gray-600 mt-1">
              14th International Conference on Precision, Meso, Micro and Nano Engineering
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-600 text-green-700 text-xs font-bold bg-green-50">
              &#10003; PAYMENT COMPLETED
            </span>
            <p className="text-xs text-gray-500 mt-1.5">Electronic Verification Copy</p>
          </div>
        </div>

        {/* Info bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 rounded-md px-5 py-4 mt-6 text-sm">
          <div>
            <p className="text-xs font-semibold tracking-wide text-gray-500">TRANSACTION ID</p>
            <p className="font-semibold mt-0.5">{sp.txnID || "—"}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-gray-500">MERCHANT REFERENCE</p>
            <p className="font-semibold mt-0.5">{sp.merchantTxnNo || "—"}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-gray-500">DATE & TIME</p>
            <p className="font-semibold mt-0.5">{formatPaymentDateTime(sp.paymentDateTime) || "—"}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-gray-500">PAYMENT MODE</p>
            <p className="font-semibold mt-0.5">{paymentModeLabel}</p>
          </div>
        </div>

        {/* Registration particulars */}
        <p className="text-xs font-bold tracking-wider text-gray-700 mt-8 mb-2">REGISTRATION PARTICULARS</p>
        <table className="w-full text-sm border-t border-gray-300">
          <thead>
            <tr className="bg-gray-50 text-xs font-semibold tracking-wide text-gray-500">
              <th className="text-left py-2 px-3">DESCRIPTION</th>
              <th className="text-left py-2 px-3">CATEGORY / TIER</th>
              <th className="text-center py-2 px-3">QTY</th>
              <th className="text-right py-2 px-3">TOTAL (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 align-top">
                <p className="font-semibold">Delegate Conference Registration Fee</p>
                <p className="text-xs text-gray-500">COPEN 14 — Full Access &amp; Proceedings</p>
              </td>
              <td className="py-3 px-3 align-top">
                <p>{categoryLabel}</p>
                <p className="text-green-700 font-medium">{tierLabel}</p>
              </td>
              <td className="py-3 px-3 align-top text-center">1</td>
              <td className="py-3 px-3 align-top text-right font-semibold">{formatINR(sp.amount)}</td>
            </tr>
          </tbody>
        </table>

        {/* Participant + Settlement */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div className="border border-gray-300 rounded-md p-5">
            <p className="text-xs font-bold tracking-wider text-gray-700 mb-3">
              PARTICIPANT &amp; CONTACT INFORMATION
            </p>
            <dl className="text-sm space-y-2">
              <div className="flex justify-between">
                <dt className="text-gray-500">Registered Email</dt>
                <dd className="font-medium text-right">{sp.customerEmailID || "—"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Mobile Contact</dt>
                <dd className="font-medium text-right">
                  {sp.customerMobileNo ? `+91 ${sp.customerMobileNo}` : "—"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Registration Tier</dt>
                <dd className="font-medium text-right">{tierLabel}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Host Institution</dt>
                <dd className="font-medium text-right">MNIT Jaipur, Rajasthan</dd>
              </div>
            </dl>
          </div>

          <div className="border-2 border-gray-900 rounded-md p-5">
            <p className="text-xs font-bold tracking-wider text-gray-700 mb-3">SETTLEMENT SUMMARY</p>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Base Registration Fee</span>
                <span className="font-medium">{formatINR(sp.amount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Taxes &amp; Gateway Surcharges</span>
                <span className="font-medium">Inclusive</span>
              </div>
              <div className="border-t border-gray-300 pt-2 mt-2 flex justify-between items-baseline">
                <span className="font-bold">AMOUNT PAID</span>
                <span className="font-bold text-xl">{formatINR(sp.amount)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Important info + signature */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 mt-8">
          <div className="text-xs text-gray-600 max-w-md">
            <p className="font-bold text-gray-700 mb-1">Important Information:</p>
            <p>
              This is an official system-generated registration receipt for COPEN 14 hosted by Malaviya
              National Institute of Technology (MNIT) Jaipur. Please preserve this document for
              verification and on-site delegate kit collection at the registration desk. No physical
              signature is required for electronic validation.
            </p>
          </div>
          <div className="text-right text-sm shrink-0">
            <div className="border-t border-gray-400 pt-1 w-48 ml-auto">
              <p className="font-bold">Organizing Chair / Finance</p>
              <p className="text-xs text-gray-500">COPEN 14 Secretariat &middot; MNIT Jaipur</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between gap-2 border-t border-gray-300 mt-8 pt-3 text-xs text-gray-500">
          <span>COPEN 14 Secretariat &middot; Malaviya National Institute of Technology Jaipur</span>
          <span>Receipt ID: {sp.txnID || "—"}</span>
          <span>Page 1 of 1</span>
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6 print:hidden">
        Please keep this receipt and submit the reference via the registration form.
      </p>
    </main>
  )
}
