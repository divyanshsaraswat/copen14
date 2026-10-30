import { NextRequest, NextResponse } from "next/server"
import { PG, amountFor, computeHash, type Category, type Tier } from "@/lib/icici-pg"

function txnDateNow(): string {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { category, tier, name, email, mobile } = body as {
    category: Category
    tier: Tier
    name: string
    email: string
    mobile: string
  }

  let amount: number
  try {
    amount = amountFor(category, tier)
  } catch {
    return NextResponse.json({ error: "Invalid category/tier" }, { status: 400 })
  }
  if (!name || !email || !mobile) {
    return NextResponse.json({ error: "Missing payer details" }, { status: 400 })
  }

  const origin = req.nextUrl.origin
  const merchantTxnNo = `COPEN${Date.now()}`

  const params: Record<string, string> = {
    merchantId: PG.MERCHANT_ID,
    aggregatorID: PG.AGGREGATOR_ID,
    merchantTxnNo,
    amount: amount.toFixed(2),
    currencyCode: "356",
    payType: "0",
    customerEmailID: email,
    transactionType: "SALE",
    returnURL: `${origin}/api/payment/callback`,
    txnDate: txnDateNow(),
    customerMobileNo: mobile,
    customerName: name,
    addlParam1: category,
    addlParam2: tier,
  }
  params.secureHash = computeHash(params)

  const res = await fetch(`${PG.BASE_URL}/v2/initiateSale`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  })
  const data = await res.json()

  if (data.responseCode !== "R1000" || !data.redirectURI || !data.tranCtx) {
    return NextResponse.json(
      { error: data.responseDescription ?? "Failed to initiate payment" },
      { status: 502 },
    )
  }

  return NextResponse.json({
    redirectUrl: `${data.redirectURI}?tranCtx=${encodeURIComponent(data.tranCtx)}`,
  })
}
