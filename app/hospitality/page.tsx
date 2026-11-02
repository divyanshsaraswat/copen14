import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Plane,
  Train,
  Car,
  MapPin,
  Navigation,
  Star,
  ExternalLink,
  Building,
  Sparkles,
  Phone,
} from "lucide-react"

interface Hotel {
  id: string
  name: string
  stars: number
  location: string
  distance: string
  price: string
  mnitGuestNote?: boolean
  image: string
  mapQuery: string
}

const HOTELS: Hotel[] = [
  {
    id: "ksn-signature",
    name: "Hotel KSN Signature",
    stars: 2,
    location: "Near Gaurav Tower, Malviya Nagar, 302017 Jaipur, India",
    distance: "Approx. 1.5 km from MNIT Jaipur",
    price: "₹ 3,000 – 4,000",
    mnitGuestNote: true,
    image: "/images/hotels/ksnsignature.jpg",
    mapQuery: "Hotel KSN Signature Malviya Nagar Jaipur",
  },
  {
    id: "red-fox",
    name: "Red Fox by Lemon Tree Hotels",
    stars: 3,
    location: "Opp. MNIT College, Jawahar Lal Nehru Marg, Bajaj Nagar, 302017, Jaipur, India",
    distance: "In Front of MNIT Jaipur Main Gate",
    price: "₹ 4,000 – 5,000",
    mnitGuestNote: true,
    image: "/images/hotels/redfox.jpg",
    mapQuery: "Red Fox Hotel Jaipur JLN Marg",
  },
  {
    id: "lords-inn",
    name: "Lords Inn Jaipur",
    stars: 3,
    location: "A-2, A-3, Mahalaxmi Nagar, Behind World Trade Park, Malviya Nagar, JLN Marg, Jaipur, India",
    distance: "Approx. 3 km from MNIT Jaipur",
    price: "₹ 4,500 – 6,500",
    mnitGuestNote: true,
    image: "/images/hotels/lordsinn.jpg",
    mapQuery: "Lords Inn Jaipur Malviya Nagar",
  },
  {
    id: "clarion-bella-casa",
    name: "Clarion Bella Casa by Choice Hotels",
    stars: 4,
    location: "Cityplex 1, Ashram Marg, Tonk Road, Jaipur, India",
    distance: "Approx. 4 km from MNIT Jaipur",
    price: "₹ 4,500 – 7,500",
    mnitGuestNote: true,
    image: "/images/hotels/clarion.jpg",
    mapQuery: "Clarion Bella Casa Jaipur Tonk Road",
  },
  {
    id: "hotel-mukam",
    name: "Hotel Mukam",
    stars: 3,
    location: "11, 33, Girdhar Marg, Sector 11, Malviya Nagar, 302017 Jaipur, India",
    distance: "Approx. 3 km from MNIT Jaipur",
    price: "₹ 3,000 – 4,000",
    mnitGuestNote: false,
    image: "/images/hotels/mukam.jpg",
    mapQuery: "Hotel Mukam Malviya Nagar Jaipur",
  },
  {
    id: "indie-stays",
    name: "Indie Stays Jaipur",
    stars: 3,
    location: "242, C Block, Siddharth Nagar, 302017 Jaipur, India",
    distance: "Approx. 5 km from MNIT Jaipur",
    price: "₹ 4,000 – 6,000",
    mnitGuestNote: false,
    image: "/images/hotels/indie%20stays.jpg",
    mapQuery: "Indie Stays Siddharth Nagar Jaipur",
  },
  {
    id: "hotel-walnut",
    name: "Hotel Walnut",
    stars: 4,
    location: "51, Surendra Nagar, Girdhar Marg, Malviya Nagar, Behind Fortis Hospital, 302017 Jaipur, India",
    distance: "Approx. 3 km from MNIT Jaipur",
    price: "₹ 4,000 – 6,000",
    mnitGuestNote: false,
    image: "/images/hotels/walnut.jpg",
    mapQuery: "Hotel Walnut Malviya Nagar Jaipur",
  },
  {
    id: "the-fern",
    name: "The Fern Jaipur",
    stars: 4,
    location: "3, Airport Plaza, Tonk Road, 302018 Jaipur, India",
    distance: "Approx. 5 km from MNIT Jaipur",
    price: "₹ 7,000 – 9,000",
    mnitGuestNote: false,
    image: "/images/hotels/fernjaipur.jpg",
    mapQuery: "The Fern Hotel Tonk Road Jaipur",
  },
  {
    id: "suryaa-villa",
    name: "Suryaa Villa Jaipur",
    stars: 4,
    location: "C-2, Peelwa Garden, Moti Doongri Road, Adarsh Nagar, 302004 Jaipur, India",
    distance: "Approx. 7 km from MNIT Jaipur",
    price: "₹ 11,000 – 13,000",
    mnitGuestNote: false,
    image: "/images/hotels/suryaavilla.jpg",
    mapQuery: "Suryaa Villa Moti Doongri Road Adarsh Nagar Jaipur",
  },
  {
    id: "hyatt-place",
    name: "Hyatt Place Jaipur",
    stars: 5,
    location: "Apex Circle, Malviya Nagar, 302017 Jaipur, India",
    distance: "Approx. 1 km from MNIT Jaipur",
    price: "₹ 12,000 – 15,000",
    mnitGuestNote: false,
    image: "/images/hotels/hyatt%20place.jpg",
    mapQuery: "Hyatt Place Jaipur Malviya Nagar",
  },
  {
    id: "rajasthan-palace",
    name: "Rajasthan Palace",
    stars: 4,
    location: "3, Peelwa Garden, Moti Doongri Road, Adarsh Nagar, 302004 Jaipur, India",
    distance: "Approx. 7 km from MNIT Jaipur",
    price: "₹ 9,000 – 20,000",
    mnitGuestNote: false,
    image: "/images/hotels/rajasthan%20place.jpg",
    mapQuery: "Hotel Rajasthan Palace Moti Doongri Road Jaipur",
  },
]

