"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function CopenAboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="">
        <div className="relative h-56 md:h-72 w-full overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/bg1.png" alt="COPEN" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-white text-4xl md:text-6xl font-serif font-light tracking-wide mb-2">COPEN</h1>
              <p className="text-white/90 text-lg md:text-xl font-light">Conference on Precision Engineering</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
          {/* Introduction */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">About COPEN</h2>
              <div className="w-24 h-0.5 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The Conference on Precision Engineering (COPEN) was established by <span className="font-semibold text-gray-900">IIT Madras in 2000</span> as a premier platform 
                  uniting academicians, researchers, and practicing engineers in precision engineering excellence.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Having achieved international recognition in 2006, COPEN has evolved into a distinguished forum 
                  for knowledge exchange and technological advancement in precision manufacturing.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-light text-blue-600 mb-2">25+</div>
                    <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-blue-600 mb-2">14</div>
                    <div className="text-sm text-gray-600 font-medium">Total Editions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-blue-600 mb-2">2006</div>
                    <div className="text-sm text-gray-600 font-medium">International Status</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-blue-600 mb-2">2026</div>
                    <div className="text-sm text-gray-600 font-medium">Next Edition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Conference Objectives</h2>
              <div className="w-24 h-0.5 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-gray-700 text-center mb-12">
                COPEN serves as a distinguished platform for specialists in precision, meso, micro, and nano engineering, 
                fostering collaboration between industry, academia, and research institutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Strategic Industries", desc: "Advanced manufacturing technologies and precision systems" },
                  { title: "Automotive", desc: "Complex components and precision manufacturing solutions"},
                  { title: "Aerospace", desc: "High-precision requirements and advanced materials"},
                  { title: "Electronics", desc: "Miniaturization and precision control systems"},
                  { title: "Bio-medical", desc: "Advanced metrology and quality assurance"},
                  { title: "Research & Development", desc: "Innovation and technological advancement" }
                ].map((area, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                    <div className="text-2xl mb-4"></div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conference Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Conference Evolution</h2>
              <div className="w-24 h-0.5 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A chronological journey through COPEN's growth from a national conference to an internationally recognized forum
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>
              
              {[
                { edition: "COPEN 1", institution: "IIT Madras", location: "Chennai", year: "2000", status: "inception" },
                { edition: "COPEN 2", institution: "PSG College of Technology", location: "Coimbatore", year: "2002" },
                { edition: "COPEN 3", institution: "CMTI", location: "Bangalore", year: "2003" },
                { edition: "COPEN 4", institution: "Jadavpur University", location: "Kolkata", year: "2005" },
                { edition: "COPEN 5", institution: "College of Engineering", location: "Trivandrum", year: "2007" },
                { edition: "COPEN 6", institution: "PSG College & Amrita Vishwa Vidyapeetham", location: "Coimbatore", year: "2009", status: "international" },
                { edition: "COPEN 7", institution: "College of Engineering", location: "Pune", year: "2011" },
                { edition: "COPEN 8", institution: "NIT Calicut", location: "Kozhikode", year: "2013", status: "highlight" },
                { edition: "COPEN 9", institution: "IIT Bombay", location: "Mumbai", year: "2015" },
                { edition: "COPEN 10", institution: "IIT Madras", location: "Chennai", year: "2017" },
                { edition: "COPEN 11", institution: "IIT Indore", location: "Madhya Pradesh", year: "2019" },
                { edition: "COPEN 12", institution: "IIT Kanpur", location: "Uttar Pradesh", year: "2022" },
                { edition: "COPEN 13", institution: "NIT Calicut", location: "Kozhikode", year: "2024", status: "highlight" },
                { edition: "COPEN 14", institution: "MNIT Jaipur", location: "Rajasthan", year: "2026", status: "upcoming" }
              ].map((conference, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 bg-white z-10 ${
                    conference.status === 'upcoming' 
                      ? 'border-red-400 shadow-lg shadow-red-100' 
                      : conference.status === 'highlight' 
                      ? 'border-green-400 shadow-lg shadow-green-100' 
                      : conference.status === 'inception'
                      ? 'border-purple-400 shadow-lg shadow-purple-100'
                      : conference.status === 'international'
                      ? 'border-yellow-400 shadow-lg shadow-yellow-100'
                      : 'border-blue-400'
                  }`}>
                    <div className={`absolute inset-1 rounded-full ${
                      conference.status === 'upcoming' 
                        ? 'bg-red-400' 
                        : conference.status === 'highlight' 
                        ? 'bg-green-400' 
                        : conference.status === 'inception'
                        ? 'bg-purple-400'
                        : conference.status === 'international'
                        ? 'bg-yellow-400'
                        : 'bg-blue-400'
                    }`}></div>
                  </div>
                  
                  {/* Content card */}
                  <div className="ml-16 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center gap-4 mb-2 sm:mb-0">
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {conference.year}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {conference.edition}
                        </h3>
                      </div>
                      
                      {conference.status === 'upcoming' && (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
                          UPCOMING
                        </span>
                      )}
                      {conference.status === 'inception' && (
                        <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                          INCEPTION
                        </span>
                      )}
                      {conference.status === 'international' && (
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                          INTERNATIONAL STATUS
                        </span>
                      )}
                      {conference.status === 'highlight' && (
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                          NIT CALICUT
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-gray-900 font-medium">{conference.institution}</p>
                      <p className="text-gray-600 text-sm">{conference.location}</p>
                    </div>
                    
                    {conference.status === 'international' && (
                      <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
                        <p className="text-yellow-800 text-sm font-medium">
                          Milestone: COPEN achieved international recognition in 2006
                        </p>
                      </div>
                    )}
                    
                    {conference.status === 'upcoming' && (
                      <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400 rounded-r">
                        <p className="text-red-800 text-sm font-medium">
                          Next edition: December 18-20, 2026
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legacy Section */}
          {/* <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">COPEN Legacy</h3>
                <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation Hub</h4>
                  <p className="text-gray-600 text-sm">Fostering breakthrough technologies in precision engineering</p>
                </div>
                
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h4>
                  <p className="text-gray-600 text-sm">Connecting researchers and practitioners worldwide</p>
                </div>
                
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence Standard</h4>
                  <p className="text-gray-600 text-sm">Setting benchmarks in precision engineering research</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* CTA Section */}
          {/* <div className="text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Explore COPEN Further</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Discover comprehensive information about COPEN's history, research contributions, 
                and detailed conference proceedings in our dedicated portal.
              </p>
              <a 
                href="/about/portal" 
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Access COPEN Portal
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </main>
  )
}
