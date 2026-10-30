import { computeHash } from "@/lib/icici-pg"

// ponytail: stands in for ICICI's hosted payment page in MOCK_MODE. Decodes
// the signed request we built in /api/payment/initiate, lets the dev pick an
// outcome, and submits a correctly-signed response straight to our own
// callback route — same shape the bank would POST on a real redirect.
function txnDateNow(): string {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`
}

function buildResponse(req: Record<string, string>, outcome: "success" | "failure") {
  const txnID = String(Date.now())
  const base: Record<string, string> = {
    merchantId: req.merchantId,
    merchantTxnNo: req.merchantTxnNo,
    txnID,
    paymentDateTime: txnDateNow(),
    responseCode: outcome === "success" ? "000" : "115",
    respDescription: outcome === "success" ? "SUCCESS" : "Simulated failure",
    paymentID: txnID,
  }
  return { ...base, secureHash: computeHash(base) }
}

export default async function MockPaymentPage({
  searchParams,
}: {
  searchParams: Promise<{ tranCtx?: string }>
}) {
  const { tranCtx } = await searchParams
  if (!tranCtx) return <main className="p-10 text-center">Missing tranCtx</main>

  const req = JSON.parse(Buffer.from(tranCtx, "base64url").toString("utf-8")) as Record<string, string>
  const success = buildResponse(req, "success")
  const failure = buildResponse(req, "failure")

  return (
    <main className="max-w-md mx-auto px-4 py-24 text-center">
      <h1 className="text-xl font-bold mb-1">Simulated ICICI Payment Page</h1>
      <p className="text-sm text-muted-foreground mb-6">(local test mode — no real bank call)</p>
      <div className="text-left bg-muted/30 rounded-md p-4 mb-6 text-sm space-y-1">
        <p><span className="text-muted-foreground">Merchant Txn No:</span> {req.merchantTxnNo}</p>
        <p><span className="text-muted-foreground">Amount:</span> ₹{req.amount}</p>
        <p><span className="text-muted-foreground">Payer:</span> {req.customerName} &lt;{req.customerEmailID}&gt;</p>
      </div>
      <div className="flex gap-3 justify-center">
        <form action="/api/payment/callback" method="POST">
          {Object.entries(success).map(([k, v]) => (
            <input key={k} type="hidden" name={k} value={v} />
          ))}
          <button className="px-4 py-2 rounded-md bg-green-600 text-white font-semibold">
            Simulate Success
          </button>
        </form>
        <form action="/api/payment/callback" method="POST">
          {Object.entries(failure).map(([k, v]) => (
            <input key={k} type="hidden" name={k} value={v} />
          ))}
          <button className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold">
            Simulate Failure
          </button>
        </form>
      </div>
    </main>
  )
}
