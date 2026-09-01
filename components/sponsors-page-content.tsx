"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Handshake,
  CheckCircle2,
  Building2,
  ArrowRight,
  Crown,
  Award,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type SponsorItem = {
  id: string;
  name: string;
  category: string;
  stallSize?: string;
  logo?: string;
  href?: string;
  description?: string;
};

export type SponsorTierData = {
  id: string;
  title: string;
  amount: string;
  accentColor?: string;
  badgeText?: string;
  benefits: string[];
  sponsors: SponsorItem[];
};

export const ALL_SPONSOR_TIERS: SponsorTierData[] = [
  {
    id: "platinum-sponsorship",
    title: "PLATINUM SPONSORSHIP",
    amount: "₹ 10,00,000/- + 18% GST",
    accentColor: "border-amber-500/30 bg-amber-500/10 text-amber-600",
    badgeText: "1 Confirmed Sponsor",
    benefits: [
      "Organisation Head or nominee as Chairperson of COPEN14",
      "Chairperson to deliver Inaugural Key Talk and dais sharing with Chief Guest",
      "30-minute plenary talk for all 500+ participants",
      "Two exhibition stalls (12’ × 8’) at most prominent location",
      "One full-page advertisement in the Conference Souvenir",
      "Company logo on conference website, dais, and publicity banners",
      "Free registration for one delegate at VIP Guest House with complete hospitality",
      "Six conference registrations including food and accommodation",
    ],
    sponsors: [
      {
        id: "nei-nbc",
        name: "National Engineering Industries Ltd. (Formerly NBC)",
        category: "Platinum Sponsor",
        logo: "/images/sponsors/nbc.jpeg",
        href: "https://www.nbcbearings.com/",
        description: "India's leading bearings manufacturer and member of the CK Birla Group.",
      },
    ],
  },
  {
    id: "exhibition-stall-sponsorship",
    title: "EXHIBITION STALL SPONSORSHIP",
    amount: "12’ × 8’ Stall: ₹ 1,00,000/- + 18% GST | 6’ × 8’ Stall: ₹ 50,000/- + 18% GST",
    accentColor: "border-blue-500/30 bg-blue-500/10 text-blue-600",
    badgeText: "12' × 8' Exhibition Stalls",
    benefits: [
      "Quarter-page advertisement in conference souvenir",
      "Free entry for delegates (food & hostel accommodation)",
      "Exhibition stall (12’ × 8’ or 6’ × 8’) at prominent location",
      "Prominent advertisement on conference website and promotional materials",
    ],
    sponsors: [
      {
        id: "interface-design",
        name: "Interface Design Associates Pvt. Ltd.",
        category: "Exhibition Stall (12' × 8')",
        stallSize: "12' × 8'",
        logo: "/images/sponsors/interface.jpeg",
        href: "https://idapl.in/",
        description: "Specialists in precision design, automation, and engineering solutions.",
      },
      {
        id: "tequity",
        name: "Tequity Engineering",
        category: "Exhibition Stall (12' × 8')",
        stallSize: "12' × 8'",
        logo: "/images/sponsors/tequity.jpeg",
        href: "https://www.tequityengineering.in/",
        description: "Leading providers of high-precision engineering and manufacturing equipment.",
      },
      {
        id: "unnati",
        name: "Unnati-Sd",
        category: "Exhibition Stall (12' × 8')",
        stallSize: "12' × 8'",
        logo: "/images/sponsors/unnati.jpeg",
        href: "https://u5d.in/",
        description: "Pioneers in innovative industrial systems and engineering solutions.",
      },
    ],
  },
  {
    id: "diamond-sponsorship",
    title: "DIAMOND SPONSORSHIP",
    amount: "₹ 7,00,000/- + 18% GST",
    accentColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-600",
    benefits: [
      "Inaugural session sponsorship",
      "20-minute keynote / introduction talk",
      "Name and logo on dais, banners, brochures, and conference website",
      "One full-page advertisement in conference souvenir / proceedings",
      "Two exhibition stalls (12’ × 8’ and 8’ × 8’)",
      "Four conference registrations including food and accommodation",
    ],
    sponsors: [],
  },
  {
    id: "gold-sponsorship",
    title: "GOLD SPONSORSHIP",
    amount: "₹ 5,00,000/- + 18% GST",
    accentColor: "border-yellow-600/30 bg-yellow-500/10 text-yellow-600",
    benefits: [
      "20-minute keynote / introduction talk",
      "Name and logo on dais, banners, brochures, and conference website",
      "One full-page advertisement in conference souvenir / proceedings",
      "Two exhibition stalls (8’ × 8’)",
      "Three conference registrations including food and accommodation",
    ],
    sponsors: [],
  },
  {
    id: "silver-sponsorship",
    title: "SILVER SPONSORSHIP",
    amount: "₹ 3,00,000/- + 18% GST",
    accentColor: "border-slate-400/30 bg-slate-500/10 text-slate-600",
    benefits: [
      "10-minute keynote / introduction talk / exhibition stall",
      "Name and logo on dais, banners, brochures, and conference website",
      "One full-page advertisement in conference souvenir / proceedings",
      "One exhibition stall (12’ × 8’)",
      "Free registration for two delegates to attend conference / present papers",
    ],
    sponsors: [],
  },
  {
    id: "bronze-sponsorship",
    title: "BRONZE SPONSORSHIP",
    amount: "₹ 2,00,000/- + 18% GST",
    accentColor: "border-amber-800/30 bg-amber-900/10 text-amber-800",
    benefits: [
      "Name and logo on dais, banners, brochures, and conference website",
      "One full-page advertisement in conference souvenir / proceedings",
      "One exhibition stall (8’ × 8’)",
      "One conference registration including food and accommodation",
    ],
    sponsors: [],
  },
];

