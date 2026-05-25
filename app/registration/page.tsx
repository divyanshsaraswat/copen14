"use client"

import type React from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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

function FeesTable() {
  return (
    <section className="container mx-auto px-4 py-12 animate-in fade-in-50 slide-in-from-bottom-2">
      <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-primary mb-2 text-center">
        REGISTRATION FEES
      </h2>

      {/* Exclusive of GST right below title */}
      <p className="text-sm text-slate-500 mb-2 text-center">
        *All fees are exclusive of GST
      </p>

      {/* Registration note in red */}
      

      {/* National Delegates */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-primary mb-4">
          NATIONAL DELEGATES
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-center">
            <thead className="bg-muted/40">
              <tr>
                <th className="border px-4 py-2 font-semibold">Category</th>
                <th className="border px-4 py-2 font-semibold">Early Bird</th>
                <th className="border px-4 py-2 font-semibold">Regular Registration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">Industries</td>
                <td className="border px-4 py-2">₹14,000/-</td>
                <td className="border px-4 py-2">₹15,000/-</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Academicians</td>
                <td className="border px-4 py-2">₹10,000/-</td>
                <td className="border px-4 py-2">₹11,000/-</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Students</td>
                <td className="border px-4 py-2">₹8,000/-</td>
                <td className="border px-4 py-2">₹9,000/-</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Accompanying Persons</td>
                <td className="border px-4 py-2">₹3,000/-</td>
                <td className="border px-4 py-2">₹4,000/-</td>
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
                <th className="border px-4 py-2 font-semibold">Category</th>
                <th className="border px-4 py-2 font-semibold">Early Bird</th>
                <th className="border px-4 py-2 font-semibold">Regular Registration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">Industries</td>
                <td className="border px-4 py-2">USD 300</td>
                <td className="border px-4 py-2">USD 350</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Academicians</td>
                <td className="border px-4 py-2">USD 200</td>
                <td className="border px-4 py-2">USD 250</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Students</td>
                <td className="border px-4 py-2">USD 100</td>
                <td className="border px-4 py-2">USD 125</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Accompanying Persons</td>
                <td className="border px-4 py-2">USD 100</td>
                <td className="border px-4 py-2">USD 125</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className=" pt-10 text-md md:text-lg text-red-600 font-semibold mb-10 text-center">
        Registration will begin soon!
      </p>
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
