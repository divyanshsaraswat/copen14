import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HospitalityPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-red-800 to-amber-900">
        {/* Subtle decorative overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M40 0l8 16-8 16-8-16zM0 40l16-8 16 8-16 8zM80 40l-16-8-16 8 16 8zM40 80l-8-16 8-16 8 16z'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '200px 200px'
             }}
        />
        
        <div className="relative z-10 px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top accent line */}
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-amber-300" />
              <div className="w-2 h-2 bg-amber-300 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-amber-300" />
            </div>

            {/* Main heading */}
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-4" 
                style={{ fontFamily: 'Georgia, serif' }}>
              Hospitality
            </h1>

            {/* Decorative line */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 mx-auto mb-6 rounded-full" />

            {/* Subtitle */}
            <p className="text-amber-50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Conference assistance and travel guidance for MNIT Jaipur
            </p>

            {/* Bottom accent line */}
            <div className="flex justify-center items-center gap-3 mt-8">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-amber-300" />
              <div className="w-2 h-2 bg-amber-300 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-amber-300" />
            </div>
          </div>
        </div>

        {/* Bottom accent border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-orange-300 to-red-300" />
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* How to Reach Card */}
            <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              {/* Card accent header */}
              <div className="h-1 bg-gradient-to-r from-orange-600 to-red-600" />
              
              <div className="p-8">
                {/* Card heading with icon */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-orange-600 to-red-600">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    How to Reach MNIT Jaipur
                  </h2>
                </div>

                {/* Transportation options */}
                <div className="space-y-6">
                  {/* By Air */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">By Air</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Jaipur International Airport is 5.6 km away. Taxis, Ola/Uber, and shuttles are readily available. Estimated transfer time: ~30 minutes.
                    </p>
                  </div>

                  {/* By Train */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">By Train</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Jaipur Junction is 9.6 km away. Metro, autos, and taxis provide convenient connectivity to the campus.
                    </p>
                  </div>

                  {/* By Road */}
                  <div className="border-l-4 border-amber-600 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">By Road</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Located on JLN Marg (NH48/NH52). Direct access via buses, taxis, and private vehicles.
                    </p>
                  </div>
                </div>

                {/* Campus Address */}
                <div className="mt-8 pt-8 border-t-2 border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Campus Address</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Malaviya National Institute of Technology Jaipur<br />
                    JLN Marg, Jaipur<br />
                    Rajasthan 302017
                  </p>
                </div>
              </div>
            </div>

            {/* Accommodation Card */}
            <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              {/* Card accent header */}
              <div className="h-1 bg-gradient-to-r from-pink-600 to-red-600" />
              
              <div className="p-8 flex flex-col h-full">
                {/* Card heading with icon */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-pink-600 to-red-600">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4v4" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Accommodation
                  </h2>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col justify-center">
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-pink-100 to-red-100">
                        <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Coming Soon
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Stay facilities including guest house options, partner hotels, and curated local accommodations will be communicated to all participants before the event.
                    </p>
                    <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      Details Updating Soon
                    </div>
                  </div>
                </div>

                {/* Footer note */}
                <div className="mt-8 pt-8 border-t-2 border-gray-100 text-center">
                  <p className="text-gray-600 text-sm">
                    For urgent queries, please contact the event organizers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 pt-12 border-t-2 border-gray-200">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Additional Assistance?</h3>
              <p className="text-gray-600 leading-relaxed">
                Our hospitality team is here to ensure your experience at MNIT Jaipur is seamless and comfortable. For any specific requirements or questions regarding travel, accommodation, or local guidance, please don't hesitate to reach out to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}