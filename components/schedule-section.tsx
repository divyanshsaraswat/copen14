"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  Coffee, 
  Mic, 
  Users, 
  Award, 
  FileText, 
  Layers, 
  Utensils, 
  Compass, 
  ArrowRight,
  Info
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type EventType = "ceremony" | "keynote" | "oral" | "invited" | "break" | "sponsors" | "social" | "registration" | "photo"

interface ScheduleItem {
  time: string
  title: string
  type: EventType
  tag: string
  parallelTracks?: string[]
  subItems?: string[]
  note?: string
}

interface DaySchedule {
  id: string
  dayNumber: string
  date: string
  weekday: string
  highlight: string
  events: ScheduleItem[]
}

const SCHEDULE_DAYS: DaySchedule[] = [
  {
    id: "day1",
    dayNumber: "Day 1",
    weekday: "Friday",
    date: "18 December 2026",
    highlight: "Inauguration, Keynotes, Invited Talks & Gala Dinner",
    events: [
      {
        time: "08:00 AM - 09:00 AM",
        title: "Breakfast",
        type: "break",
        tag: "Meals & Refreshments",
      },
      {
        time: "08:00 AM - 09:30 AM",
        title: "Delegate Registration",
        type: "registration",
        tag: "Registration Desk",
        note: "Badges and conference kit distribution",
      },
      {
        time: "09:30 AM - 11:00 AM",
        title: "Inaugural Function",
        type: "ceremony",
        tag: "Inaugural Ceremony",
        note: "Lighting of the Lamp, Welcome Address, and Dignitaries' Speeches",
      },
      {
        time: "10:30 AM - 11:00 AM",
        title: "High Tea",
        type: "break",
        tag: "Networking Break",
      },
      {
        time: "11:00 AM - 11:30 AM",
        title: "Group Photo Session",
        type: "photo",
        tag: "Official Photography",
        note: "All delegates, dignitaries, and participants",
      },
      {
        time: "11:30 AM - 01:00 PM",
        title: "Keynote Talks",
        type: "keynote",
        tag: "Plenary Keynotes",
        note: "Addresses by globally renowned researchers in precision manufacturing",
      },
      {
        time: "01:00 PM - 02:00 PM",
        title: "Lunch Break",
        type: "break",
        tag: "Dining Hall",
      },
      {
        time: "02:00 PM - 02:30 PM",
        title: "Invited Talks",
        type: "invited",
        tag: "Expert Sessions",
      },
      {
        time: "02:30 PM - 04:45 PM",
        title: "Oral Presentation Sessions",
        type: "oral",
        tag: "5 Parallel Technical Sessions",
        parallelTracks: ["Session-1", "Session-2", "Session-3", "Session-4", "Session-5"],
        note: "Contributed research papers presented simultaneously across specialized tracks",
      },
      {
        time: "04:45 PM - 05:00 PM",
        title: "Tea Break",
        type: "break",
        tag: "Evening Refreshments",
      },
      {
        time: "05:00 PM - 05:30 PM",
        title: "Invited Talks",
        type: "invited",
        tag: "Expert Sessions",
      },
      {
        time: "05:30 PM - 06:30 PM",
        title: "Industry Sponsors Talks & NAC Meeting",
        type: "sponsors",
        tag: "Industry & Governance",
        subItems: [
          "Industry Sponsors Talks: Showcase of cutting-edge industrial technologies & products",
          "National Advisory Committee (NAC) Meeting",
        ],
      },
      {
        time: "07:30 PM Onwards",
        title: "Cultural Programme followed by Gala Dinner",
        type: "social",
        tag: "Banquet & Culture",
        note: "Rajasthani cultural performances and grand conference dinner",
      },
    ],
  },
  {
    id: "day2",
    dayNumber: "Day 2",
    weekday: "Saturday",
    date: "19 December 2026",
    highlight: "Keynotes, Parallel Technical Tracks & Industry Forum",
    events: [
      {
        time: "08:00 AM - 09:00 AM",
        title: "Breakfast",
        type: "break",
        tag: "Meals & Refreshments",
      },
      {
        time: "09:00 AM - 10:00 AM",
        title: "Keynote Talks",
        type: "keynote",
        tag: "Plenary Keynotes",
      },
      {
        time: "10:00 AM - 11:45 AM",
        title: "Oral Presentation Sessions (Morning)",
        type: "oral",
        tag: "5 Parallel Technical Sessions",
        parallelTracks: ["Session-1", "Session-2", "Session-3", "Session-4", "Session-5"],
        note: "Technical paper presentations across specialized engineering domains",
      },
      {
        time: "11:45 AM - 12:00 Noon",
        title: "Tea Break",
        type: "break",
        tag: "Refreshments",
      },
      {
        time: "12:00 Noon - 01:00 PM",
        title: "Keynote Talks",
        type: "keynote",
        tag: "Plenary Keynotes",
      },
      {
        time: "01:00 PM - 02:00 PM",
        title: "Lunch Break",
        type: "break",
        tag: "Dining Hall",
      },
      {
        time: "02:00 PM - 02:30 PM",
        title: "Invited Talks",
        type: "invited",
        tag: "Expert Sessions",
      },
      {
        time: "02:30 PM - 04:45 PM",
        title: "Oral Presentation Sessions (Afternoon)",
        type: "oral",
        tag: "5 Parallel Technical Sessions",
        parallelTracks: ["Session-1", "Session-2", "Session-3", "Session-4", "Session-5"],
        note: "Simultaneous presentations across Halls 1-5",
      },
      {
        time: "04:45 PM - 05:00 PM",
        title: "Tea Break",
        type: "break",
        tag: "Refreshments",
      },
      {
        time: "05:00 PM - 05:30 PM",
        title: "Invited Talks",
        type: "invited",
        tag: "Expert Sessions",
      },
      {
        time: "05:30 PM - 06:30 PM",
        title: "Industry Sponsors Talks",
        type: "sponsors",
        tag: "Industry Presentation",
        note: "Presentations by leading manufacturing & instrumentation leaders",
      },
      {
        time: "07:00 PM Onwards",
        title: "Conference Dinner",
        type: "social",
        tag: "Networking Dinner",
      },
    ],
  },
  {
    id: "day3",
    dayNumber: "Day 3",
    weekday: "Sunday",
    date: "20 December 2026",
    highlight: "Keynotes, Parallel Sessions, Valedictory Function & Awards",
    events: [
      {
        time: "08:00 AM - 09:00 AM",
        title: "Breakfast",
        type: "break",
        tag: "Meals & Refreshments",
      },
      {
        time: "09:00 AM - 10:00 AM",
        title: "Keynote Talks",
        type: "keynote",
        tag: "Plenary Keynotes",
      },
      {
        time: "10:00 AM - 11:45 AM",
        title: "Oral Presentation Sessions",
        type: "oral",
        tag: "5 Parallel Technical Sessions",
        parallelTracks: ["Session-1", "Session-2", "Session-3", "Session-4", "Session-5"],
        note: "Concluding paper presentations across all tracks",
      },
      {
        time: "11:45 AM - 12:00 Noon",
        title: "Tea Break",
        type: "break",
        tag: "Refreshments",
      },
      {
        time: "12:00 Noon - 01:00 PM",
        title: "Valedictory Function & Best Paper Awards",
        type: "ceremony",
        tag: "Concluding Ceremony",
        note: "Presentation of Best Paper Awards, Conference Summary, and Vote of Thanks",
      },
      {
        time: "01:00 PM - 02:00 PM",
        title: "Farewell Lunch",
        type: "break",
        tag: "Dining Hall",
      },
    ],
  },
]