interface GuidanceContact {
  id: string
  title: string
  description: string
  person: string
  phone: string
}

const GUIDANCE_CONTACTS: GuidanceContact[] = [
  {
    id: "1.1",
    title: "Overall Transportation Coordination",
    description: "For COPEN14 Guests and Delegates",
    person: "Dr. Dinesh K. Rathore",
    phone: "+91 82608 43176",
  },
  {
    id: "1.2",
    title: "Hospitality of Faculty & Family Delegates",
    description: "Requiring Accommodation in MNIT Acharya Bhawan Guest Flats (subject to availability)",
    person: "Dr. Yashwant Koli",
    phone: "+91 98732 90034",
  },
  {
    id: "1.3",
    title: "Hospitality of Female Only Delegates",
    description: "Requiring Girls Hostel Accommodation (subject to availability)",
    person: "Dr. Preeti Gulia",
    phone: "+91 95490 05491",
  },
  {
    id: "1.4",
    title: "Hospitality of Male Only Delegates",
    description: "Requiring Boys Hostel Accommodation (subject to availability)",
    person: "Dr. Surendra S. Godara",
    phone: "+91 97826 05555",
  },
  {
    id: "1.5",
    title: "Hospitality of COPEN14 Guests",
    description: "Accommodation and Travel Support being accommodated in MNIT Guest House",
    person: "Dr. Yashwant Koli",
    phone: "+91 98732 90034",
  },
]

