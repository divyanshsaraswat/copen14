"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  Layers, 
  Table as TableIcon,
  ListFilter,
  ArrowRight,
  Info,
  CheckCircle2,
  Download
} from "lucide-react"
import { Button } from "@/components/ui/button"

type StyleType = "red-text" | "orange-bg" | "blue-header" | "bold-black"

interface TableRowData {
  time: string
  title: string
  style: StyleType
  subRow?: string[]
  secondRowInSlot?: {
    title: string
    style: StyleType
  }
}

interface DayScheduleData {
  id: string
  dayNumber: string
  weekday: string
  date: string
  sheetTitle: string
  rows: TableRowData[]
}

const SCHEDULE_DATA: DayScheduleData[] = [
  {
    id: "day1",
    dayNumber: "Day 1",
    weekday: "Friday",
    date: "18 December 2026",
    sheetTitle: "COPEN 14 - Tentative Programme Schedule (Day 1) Friday, 18 December 2026",
    rows: [
      { time: "8:00 AM - 9:00 AM", title: "BREAKFAST", style: "red-text" },
      { time: "8:00 AM - 9:30 AM", title: "REGISTRATION", style: "bold-black" },
      { time: "9:30 AM - 11:00 AM", title: "INAUGURAL FUNCTION", style: "bold-black" },
      { time: "10:30 AM - 11:00 AM", title: "High Tea", style: "red-text" },
      { time: "11:00 AM - 11:30 AM", title: "PHOTO SESSION", style: "red-text" },
      { time: "11:30 AM - 1:00 PM", title: "KEYNOTE TALKS", style: "orange-bg" },
      { time: "1:00 PM - 2:00 PM", title: "LUNCH", style: "red-text" },
      { time: "2:00 PM - 2:30 PM", title: "INVITED TALKS", style: "bold-black" },
      { 
        time: "2:30 PM - 4:45 PM", 
        title: "ORAL PRESENTATION SESSIONS", 
        style: "blue-header",
        subRow: ["Session-1", "Session-2", "Session-3", "Session-4", "Session-5"]
      },
      { time: "4:45 PM - 5:00 PM", title: "Tea Break", style: "red-text" },
      { time: "5:00 PM - 5:30 PM", title: "INVITED TALKS", style: "orange-bg" },
      { 
        time: "5:30 PM - 6:30 PM", 
        title: "INDUSTRY SPONSORS TALKS", 
        style: "orange-bg",
        secondRowInSlot: {
          title: "NAC MEETING",
          style: "orange-bg"
        }
      },
      { time: "7.30 PM Onwards", title: "Cultural Programme followed by Gala Dinner", style: "red-text" },
    ],
  },
  {
    id: "day2",
    dayNumber: "Day 2",
    weekday: "Saturday",
    date: "19 December 2026",
    sheetTitle: "COPEN 14 - Tentative Programme Schedule (Day 2) Saturday, 19 December 2026",
    rows: [
      { time: "8:00 AM - 9:00 AM", title: "BREAKFAST", style: "red-text" },
      { time: "9:00 AM - 10:00 AM", title: "KEYNOTE TALKS", style: "orange-bg" },
      { 
        time: "10:00 AM - 11:45 AM", 
        title: "ORAL PRESENTATION SESSIONS", 
        style: "blue-header",
        subRow: ["Session-1", "Session-2", "Session-3", "Session-4", "Session-5"]
      },
      { time: "11:45 AM - 12:00 Noon", title: "TEA BREAK", style: "red-text" },
      { time: "12:00 Noon - 1:00 PM", title: "KEYNOTE TALKS", style: "orange-bg" },
      { time: "1:00 PM - 2:00 PM", title: "LUNCH", style: "red-text" },
      { time: "2:00 PM - 2:30 PM", title: "INVITED TALKS", style: "red-text" },
      { 
        time: "2:30 PM - 4:45 PM", 
        title: "ORAL PRESENTATION SESSIONS", 
        style: "blue-header",
        subRow: ["Session-1", "Session-2", "Session-3", "Session-4", "Session-5"]
      },
      { time: "4:45 PM - 5:00 PM", title: "TEA BREAK", style: "red-text" },
      { time: "5:00 PM - 5:30 PM", title: "INVITED TALKS", style: "orange-bg" },
      { time: "5:30 PM - 6:30 PM", title: "INDUSTRY SPONSORS TALKS", style: "orange-bg" },
      { time: "7.00 PM Onwards", title: "DINNER", style: "red-text" },
    ],
  },
  {
    id: "day3",
    dayNumber: "Day 3",
    weekday: "Sunday",
    date: "20 December 2026",
    sheetTitle: "COPEN 14 - Tentative Programme Schedule (Day 3) Sunday, 20 December 2026",
    rows: [
      { time: "8:00 AM - 9:00 AM", title: "BREAKFAST", style: "red-text" },
      { time: "9:00 AM - 10:00 AM", title: "KEYNOTE TALKS", style: "orange-bg" },
      { 
        time: "10:00 AM - 11:45 AM", 
        title: "ORAL PRESENTATION SESSIONS", 
        style: "blue-header",
        subRow: ["Session-1", "Session-2", "Session-3", "Session-4", "Session-5"]
      },
      { time: "11:45 AM - 12:00 Noon", title: "TEA BREAK", style: "red-text" },
      { time: "12:00 Noon - 1:00 PM", title: "VALEDICTORY FUNCTION", style: "red-text" },
      { time: "1:00 PM - 2:00 PM", title: "LUNCH", style: "red-text" },
    ],
  },
]

