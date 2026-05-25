import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function HomeQuickLinks() {
  const linkSections = [
    {
      title: "Conference Materials",
      links: [
        { label: "COPEN 14 Consolidated Report", href: "/program" },
        { label: "Conference Brochure", href: "/program#brochure" },
        { label: "Program in a Nutshell", href: "/program#nutshell" },
      ]
    },
    {
      title: "Presentations & Awards", 
      links: [
        { label: "Awards for Best Papers", href: "/program#awards" },
        { label: "Oral Presentation Template", href: "/program#oral-template" },
        { label: "Poster Presentation Template", href: "/program#poster-template" },
      ]
    },
    {
      title: "Schedules & Media",
      links: [
        { label: "Oral Presentation Schedule", href: "/program#oral-schedule" },
        { label: "Poster Presentation (Final)", href: "/program#poster-schedule" },
        { label: "Conference Glimpses", href: "/glimpses" },
      ]
    },
    {
      title: "Registration",
      links: [
        { label: "Register Now", href: "/registration" },
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Access</h2>
          <p className="text-lg text-gray-600">Essential conference resources and information</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {linkSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                        {link.label}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