export default function HospitalityPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-950 via-red-900 to-amber-950 text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M40 0l8 16-8 16-8-16zM0 40l16-8 16 8-16 8zM80 40l-16-8-16 8 16 8zM40 80l-8-16 8-16 8 16z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative z-10 px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 backdrop-blur-sm rounded-full border border-amber-300/30 text-amber-200 font-semibold text-xs md:text-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Travel & Stay Guidance</span>
            </div>

            <h1 className="text-white text-4xl md:text-6xl font-bold font-serif tracking-tight">
              Hospitality & Accommodation
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 mx-auto rounded-full" />

            <p className="text-amber-100/90 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light pt-2">
              Transit guidance to MNIT Jaipur and curated hotel accommodations for COPEN-14 delegates.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-orange-300 to-red-300" />
      </section>

      {/* Main Content Area */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl space-y-20">
          
          {/* Welcome Message & Travel/Accommodation Guidance Team (Before Transit and Hotels) */}
          <div className="space-y-8">
            <div className="rounded-2xl border-2 border-orange-500/20 bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-background p-4 sm:p-6 md:p-10 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <Badge variant="outline" className="px-3.5 py-1 text-xs font-bold border-amber-600/40 text-amber-700 dark:text-amber-300 uppercase tracking-wider w-fit">
                  Welcome to the Pink City
                </Badge>
                <span className="text-xs font-serif italic text-muted-foreground">
                  COPEN14 Organising Committee
                </span>
              </div>

              {/* Intro Jaipur Picture */}
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md border border-amber-500/20 group">
                <Image
                  src="/images/hotels/intro-jaipur.webp"
                  alt="Jaipur - The Pink City"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/20 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Jaipur, Rajasthan • The Pink City</span>
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Dear Delegates, a warm welcome to COPEN14 at MNIT Jaipur, in the heart of the Pink City!
                </h2>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Jaipur is one of India&apos;s most tourist-friendly cities, offering a wide range of hotels, guest houses around the venue. Only a very limited on-campus accommodation is available due to ongoing Academic Sessions till 24th Dec 2026. The campus is well connected to Jaipur International Airport, Jaipur Junction railway station, and the city bus terminal, with app-based cabs and auto-rickshaws available around the clock.
                </p>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  While the city&apos;s travel and hospitality infrastructure is dependable, our Accommodation and Travel support team&apos;s Guidance is only a call or text message away should you need any assistance. We also encourage you to extend your stay by a couple of days, so that alongside the conference you can explore the majestic forts, royal palaces, vibrant bazaars, and warm hospitality that make Jaipur truly unforgettable.
                </p>
              </div>

              {/* Support Team Directory */}
              <div className="pt-6 border-t border-orange-200/60 dark:border-orange-950/60 space-y-4">
                <div className="p-4 rounded-xl bg-background/80 border border-border shadow-xs">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Central Coordination Desk
                      </span>
                      <h4 className="font-bold text-base md:text-lg text-foreground">
                        Travel and Accommodation Guidance to COPEN14 Delegates and COPEN14 Guests
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                        Communication with Delegates and Guests through Portal, Email, Telephone and or at Travel / Registration Desks
                      </p>
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-foreground/90 shrink-0 md:text-right">
                      <span className="text-primary font-bold">Dr. Dinesh K. Rathore</span>
                      <span className="text-muted-foreground block text-xs mt-0.5">
                        with Dr. Yashwant Koli, Dr. Preeti Gulia, Dr. Surendra S. Godara
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-contacts Directory - Responsive Dual View */}
                
                {/* Mobile Cards View (eliminates horizontal scrolling on mobile viewports) */}
                <div className="space-y-3 block md:hidden">
                  {GUIDANCE_CONTACTS.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 sm:p-4 rounded-xl border border-border bg-card shadow-xs space-y-2.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border/60">
                          {item.id}
                        </span>
                        <a
                          href={`tel:${item.phone.replace(/[^0-9+]/g, "")}`}
                          className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold bg-primary/10 hover:bg-primary/20 px-2.5 py-1 rounded-md transition-colors shrink-0"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>{item.phone}</span>
                        </a>
                      </div>

                      <div>
                        <h5 className="font-semibold text-sm text-foreground leading-snug">
                          {item.title}
                        </h5>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-border/60 text-xs flex items-center justify-between">
                        <span className="text-muted-foreground font-medium">In-Charge:</span>
                        <span className="font-bold text-foreground">{item.person}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table View (clean table for md+ screens) */}
                <div className="hidden md:block rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/60 text-xs font-bold uppercase text-foreground/80 border-b border-border">
                      <tr>
                        <th className="py-3 px-4 w-12 text-center">#</th>
                        <th className="py-3 px-4">Area of Guidance / Responsibility</th>
                        <th className="py-3 px-4 w-64">Contact Person & In-Charge</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {GUIDANCE_CONTACTS.map((item) => (
                        <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-center text-muted-foreground">{item.id}</td>
                          <td className="py-3.5 px-4">
                            <span className="font-semibold text-foreground block">{item.title}</span>
                            <span className="text-xs text-muted-foreground">{item.description}</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-foreground">{item.person}</div>
                            <a
                              href={`tel:${item.phone.replace(/[^0-9+]/g, "")}`}
                              className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold mt-0.5"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>{item.phone}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-right pt-2">
                  <span className="text-xs md:text-sm font-serif italic text-muted-foreground">
                    COPEN14 Organising Committee
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 1: How to Reach MNIT Jaipur */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="outline" className="px-3 py-1 text-xs font-bold border-primary text-primary uppercase tracking-wider">
                Transit Information
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                How to Reach MNIT Jaipur
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                MNIT Jaipur is centrally situated on Jawahar Lal Nehru (JLN) Marg in Malviya Nagar, highly accessible from all major transportation hubs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* By Air */}
              <Card className="border border-border/80 shadow-sm hover:shadow-md transition bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                    <Plane className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">By Air</h3>
                    <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
                      Distance: ~5.6 km
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Jaipur International Airport (JAI) is approximately 5.6 km away. Pre-paid taxis, app-based cabs (Ola/Uber), and auto-rickshaws are readily available. Estimated travel time is around 15–20 minutes.
                  </p>
                </CardContent>
              </Card>

              {/* By Train */}
              <Card className="border border-border/80 shadow-sm hover:shadow-md transition bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                    <Train className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">By Train</h3>
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                      Distance: ~9.6 km (Main Station) / ~4.5 km (Gandhinagar)
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Jaipur Junction (9.6 km) and Gandhinagar Railway Station (4.5 km) connect directly to major cities nationwide. Cabs and autos are available 24/7 right outside the stations.
                  </p>
                </CardContent>
              </Card>

              {/* By Road */}
              <Card className="border border-border/80 shadow-sm hover:shadow-md transition bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">By Road</h3>
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                      JLN Marg (NH48 / NH52)
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Direct access via JLN Marg with regular city buses, private vehicles, and inter-state bus services operating from Sindhi Camp Central Bus Stand (~10 km away).
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Campus Address Box with Direction Link */}
            <div className="p-5 sm:p-6 rounded-2xl bg-muted/40 border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground">Campus Address</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Malaviya National Institute of Technology (MNIT), JLN Marg, Jaipur, Rajasthan 302017, India
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full sm:w-auto shrink-0 gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Malaviya+National+Institute+of+Technology+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions to MNIT</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Row 2: Accommodation (Dedicated Full Row) */}
          <div className="space-y-10 pt-6 border-t border-border">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="outline" className="px-3 py-1 text-xs font-bold border-primary text-primary uppercase tracking-wider">
                Hotel Directory
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Accommodation Near MNIT Jaipur
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                The following hotels are conveniently located in close proximity to the MNIT campus. Special tariffs may be applicable for COPEN-14 delegates as indicated below.
              </p>
            </div>

            {/* Hotel Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {HOTELS.map((hotel) => (
                <Card
                  key={hotel.id}
                  className="group flex flex-col justify-between overflow-hidden border border-border/80 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 bg-card"
                >
                  <div>
                    {/* Hotel Image with Badges */}
                    <div className="relative h-52 w-full overflow-hidden bg-muted">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Star Rating Badge */}
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-amber-300 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{hotel.stars} Star</span>
                      </div>

                      {/* Distance Badge */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-md max-w-full truncate shadow">
                          <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                          <span className="truncate">{hotel.distance}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-bold text-lg md:text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                          {hotel.name}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-1.5 leading-relaxed">
                          {hotel.location}
                        </p>
                      </div>

                      {/* Price Section */}
                      <div className="pt-3 border-t border-border/60 flex flex-col justify-between">
                        <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
                          Approx. Tariff / Night
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-lg md:text-xl font-extrabold text-foreground">
                            {hotel.price}
                          </span>
                          <span className="text-xs text-muted-foreground font-normal">
                            per room
                          </span>
                        </div>
                        {hotel.mnitGuestNote && (
                          <span className="inline-block mt-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded w-fit border border-emerald-200/60 dark:border-emerald-800/40">
                            For MNIT Guests
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer / Get Directions Button */}
                  <div className="px-6 pb-6 pt-0">
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all font-semibold text-xs md:text-sm py-2"
                      asChild
                    >
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          hotel.mapQuery
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>Get Directions</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-70" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Assistance Section */}
          <div className="rounded-2xl border border-border/80 bg-muted/30 p-8 text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-xl font-bold text-foreground">
              Need Additional Travel or Stay Assistance?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our hospitality team is available to assist COPEN-14 participants with airport/station transit and local hotel bookings. For any specialized assistance, please reach out to the organizing team through our contact page.
            </p>
            <div className="pt-2">
              <Button asChild className="font-semibold text-sm">
                <a href="/contact">Contact Hospitality Team</a>
              </Button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
