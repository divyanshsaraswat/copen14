"use client"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

type Sponsor = {
  name: string
  href?: string
  // Use a placeholder image for now; replace with real logo paths later.
  // Keep aspect via object-contain.
  logoAlt?: string
}

type SponsorsSectionProps = {
  id?: string
  title: string
  accordion?: boolean
  defaultOpen?: boolean
  cols?: 1 | 2 | 3 | 4
  sponsors: Sponsor[]
  className?: string
}

export function SponsorsSection({
  id,
  title,
  accordion = true,
  defaultOpen = true,
  cols = 3,
  sponsors,
  className,
}: SponsorsSectionProps) {
  const content = (
    <div id={id} className={cn("w-full", className)}>
      <div
        className="grid gap-12 md:gap-16"
        style={{
          gridTemplateColumns:
            cols === 1
              ? "1fr"
              : cols === 2
                ? "repeat(2, minmax(0, 1fr))"
                : cols === 4
                  ? "repeat(4, minmax(0, 1fr))"
                  : "repeat(3, minmax(0, 1fr))",
        }}
      >
        {sponsors.map((s, i) => (
          <article key={`${s.name}-${i}`} className="flex flex-col items-center text-center">
            <div className="w-full flex items-center justify-center">
              <img
                src={`/placeholder.svg?height=180&width=360&query=sponsor%20logo%20${encodeURIComponent(s.name)}`}
                alt={s.logoAlt || `${s.name} logo`}
                className="h-32 md:h-40 object-contain"
              />
            </div>
            <h3 className="mt-6 text-lg md:text-xl font-semibold text-foreground">{s.name}</h3>
            <Link
              href={s.href || "#"}
              className="mt-2 text-primary underline underline-offset-4"
              aria-label={`View details for ${s.name}`}
            >
              View Details
            </Link>
          </article>
        ))}
      </div>
    </div>
  )

  if (!accordion) {
    return (
      <section className="py-10 md:py-12">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-6 tracking-wide uppercase">{title}</h2>
        <div className="border-t border-muted" />
        <div className="mt-10">{content}</div>
      </section>
    )
  }

  return (
    <section className="py-6 md:py-8 bg-secondary/20 rounded-lg">
      <Accordion type="single" collapsible defaultValue={defaultOpen ? "item-1" : undefined}>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="text-left px-2">
            <span className="text-xl md:text-2xl font-bold text-primary tracking-wide uppercase">{title}</span>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="border-t border-muted" />
            <div className="mt-10">{content}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="my-12 md:my-16">
      <div className="border-t border-muted" />
      <div className="flex justify-center">
        <span className="-mt-3 bg-background px-4 text-sm md:text-base text-foreground/80">{label}</span>
      </div>
    </div>
  )
}