type OpportunityTier = {
  title: string;
  amount: string;
  accentColor: string;
  badge?: string;
  points: string[];
};

const OPPORTUNITY_TIERS: OpportunityTier[] = [
  {
    title: "Platinum Sponsorship",
    amount: "₹ 10,00,000/- + 18% GST",
    accentColor: "border-amber-500 bg-amber-500/5 text-amber-600",
    badge: "Most Prestigious",
    points: [
      "Organisation Head or nominee as Chairperson of COPEN14",
      "Chairperson to deliver Inaugural Key Talk and dais sharing with Chief Guest",
      "30-minute plenary talk for all 500+ participants",
      "Two exhibition stalls (12’ × 8’) at most prominent location",
      "One full-page advertisement in the Conference Souvenir",
      "Company logo on conference website, dais, and publicity banners",
      "Free registration for one delegate at VIP Guest House with complete hospitality",
      "Six conference registrations including food and accommodation",
    ],
  },
  {
    title: "Diamond Sponsorship",
    amount: "₹ 7,00,000/- + 18% GST",
    accentColor: "border-indigo-500 bg-indigo-500/5 text-indigo-600",
    points: [
      "Inaugural session sponsorship",
      "20-minute keynote / introduction talk",
      "Name and logo on dais, banners, brochures, and conference website",
      "One full-page advertisement in conference souvenir / proceedings",
      "Two exhibition stalls (12’ × 8’ and 8’ × 8’)",
      "Four conference registrations including food and accommodation",
    ],
  },
  {
    title: "Gold Sponsorship",
    amount: "₹ 5,00,000/- + 18% GST",
    accentColor: "border-yellow-600 bg-yellow-500/5 text-yellow-600",
    points: [
      "20-minute keynote / introduction talk",
      "Name and logo on dais, banners, brochures, and conference website",
      "One full-page advertisement in conference souvenir / proceedings",
      "Two exhibition stalls (8’ × 8’)",
      "Three conference registrations including food and accommodation",
    ],
  },
  {
    title: "Silver Sponsorship",
    amount: "₹ 3,00,000/- + 18% GST",
    accentColor: "border-slate-400 bg-slate-500/5 text-slate-600",
    points: [
      "10-minute keynote / introduction talk",
      "Name and logo on dais, banners, brochures, and conference website",
      "One full-page advertisement in conference souvenir / proceedings",
      "One exhibition stall (12’ × 8’)",
      "Two conference registrations including food and accommodation",
    ],
  },
  {
    title: "Bronze Sponsorship",
    amount: "₹ 2,00,000/- + 18% GST",
    accentColor: "border-amber-800 bg-amber-900/5 text-amber-800",
    points: [
      "Name and logo on dais, banners, brochures, and conference website",
      "One full-page advertisement in conference souvenir / proceedings",
      "One exhibition stall (8’ × 8’)",
      "One conference registration including food and accommodation",
    ],
  },
];