export function ScheduleSection() {
  const [activeTab, setActiveTab] = useState<string>("day1")
  const currentDay = SCHEDULE_DAYS.find((d) => d.id === activeTab) || SCHEDULE_DAYS[0]

  const getEventBadge = (type: EventType) => {
    switch (type) {
      case "keynote":
        return {
          bg: "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800",
          accentBorder: "border-l-amber-500",
          icon: <Sparkles className="w-3.5 h-3.5" />,
          cardBg: "bg-amber-50/40 hover:bg-amber-50/70 dark:bg-amber-950/20",
        }
      case "oral":
        return {
          bg: "bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950 dark:text-sky-200 dark:border-sky-800",
          accentBorder: "border-l-sky-500",
          icon: <Layers className="w-3.5 h-3.5" />,
          cardBg: "bg-sky-50/30 hover:bg-sky-50/60 dark:bg-sky-950/20",
        }
      case "invited":
        return {
          bg: "bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-950 dark:text-purple-200 dark:border-purple-800",
          accentBorder: "border-l-purple-500",
          icon: <Mic className="w-3.5 h-3.5" />,
          cardBg: "bg-purple-50/30 hover:bg-purple-50/60 dark:bg-purple-950/20",
        }
      case "ceremony":
        return {
          bg: "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800",
          accentBorder: "border-l-emerald-500",
          icon: <Award className="w-3.5 h-3.5" />,
          cardBg: "bg-emerald-50/40 hover:bg-emerald-50/70 dark:bg-emerald-950/20",
        }
      case "sponsors":
        return {
          bg: "bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-950 dark:text-indigo-200 dark:border-indigo-800",
          accentBorder: "border-l-indigo-500",
          icon: <Users className="w-3.5 h-3.5" />,
          cardBg: "bg-indigo-50/30 hover:bg-indigo-50/60 dark:bg-indigo-950/20",
        }
      case "social":
        return {
          bg: "bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950 dark:text-rose-200 dark:border-rose-800",
          accentBorder: "border-l-rose-500",
          icon: <Utensils className="w-3.5 h-3.5" />,
          cardBg: "bg-rose-50/30 hover:bg-rose-50/60 dark:bg-rose-950/20",
        }
      case "break":
        return {
          bg: "bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
          accentBorder: "border-l-slate-400",
          icon: <Coffee className="w-3.5 h-3.5" />,
          cardBg: "bg-slate-50/50 hover:bg-slate-50 dark:bg-slate-900/40",
        }
      case "registration":
        return {
          bg: "bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-800",
          accentBorder: "border-l-blue-500",
          icon: <FileText className="w-3.5 h-3.5" />,
          cardBg: "bg-blue-50/30 hover:bg-blue-50/60 dark:bg-blue-950/20",
        }
      case "photo":
        return {
          bg: "bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950 dark:text-teal-200 dark:border-teal-800",
          accentBorder: "border-l-teal-500",
          icon: <Users className="w-3.5 h-3.5" />,
          cardBg: "bg-teal-50/30 hover:bg-teal-50/60 dark:bg-teal-950/20",
        }
      default:
        return {
          bg: "bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-200",
          accentBorder: "border-l-primary",
          icon: <Compass className="w-3.5 h-3.5" />,
          cardBg: "bg-background",
        }
    }
  }

  return (
    <section id="schedule" className="py-12 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-background dark:to-slate-950">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" />
            <span>18 – 20 December 2026 • MNIT Jaipur</span>
          </div>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-4">
            Tentative Programme Schedule
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            The 14th International Conference on Precision, Meso, Micro and Nano Engineering (COPEN 14) schedule
            features keynote addresses, invited expert lectures, five parallel oral presentation tracks, and industry forums.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-md">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Note: Schedule is tentative and subject to minor adjustments as papers are finalized.</span>
          </div>
        </div>

        {/* Pre-Conference Workshop Highlight Card */}
        <div className="mb-8 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/5 pointer-events-none blur-xl" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                <Sparkles className="w-3 h-3" />
                Pre-Conference Workshop
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">
                Pre-Conference Workshop on Precision Engineering
              </h3>
              <p className="text-xs md:text-sm text-slate-200 max-w-2xl">
                Thursday, 17 December 2026 • 02:00 PM – 05:45 PM • Includes hands-on masterclasses and certificate.
              </p>
            </div>
            <div className="shrink-0">
              <Button asChild size="sm" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold shadow">
                <Link href="/workshops/pre" className="flex items-center gap-1.5">
                  Workshop Details <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Day Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-200/80 dark:bg-slate-800 rounded-2xl max-w-2xl w-full shadow-inner">
            {SCHEDULE_DAYS.map((day) => {
              const isActive = activeTab === day.id
              return (
                <button
                  key={day.id}
                  onClick={() => setActiveTab(day.id)}
                  className={`flex flex-col items-center justify-center py-2.5 px-2 md:py-3 md:px-4 rounded-xl text-center transition-all duration-200 ${
                    isActive
                      ? "bg-white dark:bg-slate-900 text-primary shadow-md font-bold scale-[1.02]"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider font-semibold opacity-80">
                    {day.dayNumber}
                  </span>
                  <span className="text-sm md:text-base font-bold whitespace-nowrap">
                    {day.weekday}
                  </span>
                  <span className="text-[11px] md:text-xs opacity-75 hidden sm:inline whitespace-nowrap">
                    {day.date.split(" ").slice(0, 2).join(" ")}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Day Banner */}
        <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentDay.dayNumber} • {currentDay.weekday}, {currentDay.date}</span>
            </div>
            <p className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-100 mt-0.5">
              {currentDay.highlight}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Venue: MNIT Jaipur Campus</span>
          </div>
        </div>

        {/* Schedule Timeline List */}
        <div className="space-y-3.5">
          {currentDay.events.map((event, index) => {
            const style = getEventBadge(event.type)
            return (
              <div
                key={index}
                className={`rounded-xl border border-slate-200/90 dark:border-slate-800 p-4 md:p-5 transition-all duration-150 border-l-[5px] ${style.accentBorder} ${style.cardBg} shadow-sm hover:shadow`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  
                  {/* Left: Time & Tag */}
                  <div className="sm:w-56 shrink-0 flex flex-wrap sm:flex-col items-start gap-1.5">
                    <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 shadow-2xs">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <Badge variant="outline" className={`text-[11px] font-medium border flex items-center gap-1 ${style.bg}`}>
                      {style.icon}
                      <span>{event.tag}</span>
                    </Badge>
                  </div>

                  {/* Right: Content & Parallel Tracks */}
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {event.title}
                    </h4>

                    {event.note && (
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {event.note}
                      </p>
                    )}

                    {/* Sub-items (e.g. Industry talks & NAC) */}
                    {event.subItems && (
                      <div className="mt-2.5 space-y-1.5 pl-1">
                        {event.subItems.map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Parallel Tracks Grid for Oral Presentations */}
                    {event.parallelTracks && (
                      <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-700">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-2 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          <span>5 Parallel Paper Presentation Tracks:</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                          {event.parallelTracks.map((track, tIdx) => (
                            <div
                              key={tIdx}
                              className="px-2.5 py-1.5 rounded-lg bg-sky-100/80 dark:bg-sky-950/60 border border-sky-300/80 dark:border-sky-800 text-center"
                            >
                              <div className="text-xs font-bold text-sky-900 dark:text-sky-200">{track}</div>
                              <div className="text-[10px] text-sky-700 dark:text-sky-400">Oral Papers</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Legend / Key Details */}
        <div className="mt-12 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <Compass className="w-4 h-4 text-primary" />
            <span>Program Categories & Legend</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
              <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
              <span className="font-medium text-amber-900 dark:text-amber-200">Keynote Talks</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900">
              <span className="w-3 h-3 rounded-full bg-purple-500 shrink-0" />
              <span className="font-medium text-purple-900 dark:text-purple-200">Invited Talks</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900">
              <span className="w-3 h-3 rounded-full bg-sky-500 shrink-0" />
              <span className="font-medium text-sky-900 dark:text-sky-200">Oral Tracks (1–5)</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
              <span className="font-medium text-emerald-900 dark:text-emerald-200">Inaugural/Valedictory</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900">
              <span className="w-3 h-3 rounded-full bg-indigo-500 shrink-0" />
              <span className="font-medium text-indigo-900 dark:text-indigo-200">Industry & NAC</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900">
              <span className="w-3 h-3 rounded-full bg-rose-500 shrink-0" />
              <span className="font-medium text-rose-900 dark:text-rose-200">Gala & Dinners</span>
            </div>
          </div>
        </div>

        {/* Quick Links Footer Card */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Have questions about the sessions or presentation halls?</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Reach out to the COPEN 14 organizing secretariats or view invited speakers.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button asChild variant="outline" size="sm" className="bg-white dark:bg-slate-900">
              <Link href="/speakers">Invited Speakers</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/registration">Register Now</Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
