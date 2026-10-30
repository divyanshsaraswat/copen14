import { NextRequest, NextResponse } from "next/server"
import { computeHash } from "@/lib/icici-pg"

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const params: Record<string, string> = {}
  for (const [k, v] of form.entries()) params[k] = String(v)

  const { secureHash, ...rest } = params
  const valid = secureHash && computeHash(rest) === secureHash.toLowerCase()

  const ok = valid && (params.responseCode === "000" || params.responseCode === "0000")

  // ponytail: no persistence layer decided yet (no DB in repo) — just route the
  // user to a result page with the bank's txn ref. Wire this to real storage
  // once "where does paid status live" is answered.
  const origin = req.nextUrl.origin
  const dest = new URL(ok ? "/registration/payment-success" : "/registration/payment-failed", origin)
  dest.searchParams.set("txnID", params.txnID ?? "")
  dest.searchParams.set("merchantTxnNo", params.merchantTxnNo ?? "")
  if (!valid) dest.searchParams.set("reason", "hash-mismatch")

  return NextResponse.redirect(dest, { status: 303 })
}
