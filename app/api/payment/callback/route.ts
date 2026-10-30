import { NextRequest, NextResponse } from "next/server"
import { computeHash } from "@/lib/icici-pg"
import { db } from "@/lib/db"

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const params: Record<string, string> = {}
  for (const [k, v] of form.entries()) params[k] = String(v)

  const { secureHash, ...rest } = params
  const valid = secureHash && computeHash(rest) === secureHash.toLowerCase()

  const ok = valid && (params.responseCode === "000" || params.responseCode === "0000")

  if (params.merchantTxnNo) {
    const client = await db()
    await client.execute({
      sql: `UPDATE registrations SET
        status = ?, txn_id = ?, payment_mode = ?, response_code = ?, updated_at = datetime('now')
        WHERE merchant_txn_no = ?`,
      args: [
        ok ? "success" : "failed",
        params.txnID ?? null,
        params.paymentMode ?? null,
        params.responseCode ?? null,
        params.merchantTxnNo,
      ],
    })
  }

  const origin = req.nextUrl.origin
  const dest = new URL(ok ? "/registration/payment-success" : "/registration/payment-failed", origin)
  dest.searchParams.set("txnID", params.txnID ?? "")
  dest.searchParams.set("merchantTxnNo", params.merchantTxnNo ?? "")
  if (ok) {
    // Fields the bank echoes back on a successful payment response (spec ch.7)
    // — used to render the receipt, not persisted anywhere yet.
    dest.searchParams.set("amount", params.amount ?? "")
    dest.searchParams.set("paymentDateTime", params.paymentDateTime ?? "")
    dest.searchParams.set("paymentMode", params.paymentMode ?? "")
    dest.searchParams.set("customerEmailID", params.customerEmailID ?? "")
    dest.searchParams.set("customerMobileNo", params.customerMobileNo ?? "")
    dest.searchParams.set("category", params.addlParam1 ?? "")
    dest.searchParams.set("tier", params.addlParam2 ?? "")
  }
  if (!valid) dest.searchParams.set("reason", "hash-mismatch")

  return NextResponse.redirect(dest, { status: 303 })
}
