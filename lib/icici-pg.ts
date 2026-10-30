import { createHmac } from "crypto"

// ponytail: sample UAT merchant/key from ICICI's spec doc, used to prove the
// integration end-to-end. Swap for our own UAT creds once ICICI issues them,
// then swap ICICI_PG_BASE_URL + these two for prod when going live.
const MERCHANT_ID = process.env.ICICI_PG_MERCHANT_ID ?? "100000000007164"
const AGGREGATOR_ID = process.env.ICICI_PG_AGGREGATOR_ID ?? "A100000000007164"
const SECRET_KEY = process.env.ICICI_PG_SECRET_KEY ?? "db06cca0-838b-4e01-8b20-6ac446ffb6bd"
const BASE_URL = process.env.ICICI_PG_BASE_URL ?? "https://pgpayuat.icicibank.com/tsp/pg/api"

export const PG = { MERCHANT_ID, AGGREGATOR_ID, BASE_URL }

// ponytail: local simulation of ICICI's side, kept only as a fallback for
// offline testing. Default is OFF — we hit the real pgpayuat.icicibank.com
// sandbox using the spec doc's sample UAT creds. Set ICICI_PG_MOCK=true to
// fall back to the local mock (e.g. no network, or bank callback URL not
// reachable from your current environment).
export const MOCK_MODE = process.env.ICICI_PG_MOCK === "true"

// National Delegates, GST-inclusive, as shown on /registration
export const PRICING = {
  industries: { early: 16520, regular: 17700 },
  academicians: { early: 11800, regular: 12980 },
  students: { early: 4720, regular: 5310 },
  accompanying: { early: 3540, regular: 4720 },
} as const

export type Category = keyof typeof PRICING
export type Tier = "early" | "regular"

export const CATEGORY_LABELS: Record<Category, string> = {
  industries: "Industries",
  academicians: "Academicians",
  students: "Students",
  accompanying: "Accompanying Persons",
}

export const TIER_LABELS: Record<Tier, string> = {
  early: "Early Bird",
  regular: "Regular Registration",
}

export const PAYMENT_MODE_LABELS: Record<string, string> = {
  CARD: "Card Payment",
  NB: "Net Banking (NB)",
  UPI: "UPI",
  WALLET: "Wallet",
}

export function amountFor(category: Category, tier: Tier): number {
  const row = PRICING[category]
  if (!row) throw new Error(`Unknown category: ${category}`)
  return row[tier]
}

// International Delegates, GST-inclusive, as shown on /registration (USD)
export const PRICING_USD = {
  industries: { early: 354, regular: 413 },
  academicians: { early: 236, regular: 295 },
  students: { early: 118, regular: 147.5 },
  accompanying: { early: 118, regular: 147.5 },
} as const

export function usdAmountFor(category: Category, tier: Tier): number {
  const row = PRICING_USD[category]
  if (!row) throw new Error(`Unknown category: ${category}`)
  return row[tier]
}

// ICICI PG's currencyCode field only ever documents the value 356 (INR) —
// no other value appears anywhere in the spec. So USD amounts get converted
// to INR here (via ExchangeRate-API) and charged in INR; the gateway never
// sees USD. If the rate lookup fails, the caller should surface an error
// rather than guess a rate.
export const RATE_SOURCE = "ExchangeRate-API"

export async function getUsdInrRate(): Promise<number> {
  const res = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_API_KEY}/latest/USD`)
  if (!res.ok) throw new Error("Currency conversion unavailable")
  const data = (await res.json()) as { result: string; conversion_rates?: { INR: number } }
  if (data.result !== "success" || !data.conversion_rates) throw new Error("Currency conversion unavailable")
  return data.conversion_rates.INR
}

export async function usdToInr(usd: number): Promise<number> {
  const rate = await getUsdInrRate()
  return Math.round(usd * rate * 100) / 100
}

// Spec: concat non-empty param VALUES in ascending key order, HMAC-SHA256, hex, lowercase.
export function computeHash(params: Record<string, string | number | null | undefined>): string {
  const msg = Object.keys(params)
    .sort()
    .filter((k) => params[k] !== null && params[k] !== undefined && params[k] !== "")
    .map((k) => String(params[k]))
    .join("")
  return createHmac("sha256", SECRET_KEY).update(msg).digest("hex").toLowerCase()
}
