import { createClient } from "@libsql/client"

const client = createClient({
  url: process.env.TURSO_ENDPOINT!,
  authToken: process.env.TURSO_API_KEY!,
})

let schemaReady: Promise<unknown> | null = null

// ponytail: no migration framework for one table — just ensure it exists
// before each use. Cheap no-op after the first call per cold start.
export function db() {
  schemaReady ??= client.execute(`
    CREATE TABLE IF NOT EXISTS registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      merchant_txn_no TEXT UNIQUE NOT NULL,
      txn_id TEXT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      mobile TEXT NOT NULL,
      category TEXT NOT NULL,
      tier TEXT NOT NULL,
      international INTEGER NOT NULL DEFAULT 0,
      amount_inr REAL NOT NULL,
      usd_amount REAL,
      status TEXT NOT NULL DEFAULT 'initiated',
      payment_mode TEXT,
      response_code TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)
  return schemaReady.then(() => client)
}
