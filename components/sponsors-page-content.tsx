"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Handshake,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Building2,
  ArrowRight,
  Crown,
  Award,
  Info,
  LayoutGrid,
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
        name: "Unnati-5d",
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
  const [showOpportunities, setShowOpportunities] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#sponsorship-opportunities") {
      setShowOpportunities(true);
    }
  }, []);

  const toggleOpportunities = () => {
    setShowOpportunities((prev) => !prev);
    if (!showOpportunities) {
      setTimeout(() => {
        const el = document.getElementById("sponsorship-opportunities");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 max-w-7xl space-y-16">
      {/* Sponsors Showcase List with Info Accordion per Tier */}
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
                    {/* Formatted Info & Benefits Box (Matching Screenshot) */}
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

              {/* Sponsors Cards Grid (Grouped by Stall Category for Exhibition Stalls) */}
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

                      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                        {tier.sponsors
                          .filter((s) => s.stallSize === "12' × 8'" || !s.stallSize)
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

      {/* 3. Banner & Become a Sponsor CTA — Placed AFTER all sponsors */}
      <section className="space-y-8 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Partner & Sponsor COPEN 14
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
              Showcase your precision engineering innovations to 500+ global delegates, academic leaders, and industry executives.
            </p>
          </div>

          <Button
            onClick={toggleOpportunities}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md font-semibold gap-2 transition-all cursor-pointer shrink-0"
          >
            <Handshake className="w-5 h-5" />
            <span>{showOpportunities ? "Hide Opportunities" : "Become a Sponsor"}</span>
            {showOpportunities ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Expandable Overview Section */}
        {showOpportunities && (
          <div id="sponsorship-opportunities" className="animate-in fade-in-50 duration-300">
            <div className="bg-secondary/20 border border-primary/20 rounded-2xl p-6 md:p-10">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <Badge variant="outline" className="mb-3 border-primary/40 text-primary font-semibold">
                  Sponsorship Overview
                </Badge>
                <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-primary">
                  Quick Inquiry & Contact
                </h3>
                <p className="mt-3 text-muted-foreground text-base md:text-lg">
                  Reach out to the COPEN 14 organizing committee to reserve your sponsorship tier or exhibition stall.
                </p>
              </div>

              <div className="text-center pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="font-semibold gap-2">
                    <span>Contact Organizing Committee</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