export function ScheduleSection() {
  const [activeTab, setActiveTab] = useState<string>("day1")
  const [viewMode, setViewMode] = useState<"auto" | "table" | "cards">("auto")

  const currentDay = SCHEDULE_DATA.find((d) => d.id === activeTab) || SCHEDULE_DATA[0]

  const getCellStyling = (style: StyleType) => {
    switch (style) {
      case "red-text":
        return "text-[#cc0000] font-bold bg-white dark:bg-slate-900"
      case "orange-bg":
        return "bg-[#f9cb9c] text-black font-bold dark:bg-amber-400 dark:text-slate-950"
      case "blue-header":
        return "bg-[#00adef] text-black font-bold dark:bg-sky-400 dark:text-slate-950"
      case "bold-black":
      default:
        return "text-slate-900 dark:text-white font-bold bg-white dark:bg-slate-900"
    }
  }

  return (
    <section id="schedule" className="py-10 md:py-16 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-3">
            <Calendar className="w-4 h-4" />
            <span>18 – 20 December 2026 • MNIT Jaipur</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight mb-3">
            Tentative Program Schedule
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            14th International Conference on Precision, Meso, Micro and Nano Engineering (COPEN 14)
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-900 bg-amber-100/80 border border-amber-300 px-3 py-1 rounded-md">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Note: This is a tentative programme schedule and is subject to minor adjustments as papers are scheduled.</span>
          </div>
        </div>

        {/* Pre-Conference Workshop Highlight Card */}
        <div className="mb-6 p-4 md:p-5 rounded-xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-md relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 relative z-10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/30">
                <Sparkles className="w-3 h-3" />
                Pre-Conference Workshop
              </div>
              <h3 className="text-base md:text-lg font-bold text-white">
                Pre-Conference Workshop on Precision Engineering & Manufacturing
              </h3>
              <p className="text-xs text-slate-200">
                Thursday, 17 December 2026 • 02:00 PM – 05:45 PM • Hands-on masterclasses and certificate included.
              </p>
            </div>
            <div className="shrink-0">
              <Button asChild size="sm" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs shadow">
                <Link href="/workshops/pre" className="flex items-center gap-1">
                  Workshop Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Controls: Day Selectors + View Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          
          {/* Day Tabs */}
          <div className="flex items-center p-1 bg-slate-200 dark:bg-slate-800 rounded-xl shadow-inner max-w-md w-full sm:w-auto">
            {SCHEDULE_DATA.map((day) => {
              const isActive = activeTab === day.id
              return (
                <button
                  key={day.id}
                  onClick={() => setActiveTab(day.id)}
                  className={`flex-1 sm:flex-initial py-2 px-3 sm:px-5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-white dark:bg-slate-900 text-primary shadow font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <span>{day.dayNumber}</span>
                  <span className="hidden sm:inline ml-1.5 font-normal opacity-80">({day.weekday})</span>
                </button>
              )
            })}
          </div>

          {/* View Mode Toggle: Auto / Table / Cards */}
          <div className="flex items-center gap-1 self-end sm:self-auto bg-slate-200/90 dark:bg-slate-800 p-1 rounded-lg text-xs">
            <button
              onClick={() => setViewMode("auto")}
              className={`px-2.5 py-1.5 rounded-md font-semibold transition-all ${
                viewMode === "auto"
                  ? "bg-white dark:bg-slate-900 text-primary shadow-xs font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
              title="Automatically shows Cards on mobile, Table on desktop"
            >
              <span>Auto</span>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md font-semibold transition-all ${
                viewMode === "table"
                  ? "bg-white dark:bg-slate-900 text-primary shadow-xs font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md font-semibold transition-all ${
                viewMode === "cards"
                  ? "bg-white dark:bg-slate-900 text-primary shadow-xs font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
          </div>

        </div>

        {/* ============================================================== */}
        {/* TABLE VIEW: Displays on Desktop (and forced when Table selected) */}
        {/* ============================================================== */}
        <div
          className={`rounded-xl border-2 border-slate-700 dark:border-slate-600 bg-white dark:bg-slate-900 shadow-xl overflow-hidden ${
            viewMode === "auto"
              ? "hidden md:block"
              : viewMode === "table"
              ? "block"
              : "hidden"
          }`}
        >
          {/* Scroll hint if viewed on small screen */}
          <div className="block md:hidden bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-[11px] text-slate-500 text-center border-b border-slate-300 dark:border-slate-700">
            👉 Swipe horizontally to view full table columns
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-center">
              <thead>
                {/* Top Level Title Banner */}
                <tr>
                  <th
                    colSpan={6}
                    className="border-b-2 border-slate-700 dark:border-slate-600 bg-[#e8f0fe] dark:bg-blue-950/70 text-slate-900 dark:text-white py-3 px-4 font-bold text-lg md:text-xl uppercase tracking-wider"
                  >
                    Tentative Program Schedule
                  </th>
                </tr>

                {/* Day Heading Banner */}
                <tr>
                  <th
                    colSpan={6}
                    className="border-b-2 border-slate-700 dark:border-slate-600 bg-white dark:bg-slate-900 text-[#8B2500] dark:text-amber-400 py-2.5 px-4 font-extrabold text-sm sm:text-base md:text-lg tracking-wide"
                  >
                    {currentDay.sheetTitle}
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentDay.rows.map((row, idx) => {
                  const isMultiRowInSlot = Boolean(row.secondRowInSlot)
                  const hasSubRowTracks = Boolean(row.subRow && row.subRow.length > 0)
                  
                  // Total rows spanned by the Time cell
                  let timeRowSpan = 1
                  if (hasSubRowTracks) timeRowSpan = 2
                  if (isMultiRowInSlot) timeRowSpan = 2

                  return (
                    <React.Fragment key={idx}>
                      {/* Main Event Row */}
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                        
                        {/* Time Column */}
                        <td
                          rowSpan={timeRowSpan}
                          className="w-[28%] md:w-[24%] border border-slate-500/80 dark:border-slate-600 py-2.5 px-3 font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 align-middle whitespace-nowrap"
                        >
                          {row.time}
                        </td>

                        {/* Event Cell (spans all 5 parallel session columns) */}
                        <td
                          colSpan={5}
                          className={`border border-slate-500/80 dark:border-slate-600 py-2.5 px-3 text-xs sm:text-sm md:text-base tracking-wide ${getCellStyling(
                            row.style
                          )}`}
                        >
                          {row.title}
                        </td>
                      </tr>

                      {/* Sub-row for 5 Parallel Oral Sessions (Session-1 to Session-5) */}
                      {hasSubRowTracks && row.subRow && (
                        <tr>
                          {row.subRow.map((sess, sIdx) => (
                            <td
                              key={sIdx}
                              className="w-[14.4%] border border-slate-500/80 dark:border-slate-600 py-2 px-1 text-xs sm:text-sm font-bold bg-[#00adef] text-black dark:bg-sky-400 dark:text-slate-950"
                            >
                              {sess}
                            </td>
                          ))}
                        </tr>
                      )}

                      {/* Extra second row in same time slot (e.g. NAC MEETING) */}
                      {isMultiRowInSlot && row.secondRowInSlot && (
                        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                          <td
                            colSpan={5}
                            className={`border border-slate-500/80 dark:border-slate-600 py-2.5 px-3 text-xs sm:text-sm md:text-base tracking-wide ${getCellStyling(
                              row.secondRowInSlot.style
                            )}`}
                          >
                            {row.secondRowInSlot.title}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Summary Bar */}
          <div className="p-3 md:p-4 bg-slate-100 dark:bg-slate-800/80 border-t-2 border-slate-700 dark:border-slate-600 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Showing official tentative timetable for <strong>{currentDay.weekday}, {currentDay.date}</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Venue: MNIT Jaipur Campus</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CARDS VIEW: Automatically shown on mobile / small screens */}
        {/* ============================================================== */}
        <div
          className={`space-y-3 ${
            viewMode === "auto"
              ? "block md:hidden"
              : viewMode === "cards"
              ? "block"
              : "hidden"
          }`}
        >
          {/* Day Title Ribbon for Mobile */}
          <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
            <span className="text-xs uppercase font-extrabold text-[#8B2500] dark:text-amber-400 tracking-wide">
              {currentDay.sheetTitle}
            </span>
          </div>

          {currentDay.rows.map((row, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-xs"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded shrink-0">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>{row.time}</span>
                </div>
                <div className="text-right flex-1">
                  <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold tracking-wide border border-black/10 ${getCellStyling(row.style)}`}>
                    {row.title}
                  </span>
                </div>
              </div>

              {/* 5 Parallel Tracks Chips */}
              {row.subRow && (
                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] font-semibold text-sky-800 dark:text-sky-300 mb-1.5 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>5 Parallel Technical Tracks:</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                    {row.subRow.map((track, tIdx) => (
                      <div
                        key={tIdx}
                        className="py-1 px-1.5 rounded bg-[#00adef] text-black dark:bg-sky-400 dark:text-slate-950 text-center text-xs font-bold shadow-2xs"
                      >
                        {track}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Second row in slot (e.g. NAC Meeting) */}
              {row.secondRowInSlot && (
                <div className="mt-2.5 pt-2 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-end">
                  <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold tracking-wide border border-black/10 ${getCellStyling(row.secondRowInSlot.style)}`}>
                    {row.secondRowInSlot.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend / Key Details */}
        <div className="mt-8 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Table Color Codes & Format Reference
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="flex items-center gap-2 p-2 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
              <span className="w-4 h-4 rounded bg-[#f9cb9c] border border-amber-400 shrink-0" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Keynote / Sponsors / NAC</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
              <span className="w-4 h-4 rounded bg-[#00adef] border border-sky-400 shrink-0" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Oral Tracks (Sessions 1–5)</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
              <span className="w-4 h-4 rounded bg-red-100 border border-red-300 shrink-0 flex items-center justify-center text-[10px] text-red-600 font-bold">R</span>
              <span className="font-semibold text-red-600 dark:text-red-400">Breakfast / Lunch / Tea / Gala</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
              <span className="w-4 h-4 rounded bg-slate-200 border border-slate-400 shrink-0" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Inaugural / Registration</span>
            </div>
          </div>
        </div>

        {/* Quick Links Footer Card */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
          <div>
            <span className="font-bold text-slate-900 dark:text-white">Have questions about the parallel sessions or topics?</span>
            <span className="block text-slate-500 text-xs">Reach out to the COPEN 14 organizing secretariats or view invited speakers.</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button asChild variant="outline" size="sm" className="bg-white dark:bg-slate-900 text-xs h-8">
              <Link href="/speakers">Invited Speakers</Link>
            </Button>
            <Button asChild size="sm" className="text-xs h-8">
              <Link href="/registration">Register Now</Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
