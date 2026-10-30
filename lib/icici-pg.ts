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

export function amountFor(category: Category, tier: Tier): number {
  const row = PRICING[category]
  if (!row) throw new Error(`Unknown category: ${category}`)
  return row[tier]
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
