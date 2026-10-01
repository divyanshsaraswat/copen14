"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, CheckCircle2, Copy, Check } from "lucide-react"

function Hero() {
  return (
    <section className="relative w-full">
      <Image
        src="/images/bg5.png"
        alt="Registration hero background"
        width={1920}
        height={800}
        className="h-[40vh] md:h-[50vh] w-full object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-white">
            REGISTRATION
          </h1>
          <div className="mx-auto mt-3 h-1.5 w-24 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}

function BankDetailItem({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-background border border-border/60 hover:border-primary/40 transition-colors gap-2 text-left">
      <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">
        {label}
      </span>
      <div className="flex items-center justify-between sm:justify-end gap-2">
        <span className="text-xs md:text-sm font-bold text-foreground font-mono">
          {value}
        </span>
        <button
          onClick={handleCopy}
          title={`Copy ${label}`}
          className="p-1 text-muted-foreground hover:text-primary transition-colors rounded hover:bg-muted shrink-0"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  )
}

function RegistrationProcessSection() {
  return (
    <section className="mt-16 pt-12 border-t border-border/80">
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <Badge variant="outline" className="px-3 py-1 text-xs font-bold border-primary text-primary uppercase tracking-wider">
          Step-by-Step Guide
        </Badge>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-primary">
          REGISTRATION PROCESS
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          To participate in <strong className="text-foreground font-semibold">COPEN-14</strong>, please complete the registration process described below. The registration process consists of <strong className="text-foreground font-semibold">two stages</strong>:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Stage 1: Payment */}
        <Card className="border border-border/80 shadow-sm hover:shadow-md transition-shadow bg-card flex flex-col justify-between">
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0">
                1
              </div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider block">
                  Stage I
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  Payment of Registration Fee
                </h3>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              After acceptance of the paper, participants are required to pay the registration fee applicable to their category into the following bank account:
            </p>

            <div className="space-y-2.5 pt-2">
              <BankDetailItem label="Account Name" value="Registrar (Sponsored Research) MNIT Jaipur" />
              <BankDetailItem label="Account Number" value="676801700388" />
              <BankDetailItem label="Bank Name" value="ICICI Bank Ltd." />
              <BankDetailItem label="IFSC Code" value="ICIC0006768" />
              <BankDetailItem label="MICR Code" value="302229031" />
              <BankDetailItem label="SWIFT Code" value="ICICINBBCTS" />
              <BankDetailItem label="Branch Name" value="MNIT Jaipur" />
              <BankDetailItem label="Address" value="MNIT Campus, JLN Marg, Jaipur -302017" />
            </div>
          </CardContent>
        </Card>

        {/* Stage 2: Submission */}
        <Card className="border border-border/80 shadow-sm hover:shadow-md transition-shadow bg-card flex flex-col justify-between">
          <CardContent className="p-6 md:p-8 space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0">
                  2
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block">
                    Stage II
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    Submission of Registration Details
                  </h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                After successfully completing the payment, participants are required to retain the acknowledgement of the successful payment and submit the required details along with the payment acknowledgement through the following link:
              </p>

              <div className="p-5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
                    Please keep your payment transaction ID / receipt screenshot ready before filling out the form.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-4 text-center">
              <a
                href="https://forms.gle/jQegD6nzJe155FNg7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full"
              >
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-6 text-base gap-2 shadow-md">
                  <span>Registration Details Submission</span>
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </a>
              <p className="text-xs text-muted-foreground">
                Opens Google Form for submission in a new tab
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function FeesTable() {
  return (
    <section className="container mx-auto px-4 py-12 animate-in fade-in-50 slide-in-from-bottom-2">
      <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-primary mb-2 text-center">
        REGISTRATION FEES
      </h2>

      {/* Exclusive of GST right below title */}
      <p className="text-sm text-slate-500 mb-6 text-center">
        *All fees include 18% GST. The total payable amount is shown after the "=" sign.
      </p>

      {/* National Delegates */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-primary mb-4">
          NATIONAL DELEGATES
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-center">
            <thead className="bg-muted/40">
              <tr>
                <th className="border px-4 py-3 font-semibold">Category</th>
                <th className="border px-4 py-3 font-semibold">Early Bird</th>
                <th className="border px-4 py-3 font-semibold">Regular Registration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-3 font-semibold">Industries</td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">₹14,000 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= ₹16,520</span>
                </td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">₹15,000 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= ₹17,700</span>
                </td>
              </tr>
              <tr className="bg-muted/10">
                <td className="border px-4 py-3 font-semibold">Academicians</td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">₹10,000 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= ₹11,800</span>
                </td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">₹11,000 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= ₹12,980</span>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-3 font-semibold">Students</td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">₹4,000 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= ₹4,720</span>
                </td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">₹4,500 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= ₹5,310</span>
                </td>
              </tr>
              <tr className="bg-muted/10">
                <td className="border px-4 py-3 font-semibold">Accompanying Persons</td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">₹3,000 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= ₹3,540</span>
                </td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">₹4,000 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= ₹4,720</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* International Delegates */}
      <div className="mb-2">
        <h3 className="text-xl font-bold text-primary mb-4">
          INTERNATIONAL DELEGATES
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-center">
            <thead className="bg-muted/40">
              <tr>
                <th className="border px-4 py-3 font-semibold">Category</th>
                <th className="border px-4 py-3 font-semibold">Early Bird</th>
                <th className="border px-4 py-3 font-semibold">Regular Registration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-3 font-semibold">Industries</td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">USD 300 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= USD 354</span>
                </td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">USD 350 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= USD 413</span>
                </td>
              </tr>
              <tr className="bg-muted/10">
                <td className="border px-4 py-3 font-semibold">Academicians</td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">USD 200 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= USD 236</span>
                </td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">USD 250 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= USD 295</span>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-3 font-semibold">Students</td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">USD 100 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= USD 118</span>
                </td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">USD 125 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= USD 147.5</span>
                </td>
              </tr>
              <tr className="bg-muted/10">
                <td className="border px-4 py-3 font-semibold">Accompanying Persons</td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">USD 100 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= USD 118</span>
                </td>
                <td className="border px-4 py-3">
                  <span className="text-muted-foreground">USD 125 + 18% GST</span>
                  <span className="ml-1 font-bold text-foreground">= USD 147.5</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Registration Process Section */}
      <RegistrationProcessSection />
    </section>
  )
}

export default function RegistrationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <FeesTable />
      <Footer />
    </main>
  )
}
