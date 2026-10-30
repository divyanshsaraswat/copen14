import { NextResponse } from "next/server"
import { getUsdInrRate, RATE_SOURCE } from "@/lib/icici-pg"

export async function GET() {
  try {
    const rate = await getUsdInrRate()
    return NextResponse.json({ rate, source: RATE_SOURCE })
  } catch {
    return NextResponse.json({ error: "Currency conversion unavailable" }, { status: 502 })
  }
}
