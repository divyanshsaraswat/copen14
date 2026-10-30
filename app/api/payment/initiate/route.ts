import { NextRequest, NextResponse } from "next/server"
import { PG, MOCK_MODE, amountFor, usdAmountFor, usdToInr, computeHash, type Category, type Tier } from "@/lib/icici-pg"
import { db } from "@/lib/db"

function txnDateNow(): string {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { category, tier, name, email, mobile, international } = body as {
    category: Category
    tier: Tier
    name: string
    email: string
    mobile: string
    international?: boolean
  }

  let amount: number
  let usdAmount: number | undefined
  try {
    if (international) {
      usdAmount = usdAmountFor(category, tier)
      amount = await usdToInr(usdAmount)
    } else {
      amount = amountFor(category, tier)
    }
  } catch {
    return NextResponse.json(
      { error: international ? "Currency conversion unavailable, please try again" : "Invalid category/tier" },
      { status: international ? 502 : 400 },
    )
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

  const client = await db()
  await client.execute({
    sql: `INSERT INTO registrations
      (merchant_txn_no, name, email, mobile, category, tier, international, amount_inr, usd_amount)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [merchantTxnNo, name, email, mobile, category, tier, international ? 1 : 0, amount, usdAmount ?? null],
  })

  if (MOCK_MODE) {
    // No real bank call: hand the signed request straight to our own mock
    // "bank" page, which will post a matching, correctly-signed response to
    // our callback — exercising the same verification code as production.
    const tranCtx = Buffer.from(JSON.stringify(params)).toString("base64url")
    return NextResponse.json({
      redirectUrl: `${origin}/payment/mock?tranCtx=${tranCtx}`,
    })
  }

  const res = await fetch(`${PG.BASE_URL}/v2/initiateSale`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  })
  let data: { responseCode?: string; redirectURI?: string; tranCtx?: string; responseDescription?: string }
  try {
    data = await res.json()
  } catch {
    return NextResponse.json({ error: "ICICI PG returned an unexpected response" }, { status: 502 })
  }

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
