"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ExternalLink, CheckCircle2, ArrowRight, Loader2, Mail, Phone, HelpCircle } from "lucide-react"
import { CATEGORY_LABELS, TIER_LABELS, PRICING, PRICING_USD, type Category, type Tier } from "@/lib/icici-pg"

const PAY_LINK_CLASS =
  "inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#0e3b79] hover:bg-[#0b2f61] text-white text-xs font-semibold whitespace-nowrap shadow-sm transition-colors shrink-0"

// International Delegates (USD) are converted to INR server-side before
// hitting ICICI PG, since the gateway only documents currencyCode=356 (INR).
function PayButton(props: { category?: Category; tier?: Tier; international?: boolean; disabled?: boolean }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [rate, setRate] = useState<number | null>(null)
  const [rateSource, setRateSource] = useState<string | null>(null)

  const isDisabled = props.disabled ?? props.tier === "regular"

  useEffect(() => {
    if (!open || !props.international || rate) return
    fetch("/api/payment/rate")
      .then((res) => res.json())
      .then((data) => {
        if (data.rate) {
          setRate(data.rate)
          setRateSource(data.source)
        }
      })
      .catch(() => {})
  }, [open, props.international, rate])

  if (isDisabled) {
    return (
      <button
        type="button"
        disabled
        title="Regular Registration will open after Early Bird concludes on 15th Nov"
        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-md bg-muted text-muted-foreground/60 text-xs font-semibold whitespace-nowrap shadow-none cursor-not-allowed border border-border/80 shrink-0 select-none"
      >
        <span>Pay Now</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    )
  }

  if (!props.category || !props.tier) {
    return (
      <a href="#payment-details" className={PAY_LINK_CLASS}>
        <span>Pay Now</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    )
  }

  async function handlePay() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: props!.category,
          tier: props!.tier,
          name,
          email,
          mobile,
          international: props!.international,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.redirectUrl) {
        setError(data.error ?? "Could not start payment. Please try again.")
        return
      }
      window.location.href = data.redirectUrl
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button type="button" onClick={() => setOpen(true)} className={PAY_LINK_CLASS}>
        <span>Pay Now</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registration Payment Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 py-2">
          <div className="rounded-md bg-muted/40 px-3 py-2 text-sm">
            <p className="font-semibold">{CATEGORY_LABELS[props.category]}</p>
            <p className="text-muted-foreground">
              {TIER_LABELS[props.tier]} &middot;{" "}
              {props.international
                ? `USD ${PRICING_USD[props.category][props.tier]}`
                : `₹${PRICING[props.category][props.tier].toLocaleString("en-IN")}`}
            </p>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="pay-name">Full Name</Label>
            <Input id="pay-name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="pay-email">Email</Label>
            <Input id="pay-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="pay-mobile">Mobile Number</Label>
            <Input id="pay-mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
          {props.international && (
            <p className="text-xs text-muted-foreground">
              {rate ? (
                <>
                  You will be charged{" "}
                  <span className="font-semibold text-foreground">
                    ₹{(PRICING_USD[props.category][props.tier] * rate).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </span>{" "}
                  at the live rate of 1 USD = ₹{rate.toFixed(2)}, sourced from{" "}
                  <a
                    href="https://www.exchangerate-api.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline hover:text-foreground"
                  >
                    {rateSource}
                  </a>
                  .
                </>
              ) : (
                "Fetching today's exchange rate…"
              )}
            </p>
          )}
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
        <DialogFooter>
          <Button onClick={handlePay} disabled={loading || !name || !email || !mobile}>
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Proceed to Pay
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

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

function RegistrationProcess() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-6xl space-y-10 animate-in fade-in-50 slide-in-from-bottom-2">
      {/* Step-by-Step Guide Intro Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="outline" className="px-3.5 py-1 text-xs font-bold border-primary text-primary uppercase tracking-wider">
          Step-by-Step Guide
        </Badge>
        <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
          REGISTRATION PROCESS
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          To participate in <strong className="text-foreground font-semibold">COPEN-14</strong>, please complete the registration process described below. The registration process consists of <strong className="text-foreground font-semibold">two stages</strong>:
        </p>
      </div>

      {/* Stage 1 & Stage 2 Quick Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <a
          href="#payment-details"
          className="p-4 rounded-xl border-2 border-primary/30 bg-primary/5 hover:border-primary/60 hover:bg-primary/10 transition-all flex items-center gap-3.5 group shadow-xs"
        >
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0 text-base shadow-xs">
            1
          </div>
          <div className="text-left">
            <span className="text-xs font-bold text-primary uppercase tracking-wider block">
              Stage I
            </span>
            <span className="font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
              Payment of Registration Fee
            </span>
          </div>
        </a>

        <a
          href="#stage-2"
          className="p-4 rounded-xl border-2 border-border/80 bg-card hover:border-primary/50 hover:bg-muted/40 transition-all flex items-center gap-3.5 group shadow-xs"
        >
          <div className="w-10 h-10 rounded-full bg-muted text-foreground font-bold flex items-center justify-center shrink-0 text-base group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-xs">
            2
          </div>
          <div className="text-left">
            <span className="text-xs font-bold text-muted-foreground group-hover:text-primary uppercase tracking-wider block transition-colors">
              Stage II
            </span>
            <span className="font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
              Submission of Registration Details
            </span>
          </div>
        </a>
      </div>

      {/* STAGE I: Payment of Registration Fee */}
      <Card id="payment-details" className="scroll-mt-24 border-2 border-primary/20 bg-card shadow-sm rounded-2xl overflow-hidden">
        {/* Stage 1 Card Header */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 sm:p-8 border-b border-border/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shrink-0 shadow-sm">
                1
              </div>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  Stage I
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Payment of Registration Fee
                </h3>
              </div>
            </div>
            <Badge variant="outline" className="w-fit text-xs px-3 py-1 font-semibold border-primary/30 text-primary bg-primary/5">
              Online Payment Gateway
            </Badge>
          </div>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            After acceptance of the paper, participants are required to pay the registration fee applicable to their category. Choose your category in the fee grid below to pay online via Payment Gateway.
          </p>
        </div>

        <CardContent className="p-6 sm:p-8 space-y-10">
          {/* GST Disclaimer */}
          <div className="p-3.5 rounded-lg bg-muted/40 border border-border/70 text-xs md:text-sm text-muted-foreground flex items-center gap-2">
            <span className="font-bold text-primary">*</span>
            <span>All fees include 18% GST. The total payable amount is shown after the &quot;=&quot; sign.</span>
          </div>

          {/* National Delegates Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-bold text-primary flex items-center gap-2">
                <span>National Delegates</span>
                <Badge variant="secondary" className="text-[11px] font-semibold">INR (₹)</Badge>
              </h4>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
              <table className="min-w-full text-center text-sm">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-left">Category</th>
                    <th className="px-4 py-3 font-semibold">
                      Early Bird <span className="text-xs font-normal text-muted-foreground block sm:inline">(Till 15th Nov sharp)</span>
                    </th>
                    <th className="px-4 py-3 font-semibold">Regular Registration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3.5 font-semibold text-left">Industries</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">₹14,000 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= ₹16,520</span>
                        </div>
                        <PayButton category="industries" tier="early" />
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">₹15,000 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= ₹17,700</span>
                        </div>
                        <PayButton category="industries" tier="regular" disabled />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="px-4 py-3.5 font-semibold text-left">Academicians</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">₹10,000 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= ₹11,800</span>
                        </div>
                        <PayButton category="academicians" tier="early" />
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">₹11,000 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= ₹12,980</span>
                        </div>
                        <PayButton category="academicians" tier="regular" disabled />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5 font-semibold text-left">Students</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">₹4,000 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= ₹4,720</span>
                        </div>
                        <PayButton category="students" tier="early" />
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">₹4,500 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= ₹5,310</span>
                        </div>
                        <PayButton category="students" tier="regular" disabled />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="px-4 py-3.5 font-semibold text-left">Accompanying Persons</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">₹3,000 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= ₹3,540</span>
                        </div>
                        <PayButton category="accompanying" tier="early" />
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">₹4,000 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= ₹4,720</span>
                        </div>
                        <PayButton category="accompanying" tier="regular" disabled />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* International Delegates Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-bold text-primary flex items-center gap-2">
                <span>International Delegates</span>
                <Badge variant="secondary" className="text-[11px] font-semibold">USD ($)</Badge>
              </h4>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
              <table className="min-w-full text-center text-sm">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-left">Category</th>
                    <th className="px-4 py-3 font-semibold">
                      Early Bird <span className="text-xs font-normal text-muted-foreground block sm:inline">(Till 15th Nov sharp)</span>
                    </th>
                    <th className="px-4 py-3 font-semibold">Regular Registration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3.5 font-semibold text-left">Industries</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">USD 300 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= USD 354</span>
                        </div>
                        <PayButton category="industries" tier="early" international />
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">USD 350 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= USD 413</span>
                        </div>
                        <PayButton category="industries" tier="regular" international disabled />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="px-4 py-3.5 font-semibold text-left">Academicians</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">USD 200 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= USD 236</span>
                        </div>
                        <PayButton category="academicians" tier="early" international />
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">USD 250 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= USD 295</span>
                        </div>
                        <PayButton category="academicians" tier="regular" international disabled />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5 font-semibold text-left">Students</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">USD 100 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= USD 118</span>
                        </div>
                        <PayButton category="students" tier="early" international />
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">USD 125 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= USD 147.5</span>
                        </div>
                        <PayButton category="students" tier="regular" international disabled />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="px-4 py-3.5 font-semibold text-left">Accompanying Persons</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">USD 100 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= USD 118</span>
                        </div>
                        <PayButton category="accompanying" tier="early" international />
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-grow text-center">
                          <span className="text-muted-foreground">USD 125 + 18% GST</span>
                          <span className="ml-1 font-bold text-foreground">= USD 147.5</span>
                        </div>
                        <PayButton category="accompanying" tier="regular" international disabled />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* STAGE II: Submission of Registration Details */}
      <Card id="stage-2" className="scroll-mt-24 border-2 border-primary/20 bg-card shadow-sm rounded-2xl overflow-hidden">
        {/* Stage 2 Card Header */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 sm:p-8 border-b border-border/80">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shrink-0 shadow-sm">
              2
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                Stage II
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Submission of Registration Details
              </h3>
            </div>
          </div>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            After successfully completing the payment, participants are required to retain the acknowledgement of the successful payment and submit the required details along with the payment acknowledgement through the following link:
          </p>
        </div>

        <CardContent className="p-6 sm:p-8 space-y-6">
          <div className="p-5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/50 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-foreground">Important Instruction</h5>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                  Please keep your payment transaction ID / receipt screenshot ready before filling out the form. You will be required to upload or specify it for verification.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center max-w-md mx-auto space-y-3">
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

      {/* Payment Support / Contact Note */}
      <div className="max-w-2xl mx-auto text-center p-6 sm:p-7 rounded-2xl bg-muted/40 border border-border/80 shadow-xs space-y-3">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mx-auto">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-base sm:text-lg font-bold text-foreground">
            Payment Assistance & Support
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground">
            In case of any issues while making the payment, please contact:
          </p>
        </div>
        <div className="pt-1">
          <div className="font-bold text-foreground text-sm sm:text-base">
            Dr. Dinesh Kumar Rathore
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2.5 text-xs sm:text-sm">
            <a
              href="mailto:dkrathore.mech@mnit.ac.in"
              className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold bg-background px-3 py-1.5 rounded-lg border border-border shadow-2xs hover:border-primary/50 transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>dkrathore.mech@mnit.ac.in</span>
            </a>
            <a
              href="tel:+918260843176"
              className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold bg-background px-3 py-1.5 rounded-lg border border-border shadow-2xs hover:border-primary/50 transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 82608 43176</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function RegistrationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <RegistrationProcess />
      <Footer />
    </main>
  )
}
