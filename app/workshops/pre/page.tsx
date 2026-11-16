import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Calendar,
  Clock,
  MapPin,
  Users,
  FileText,
  CheckCircle2,
  Phone,
  Layers,
  Sparkles,
  ExternalLink,
  BookOpen,
  Cpu,
} from "lucide-react"

export default function PreWorkshopsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative isolate text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('/images/hero-mnit-vltc.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/85 to-black/80" />
        <div className="container mx-auto px-4 text-center max-w-4xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 text-accent font-semibold text-xs md:text-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COPEN-14 Pre-Conference Event</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tight text-balance">
            PRE-CONFERENCE WORKSHOP
          </h1>

          <p className="text-sm md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            14th International Conference on Precision, Meso, Micro and Nano Engineering
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs md:text-sm text-white/90 pt-2">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-accent shrink-0" />
              17 December 2026
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-xs">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              2:00 PM – 5:45 PM
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-xs">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              MNIT Jaipur, India
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-xs">
              <Users className="w-4 h-4 text-accent shrink-0" />
              Two Parallel Tracks
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          
          {/* Prominent Official Flyer Download Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-6 md:p-8 shadow-xl border border-primary/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded">
                  <FileText className="w-3.5 h-3.5" />
                  Official Workshop Brochure
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Download Pre-Conference Workshop Flyer
                </h2>
                <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl">
                  Get the official PDF brochure containing track information, speaker profiles, complete schedule breakdown, and registration details.
                </p>
                <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs md:text-sm text-primary-foreground/90 font-medium">
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    Registration Fee: <strong className="text-accent font-bold">₹ 354/-</strong> (including GST)
                  </span>
                  <a
                    href="https://forms.gle/ubmbojBjTVs1xJX26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-4 hover:text-white transition inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Register via Online Form</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-6 py-6 shadow-md gap-2"
                  asChild
                >
                  <a href="/flyer.pdf" target="_blank" rel="noopener noreferrer" download="COPEN14_Workshop_Flyer.pdf">
                    <Download className="w-5 h-5" />
                    <span>Download Flyer (PDF)</span>
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold px-6 py-6"
                  asChild
                >
                  <a href="/flyer.pdf" target="_blank" rel="noopener noreferrer">
                    <span>View in Browser</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Workshop Overview & Two Tracks */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="outline" className="text-xs uppercase font-bold tracking-wider text-primary border-primary">
                Two Parallel Tracks
              </Badge>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                Workshop Tracks
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                The half-day post-lunch session is organized into two specialized tracks running simultaneously to offer deep domain insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Track A */}
              <Card className="border-2 border-blue-500/30 hover:border-blue-500 transition shadow-sm bg-card flex flex-col justify-between">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                        Track A
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        Advanced Manufacturing
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-primary">
                    Emerging Trends in Precision, Meso, Micro and Nano Manufacturing
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 px-3 py-1.5 rounded text-xs font-medium">
                    Focus: fabrication, digital manufacturing & industrial applications
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Precision, micro and nano manufacturing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Additive & hybrid manufacturing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>AI, digital twins and smart factories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Industrial manufacturing technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Robotics and automation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Track B */}
              <Card className="border-2 border-emerald-500/30 hover:border-emerald-500 transition shadow-sm bg-card flex flex-col justify-between">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">
                        Track B
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        Research & Publications
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-primary">
                    Research Funding, Industry Collaboration, High-Impact Publications
                  </p>

                  <div className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 rounded text-xs font-medium">
                    Focus: funding, strong proposals, publishing & IPR awareness
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Grant writing and funding schemes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Springer / Elsevier journal publishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Research visibility and citations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Industry collaboration and consultancy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Patents, startups and technology transfer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Speakers & Technical Sessions */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="outline" className="text-xs uppercase font-bold tracking-wider text-primary border-primary">
                Resource Persons
              </Badge>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                Speakers & Technical Sessions
              </h2>
              <p className="text-sm text-muted-foreground">
                Distinguished researchers and leaders from premier academia, research institutions, and industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Speaker 1: Prof. I. A. Palani */}
              <Card className="border border-border/80 shadow-sm hover:shadow-md transition bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted shrink-0 border border-border">
                      <img
                        src="/images/speakers/iapalani.png"
                        alt="Prof. I. A. Palani"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-foreground">
                        Prof. I. A. Palani
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Department of Mechanical Engineering, IIT Indore
                      </p>
                      <Badge className="bg-blue-600/10 text-blue-700 hover:bg-blue-600/20 border-blue-200 text-xs mt-1">
                        2:15 PM – 3:45 PM • Track A
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/60">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                      Session Topics:
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
                      <li>Ultra-precision machining and diamond turning</li>
                      <li>Laser and electrochemical micro-machining</li>
                      <li>Micro-metrology and dimensional characterization</li>
                      <li>Nanofabrication, lithography and thin-film deposition</li>
                      <li>Biomedical and electronic system applications</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Speaker 2: Prof. J. Ram Kumar */}
              <Card className="border border-border/80 shadow-sm hover:shadow-md transition bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted shrink-0 border border-border">
                      <img
                        src="/images/speakers/ramkumar.png"
                        alt="Prof. J. Ram Kumar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-foreground">
                        Prof. J. Ram Kumar
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Professor of Mechanical Engineering, IIT Kanpur
                      </p>
                      <Badge className="bg-emerald-600/10 text-emerald-700 hover:bg-emerald-600/20 border-emerald-200 text-xs mt-1">
                        2:15 PM – 3:45 PM • Track B
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/60">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                      Session Topics:
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
                      <li>Government, industry and international funding opportunities</li>
                      <li>Research grant proposal strategies and budget preparation</li>
                      <li>Publishing in Springer, Elsevier, Wiley and Taylor & Francis journals</li>
                      <li>Avoiding plagiarism and ethical issues</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Speaker 3: Dr. John Rozario Jegaraj */}
              <Card className="border border-border/80 shadow-sm hover:shadow-md transition bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted shrink-0 border border-border">
                      <img
                        src="/images/speakers/johnrozario.jpeg"
                        alt="Dr. John Rozario Jegaraj"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-foreground">
                        Dr. John Rozario Jegaraj
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Scientist, Defence Research and Development Laboratory (DRDL), DRDO, Hyderabad
                      </p>
                      <Badge className="bg-blue-600/10 text-blue-700 hover:bg-blue-600/20 border-blue-200 text-xs mt-1">
                        4:00 PM – 5:30 PM • Track A
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/60">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                      Session Topics:
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
                      <li>Metal additive and hybrid manufacturing</li>
                      <li>AI-enabled manufacturing systems</li>
                      <li>Digital twins for precision engineering</li>
                      <li>Robotics and automation in precision manufacturing</li>
                      <li>Emerging industrial requirements and challenges</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Speaker 4: Prof. Frank Brueckner */}
              <Card className="border border-border/80 shadow-sm hover:shadow-md transition bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted shrink-0 border border-border">
                      <img
                        src="/images/speakers/f.jpg"
                        alt="Prof. Frank Brueckner"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-foreground">
                        Prof. Frank Brueckner
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Head of Technology Unit, Fraunhofer Institute for Material and Beam Technology, Germany
                      </p>
                      <Badge className="bg-emerald-600/10 text-emerald-700 hover:bg-emerald-600/20 border-emerald-200 text-xs mt-1">
                        4:00 PM – 5:30 PM • Track B
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/60">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                      Session Topics:
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
                      <li>Academia-industry collaboration and technology transfer in Germany</li>
                      <li>Industry expectations and collaborative R&D</li>
                      <li>Consultancy and sponsored research</li>
                      <li>Technology readiness levels (TRLs)</li>
                      <li>Commercialization of research outcomes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Programme Schedule Timeline */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="outline" className="text-xs uppercase font-bold tracking-wider text-primary border-primary">
                Time Table
              </Badge>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                Programme Schedule
              </h2>
              <p className="text-sm text-muted-foreground">
                17 December 2026 • Half-day post-lunch session
              </p>
            </div>

            <div className="space-y-3">
              {/* Item 1 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-border/80 bg-card gap-3">
                <span className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-bold font-mono shrink-0">
                  2:00 PM – 2:15 PM
                </span>
                <div className="flex-grow space-y-0.5">
                  <h4 className="text-sm md:text-base font-bold text-foreground">
                    Welcome Address & Workshop Introduction
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Overview of workshop objectives; introduction of speakers and participants. Common to both tracks.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-border/80 bg-card gap-3">
                <span className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold font-mono shrink-0">
                  2:15 PM – 3:45 PM
                </span>
                <div className="flex-grow space-y-0.5">
                  <h4 className="text-sm md:text-base font-bold text-foreground">
                    Technical Session I (Parallel Tracks)
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    <strong className="text-foreground">Track A:</strong> Ultra-precision, micro/nano manufacturing and advanced fabrication. |{" "}
                    <strong className="text-foreground">Track B:</strong> Research funding opportunities, grant writing and high-impact publishing.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 gap-3">
                <span className="px-3 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold font-mono shrink-0">
                  3:45 PM – 4:00 PM
                </span>
                <div className="flex-grow space-y-0.5">
                  <h4 className="text-sm md:text-base font-bold text-emerald-950 dark:text-emerald-200">
                    Tea & Networking Break
                  </h4>
                  <p className="text-xs md:text-sm text-emerald-800 dark:text-emerald-300">
                    Common networking break for participants of both parallel tracks.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-border/80 bg-card gap-3">
                <span className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold font-mono shrink-0">
                  4:00 PM – 5:30 PM
                </span>
                <div className="flex-grow space-y-0.5">
                  <h4 className="text-sm md:text-base font-bold text-foreground">
                    Technical Session II (Parallel Tracks)
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    <strong className="text-foreground">Track A:</strong> Smart, hybrid and future manufacturing technologies. |{" "}
                    <strong className="text-foreground">Track B:</strong> Academia-industry collaboration and technology transfer in Germany.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-border/80 bg-card gap-3">
                <span className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-bold font-mono shrink-0">
                  5:30 PM – 5:45 PM
                </span>
                <div className="flex-grow space-y-0.5">
                  <h4 className="text-sm md:text-base font-bold text-foreground">
                    Valedictory Session
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Participant feedback • Vote of thanks • Certificate distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="outline" className="text-xs uppercase font-bold tracking-wider text-primary border-primary">
                Key Takeaways
              </Badge>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                Expected Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-border/80 bg-card shadow-sm">
                <CardContent className="p-6 space-y-2">
                  <h4 className="font-bold text-base text-blue-600">
                    Track A Outcomes
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    State-of-the-art manufacturing; industrial precision engineering; emerging micro/nano research challenges; Industry 4.0 and Industry 5.0.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/80 bg-card shadow-sm">
                <CardContent className="p-6 space-y-2">
                  <h4 className="font-bold text-emerald-600">
                    Track B Outcomes
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Competitive grant proposals; Scopus- and SCI-indexed publishing; patents, technology transfer and startups; networking with funding agencies, journal editors and industry leaders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Registration & QR Section */}
          <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl overflow-hidden p-6 md:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
              
              {/* QR Code and Registration Details */}
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left w-full lg:w-auto">
                <div className="shrink-0 flex flex-col items-center">
                  <a
                    href="https://forms.gle/ubmbojBjTVs1xJX26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block p-3 bg-white rounded-2xl shadow-md border-2 border-primary/20 hover:border-primary transition"
                    title="Click or scan with camera to register"
                  >
                    <Image
                      src="/images/workshop-qr.png"
                      alt="Workshop Registration QR Code"
                      width={150}
                      height={150}
                      className="w-36 h-36 md:w-40 md:h-40 object-contain rounded-lg"
                    />
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-xs">
                      Scan to Register
                    </div>
                  </a>
                  <span className="text-[11px] text-muted-foreground mt-3 font-medium">
                    Point camera or click to open
                  </span>
                </div>

                <div className="space-y-3 max-w-lg">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded">
                    <span>Registration • Scan QR</span>
                  </div>

                  {/* As written on top of 354 in the flyer */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                    Scan to register for the workshop
                  </h3>

                  <div className="space-y-1">
                    <p className="text-lg md:text-xl font-bold text-primary">
                      Fee: ₹ 354/- <span className="text-sm font-medium text-muted-foreground">(including GST)</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ₹300 + 18% GST = ₹354/-
                    </p>
                  </div>

                  <div className="pt-1 text-sm text-foreground flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>Contact Person:</span>
                    <strong>Dr. Yashwant Koli</strong>
                    <a
                      href="tel:+919873290034"
                      className="text-primary hover:underline font-semibold"
                    >
                      (+91 98732 90034)
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0 justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-6 shadow-md gap-2"
                  asChild
                >
                  <a
                    href="https://forms.gle/ubmbojBjTVs1xJX26"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Register for Workshop (Online Form)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/5 font-semibold px-6 py-6 gap-2"
                  asChild
                >
                  <a href="/flyer.pdf" target="_blank" rel="noopener noreferrer" download="COPEN14_Workshop_Flyer.pdf">
                    <Download className="w-4 h-4 text-primary" />
                    <span>Download Flyer (PDF)</span>
                  </a>
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground text-xs"
                  asChild
                >
                  <Link href="/registration">
                    <span>Register for COPEN-14 Main Conference →</span>
                  </Link>
                </Button>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