function SponsorLogoDisplay({ name, logo }: { name: string; logo?: string }) {
  const [imgError, setImgError] = useState(false);

  if (logo && !imgError) {
    return (
      <div className="w-full h-36 md:h-44 flex items-center justify-center p-4 bg-white dark:bg-muted/10 rounded-t-lg group-hover:bg-muted/20 transition-colors">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-28 max-w-[88%] object-contain transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Fallback branded logo icon when image file is missing
  const initials = name
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter((w) => w.length > 2 && !["ltd", "pvt", "inc", "corp"].includes(w.toLowerCase()))
    .map((w) => w[0])
    .join("")
    .substring(0, 3)
    .toUpperCase();

  return (
    <div className="w-full h-36 md:h-44 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-secondary/40 to-muted/50 rounded-t-lg group-hover:from-secondary/60 group-hover:to-muted/70 transition-colors">
      <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl shadow-inner mb-1">
        {initials || <Building2 className="w-8 h-8 text-primary" />}
      </div>
    </div>
  );
}

export function SponsorsPageContent() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 max-w-7xl space-y-16">
      {/* 1. Confirmed Sponsors Showcase List */}
      <section className="space-y-16">
        {ALL_SPONSOR_TIERS.filter((tier) => tier.sponsors.length > 0).map((tier) => (
          <div key={tier.id} className="space-y-6">
            {/* Category Tier Header & Info Accordion */}
            <div className="border border-border/70 rounded-2xl bg-card p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {tier.title.includes("PLATINUM") ? (
                    <Crown className="w-6 h-6 text-amber-500 shrink-0" />
                  ) : (
                    <Award className="w-6 h-6 text-primary shrink-0" />
                  )}
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                    {tier.title}
                  </h3>
                </div>

                {tier.badgeText && (
                  <Badge variant="outline" className={`font-semibold text-xs border ${tier.accentColor || ""}`}>
                    {tier.badgeText}
                  </Badge>
                )}
              </div>

              {/* Accordion ONLY for Sponsorship Details & Benefits Info Box */}
              <Accordion type="single" collapsible className="w-full border-t border-border/40 pt-2">
                <AccordionItem value="info" className="border-b-0">
                  <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline py-2">
                    <span className="flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      View Sponsorship Benefits & Pricing Details
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3">
                    {/* Formatted Info & Benefits Box */}
                    <div className="p-6 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 space-y-4">
                      <div className="text-base md:text-lg">
                        <span className="font-semibold text-foreground">Amount: </span>
                        <span className="font-extrabold text-red-600 text-lg md:text-xl">
                          {tier.amount}
                        </span>
                      </div>

                      <div className="space-y-2 pt-1">
                        <span className="font-bold text-base text-foreground block">
                          Benefits:
                        </span>
                        <ul className="list-disc pl-6 space-y-1.5 text-sm md:text-base text-foreground/90 leading-relaxed">
                          {tier.benefits.map((benefit, bIdx) => (
                            <li key={bIdx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Sponsors Cards Grid */}
              <div className="pt-4 space-y-8">
                {tier.id === "exhibition-stall-sponsorship" ? (
                  <div className="space-y-8">
                    {/* 12' x 8' Category Header */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-border/60 pb-2">
                        <h4 className="text-lg md:text-xl font-bold text-primary tracking-wide">
                          12' × 8' Exhibition Stalls
                        </h4>
                        <Badge variant="secondary" className="text-xs font-semibold">
                          12' × 8'
                        </Badge>
                      </div>

                      <div className="space-y-8">
                        {/* Row 1: Interface Design (Unchanged) */}
                        <div className="flex justify-center items-center w-full">
                          {tier.sponsors
                            .filter((s) => s.id === "interface-design")
                            .map((sponsor) => (
                              <Card
                                key={sponsor.id}
                                className="group border border-border/60 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center overflow-hidden bg-background w-full max-w-sm mx-auto"
                              >
                                <CardContent className="p-0 flex flex-col items-center justify-between h-full w-full">
                                  <SponsorLogoDisplay name={sponsor.name} logo={sponsor.logo} />
                                  <div className="p-6 flex flex-col flex-grow items-center justify-between text-center space-y-4 w-full">
                                    <div className="space-y-2 flex flex-col items-center justify-center">
                                      <Badge variant="secondary" className="text-xs font-semibold">
                                        {sponsor.category}
                                      </Badge>
                                      <h5 className="font-bold text-base md:text-lg text-foreground leading-snug group-hover:text-primary transition-colors text-center">
                                        {sponsor.name}
                                      </h5>
                                      {sponsor.description && (
                                        <p className="text-xs text-muted-foreground line-clamp-2 text-center">
                                          {sponsor.description}
                                        </p>
                                      )}
                                    </div>

                                    <div className="pt-2 w-full flex justify-center items-center">
                                      <a
                                        href={sponsor.href || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 w-full"
                                      >
                                        <span>View Details</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                      </a>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                        </div>

                        {/* Row 2: Tequity & Unnati-Sd (Smaller Cards Side-by-Side on Mobile & Desktop) */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-6 justify-center items-center max-w-sm sm:max-w-xl mx-auto">
                          {tier.sponsors
                            .filter((s) => s.id !== "interface-design")
                            .map((sponsor) => (
                              <Card
                                key={sponsor.id}
                                className="group border border-border/60 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center overflow-hidden bg-background w-full max-w-[170px] sm:max-w-[280px] mx-auto"
                              >
                                <CardContent className="p-0 flex flex-col items-center justify-between h-full w-full">
                                  <div className="w-full h-20 sm:h-28 flex items-center justify-center p-2 sm:p-3 bg-white dark:bg-muted/10 rounded-t-lg group-hover:bg-muted/20 transition-colors">
                                    <img
                                      src={sponsor.logo}
                                      alt={`${sponsor.name} logo`}
                                      className="max-h-14 sm:max-h-20 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                  </div>
                                  <div className="p-2.5 sm:p-4 flex flex-col flex-grow items-center justify-between text-center space-y-2 sm:space-y-3 w-full">
                                    <div className="space-y-1 sm:space-y-1.5 flex flex-col items-center justify-center">
                                      <Badge variant="secondary" className="text-[10px] sm:text-[11px] font-semibold py-0.5 px-1.5 sm:px-2">
                                        {sponsor.category}
                                      </Badge>
                                      <h5 className="font-bold text-xs sm:text-sm text-foreground leading-snug group-hover:text-primary transition-colors text-center">
                                        {sponsor.name}
                                      </h5>
                                      {sponsor.description && (
                                        <p className="text-[10px] sm:text-[11px] text-muted-foreground line-clamp-2 text-center leading-tight">
                                          {sponsor.description}
                                        </p>
                                      )}
                                    </div>

                                    <div className="pt-1 w-full flex justify-center items-center">
                                      <a
                                        href={sponsor.href || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 w-full"
                                      >
                                        <span>View Details</span>
                                        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                      </a>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                        </div>
                      </div>
                    </div>

                    {/* 6' x 8' Category Header */}
                    <div className="space-y-4 pt-4">
                      <div className="flex items-center justify-between border-b border-border/60 pb-2">
                        <h4 className="text-lg md:text-xl font-bold text-muted-foreground tracking-wide">
                          6' × 8' Exhibition Stalls
                        </h4>
                        <Badge variant="outline" className="text-xs font-semibold">
                          6' × 8'
                        </Badge>
                      </div>

                      <div className="p-4 rounded-xl border border-dashed border-border/80 text-center space-y-2 bg-muted/10 flex flex-col items-center justify-center">
                        <p className="text-xs text-muted-foreground font-medium text-center">
                          6' × 8' Exhibition Stalls open for booking.
                        </p>
                        <Link href="/contact">
                          <Button variant="outline" size="sm" className="font-semibold gap-1.5 text-xs h-8">
                            <span>Inquire to Book Stall</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`grid gap-8 justify-center items-center mx-auto ${
                      tier.sponsors.length === 1
                        ? "grid-cols-1 max-w-md"
                        : tier.sponsors.length === 2
                        ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {tier.sponsors.map((sponsor) => (
                      <Card
                        key={sponsor.id}
                        className="group border border-border/60 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center overflow-hidden bg-background w-full max-w-sm mx-auto"
                      >
                        <CardContent className="p-0 flex flex-col items-center justify-between h-full w-full">
                          <SponsorLogoDisplay name={sponsor.name} logo={sponsor.logo} />
                          <div className="p-6 flex flex-col flex-grow items-center justify-between text-center space-y-4 w-full">
                            <div className="space-y-2 flex flex-col items-center justify-center">
                              <Badge variant="secondary" className="text-xs font-semibold">
                                {sponsor.category}
                              </Badge>
                              <h4 className="font-bold text-base md:text-lg text-foreground leading-snug group-hover:text-primary transition-colors text-center">
                                {sponsor.name}
                              </h4>
                              {sponsor.description && (
                                <p className="text-xs text-muted-foreground line-clamp-2 text-center">
                                  {sponsor.description}
                                </p>
                              )}
                            </div>

                            <div className="pt-2 w-full flex justify-center items-center">
                              <a
                                href={sponsor.href || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 w-full"
                              >
                                <span>View Details</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Partner & Sponsor COPEN 14 — ALWAYS VISIBLE Opportunities Details */}
      <section id="sponsorship-opportunities" className="space-y-8 pt-8">
        <div className="bg-card border border-border/70 rounded-2xl p-6 md:p-10 shadow-sm space-y-10">
          {/* Section Header Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/60 pb-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase">
                Sponsorship Opportunities
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground tracking-tight">
                Partner & Sponsor COPEN 14
              </h3>
              <p className="text-muted-foreground text-base max-w-3xl leading-relaxed">
                Showcase your precision engineering innovations to 500+ global delegates, academic leaders, and industry executives. Explore all available sponsorship packages below.
              </p>
            </div>

            <Link href="/contact" className="shrink-0 self-center md:self-auto">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md font-semibold gap-2">
                <Handshake className="w-5 h-5" />
                <span>Become a Sponsor</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* All Sponsorship Tiers (Always Visible) */}
          <div className="space-y-8">
            <h4 className="text-2xl font-serif font-bold text-primary flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Sponsorship Packages & Benefits
            </h4>

            <div className="grid grid-cols-1 gap-6">
              {OPPORTUNITY_TIERS.map((tier, idx) => (
                <div
                  key={idx}
                  className="bg-background rounded-xl border border-border/80 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Left Column: Title & Amount */}
                    <div className="md:col-span-4 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h5 className="text-xl font-bold text-foreground">
                          {tier.title}
                        </h5>
                        {tier.badge && (
                          <Badge className="bg-primary text-primary-foreground text-xs">
                            {tier.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg md:text-xl font-extrabold text-red-600">
                        {tier.amount}
                      </p>
                    </div>

                    {/* Right Column: Benefits Bullet Points */}
                    <div className="md:col-span-8">
                      <span className="font-semibold text-sm text-muted-foreground block mb-2">
                        Benefits:
                      </span>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {tier.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-sm md:text-base text-foreground/90 leading-relaxed">
                            <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Exhibition Stall Packages (Always Visible) */}
            <div className="mt-10 bg-background rounded-xl border border-border/80 p-6 md:p-8 shadow-sm space-y-6">
              <h4 className="text-xl md:text-2xl font-serif font-bold text-primary flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                Exhibition Stall Packages
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-border/60 bg-muted/20 space-y-2">
                  <span className="font-bold text-lg text-foreground block">
                    12’ × 8’ Exhibition Stall
                  </span>
                  <span className="text-red-600 font-extrabold text-xl block">
                    ₹ 1,00,000/- + 18% GST
                  </span>
                  <p className="text-sm text-muted-foreground pt-2 leading-relaxed">
                    Includes quarter-page advertisement in conference souvenir and free registration for four delegates with complete food & hostel accommodation.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-border/60 bg-muted/20 space-y-2">
                  <span className="font-bold text-lg text-foreground block">
                    6’ × 8’ Exhibition Stall
                  </span>
                  <span className="text-red-600 font-extrabold text-xl block">
                    ₹ 50,000/- + 18% GST
                  </span>
                  <p className="text-sm text-muted-foreground pt-2 leading-relaxed">
                    Includes quarter-page advertisement in conference souvenir and free registration for two delegates with complete food & hostel accommodation.
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiry Callout */}
            <div className="text-center pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/40">
              <p className="text-sm md:text-base text-muted-foreground">
                Interested in reserving a sponsorship package or exhibition stall?
              </p>
              <Link href="/contact">
                <Button className="font-semibold gap-2">
                  <span>Contact Organizing Committee</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
