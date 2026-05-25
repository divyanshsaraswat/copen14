"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Carousel } from "@/components/ui/carousel"
import { CarouselSection } from "@/components/CarouselSection"

export default function AboutMNITJaipur() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="">
        <div className="relative h-56 md:h-72">
          <img
            src="/images/back-porch.png"
            alt="MNIT Jaipur"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-serif font-bold">MNIT JAIPUR</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10 md:py-16 max-w-5xl">
          {/* Institute Overview */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">About the Institute</h2>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Malaviya National Institute of Technology Jaipur (MNIT Jaipur) is a premier technical institute of national importance functioning under the National Institutes of Technology Act 2007. Established in 1963, MNIT Jaipur has evolved into a prestigious center of higher technical education and research, offering a diverse range of undergraduate, postgraduate, and doctoral programs across Engineering, Science, Technology, and Management disciplines.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              MNIT Jaipur is publicly funded by the Government of India and is recognized for its commitment to academic excellence, research innovation, and strong industry linkage. The Institute imparts high-quality technical education and fosters cutting-edge research across Engineering, Science, Management and allied disciplines. With proactive collaborations and strong industry connect, MNIT Jaipur nurtures innovation and entrepreneurship while maintaining excellence in academics.
            </p>
          </div>

          {/* Department of Mechanical Engineering */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Department of Mechanical Engineering</h2>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              The Department of Mechanical Engineering at MNIT Jaipur, one of the oldest and largest departments of the institute, offers rigorous academic programs at bachelor's, master's, and doctoral levels. Known for its comprehensive curriculum and practical training, the department also caters to part-time doctoral candidates primarily from industry and academia.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Faculty members are actively engaged in consultancy, sponsored research, and product development projects supported by major funding agencies such as DST, AICTE, and ARDB. The department regularly organizes continuing education programs and specialized workshops to update industry professionals on current mechanical engineering trends.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-4">Specializations</h3>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Specializations offered at the department span:
            </p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed space-y-2 mb-6">
              <li>Industrial Engineering and Management Research</li>
              <li>Thermal Sciences</li>
              <li>Manufacturing and Materials Engineering</li>
              <li>Machine Design for postgraduate and doctoral research</li>
            </ul>
          </div>

          <div>
            <CarouselSection/>
          </div>
          {/* Advanced Manufacturing Centre */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Advanced Manufacturing Centre (AMC)</h2>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              The state-of-the-art Advanced Manufacturing Centre (AMC) within the department is equipped with cutting-edge instruments such as:
            </p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed space-y-2 mb-6">
              <li>3D Optical Profilometers</li>
              <li>Nanoindenter</li>
              <li>5-axis CNC Coordinate Measuring Machines</li>
              <li>Additive Manufacturing technology</li>
              <li>Comprehensive CAD/CAM software suites</li>
            </ul>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              The AMC also hosts prominent national and international workshops and conferences focusing on precision engineering, quality improvement through Six Sigma, micro/nano machining, and 3D printing solutions, thereby fostering collaboration between academia and industry.
            </p>
          </div>

          {/* Industry-Institute Collaboration */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Centre for Industry-Institution Interaction (CIII)</h2>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              MNIT Jaipur actively fosters industry-institute collaborations through its Centre for Industry-Institution Interaction (CIII). This center bridges academia with the industrial sector by involving industry experts in curriculum design and career development activities, enabling students and faculty to align with global and industry standards.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              With a focus on enhancing employability and innovation, the institute continuously upgrades its teaching and research infrastructure and offers its students broad exposure to industrial environments and global knowledge networks.
            </p>
          </div>

          {/* Excellence & Recognition */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Excellence & Innovation</h2>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              MNIT Jaipur's Mechanical Engineering department is renowned for producing highly skilled engineers capable of meeting evolving technological challenges in India and worldwide. The institute's strong research output, extensive academic programs, and nurturing of industry partnerships establish it as a cornerstone of engineering education and innovation in the country.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              The Institute currently offers a wide spectrum of undergraduate, postgraduate and doctoral programs. A vibrant research ecosystem, modern laboratories and a green residential campus provide an enabling environment for holistic development. MNIT Jaipur is proud to host the 14th International Conference on Precision, Meso, Micro and Nano Engineering (COPEN 14) during December 18–20, 2026.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">Institute Information</h2>
            <ul className="list-disc pl-6 text-foreground leading-relaxed space-y-2">
              <li><strong>Location:</strong> JLN Marg, Jaipur, Rajasthan 302017, India</li>
              <li><strong>Established:</strong> 1963</li>
              <li><strong>Status:</strong> Institute of National Importance under NIT Act 2007</li>
              <li><strong>COPEN 14 Mode:</strong> Hybrid; venue sessions on campus with online participation for international attendees</li>
              <li>
                <strong>Website:</strong>{" "}
                <a 
                  href="https://www.mnit.ac.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80 transition-colors"
                >
                  www.mnit.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
