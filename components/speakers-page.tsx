import { Globe } from "lucide-react"

type Speaker = {
  name: string
  role: string
  affiliation?: string
  bio: string
  photo?: string
  profileUrl?: string
}

const keynoteSpeakers: Speaker[] = [
  {
    name: "Prof. Dr.-Ing. Frank Brückner",
    role: "Business Unit Leader – Additive Manufacturing and Printing",
    affiliation: "Fraunhofer Institute, Dresden",
    photo: "/images/speakers/f.jpg",
    bio: `Prof. Dr. Frank Brueckner studied automation and control engineering as well as business administration at the Technische Universität Dresden. He completed his PhD on theoretical aspects of laser cladding.

He currently leads the Additive Manufacturing and Printing unit at Fraunhofer IWS Dresden. His work focuses on nozzle- and powder-bed-based AM processes, printing technologies, and data management.

He also supervises PhD scholars at Luleå University of Technology and serves as a lecturer at Technische Universität Dresden.`,
    profileUrl: "https://france.additive-aerospace-summit.com/component/content/article?layout=edit&id=30&Itemid=101",
  },
  {
    name: "Prof. Manish Paliwal",
    role: "Professor of Mechanical Engineering",
    affiliation: "The College of New Jersey, USA",
    photo: "/images/speakers/manish.jpg",
    bio: `Prof. Manish Paliwal is a Professor and former Chair of Mechanical Engineering at The College of New Jersey. He holds an M.Tech from IIT Delhi and a Ph.D. from Southern Illinois University Carbondale.

His research focuses on biomechanics, prosthetic design, and mechanical system modeling, combining engineering analysis with real-world applications in human mobility.

He is also a licensed professional engineer in Maryland, United States.`,
    profileUrl: "https://engineering.tcnj.edu/engineering-faculty/manish-paliwal/",
  },
  {
    name: "Prof. K.P. Rajurkar",
    role: "Emeritus Professor",
    affiliation: "Department of Mechanical and Materials Engineering, University of Nebraska-Lincoln, USA",
    photo: "/images/speakers/kprajurkar.png",
    bio: `Prof. Dr. K. P. Rajurkar is an Emeritus Professor in the Department of Mechanical and Materials Engineering at University of Nebraska-Lincoln. He is internationally recognized for his pioneering contributions to advanced manufacturing processes, particularly in non-traditional machining, and precision engineering.

His research has focused on electrical discharge machining (EDM), electrochemical machining (ECM), laser-assisted manufacturing, micro- and nano-manufacturing, hybrid machining processes, and intelligent manufacturing systems. Over the course of his distinguished academic career, he has made significant contributions to the development of advanced machining technologies and their industrial applications.`,
    profileUrl: "https://engineering.unl.edu/mme/person/kp-rajurkar/",
  },
  {
    name: "Dr. Murali Sundaram",
    role: "Professor",
    affiliation: "University of Cincinnati, Ohio, USA",
    photo: "/images/speakers/muralisundaram.png",
    bio: `Dr. Murali Sundaram is a Professor in the Department of Mechanical and Materials Engineering at the College of Engineering, University of Cincinnati. He has over 25 years of professional experience that includes ten years of industrial experience in precision manufacturing and three years of postdoctoral research experience in micro and nanomanufacturing. Dr. Sundaram is a recipient of a Faculty Early Career Development (CAREER) Award from the National Science Foundation.

His research interests include Additive Manufacturing, Nano-Manufacturing, Nontraditional Machining, Micromachining, Hybrid Machining, CAD/CAM, Metrology and Process Simulation. Dr. Sundaram is advising/has co-advised over 25 graduate students (including 6 Ph.D. students) and several undergraduate students. He has authored five book chapters and over 100 refereed publications.

Dr. Sundaram serves as Associate Editor of SME's Journal of Manufacturing Processes and is an International Editorial Review Board member of the International Journal of Manufacturing, Materials and Mechanical Engineering. Dr. Sundaram is a member of ASME and SME.`,
    profileUrl: "https://researchdirectory.uc.edu/p/sundarmi",
  },
  {
    name: "Prof. V.K. Jain",
    role: "Professor",
    affiliation: "Formerly at IIT Kanpur, India",
    photo: "/images/speakers/vkjain.png",
    bio: `Prof. V.K. Jain has served as a Professor in the Department of Mechanical Engineering at Indian Institute of Technology Kanpur for over three decades and has more than four decades of teaching, research, and academic leadership experience.

His research contributions are primarily in advanced and non-traditional manufacturing processes, micromachining, micromanufacturing, machining of advanced engineering materials, computer-aided manufacturing, and nano finishing technologies. He has authored several widely recognized books and has guided numerous M.Tech. and Ph.D. scholars in the field of manufacturing engineering.`,
    profileUrl: "https://home.iitk.ac.in/~vkjain/",
  },
  {
    name: "Prof. M.S. Shunmugam",
    role: "Professor",
    affiliation: "Formerly at IIT Madras, India",
    bio: `Prof. M.S. Shunmugam has served as a Professor in the Department of Mechanical Engineering at Indian Institute of Technology Madras (IIT Madras) for over four decades. According to his profile on the IRINS system, he holds a Scopus ID 7006246829 and has authored over 140 publications between 1974 and 2024, including journal articles, book chapters, conference papers, and reviews.

His research expertise lies in manufacturing processes and automation, covering areas such as robotics, metrology, gear manufacturing, BTA machining, centreless grinding, EDM, friction welding, inspection planning, computer applications in manufacturing, and quality control.`,
  },
]

const invitedSpeakers: Speaker[] = [
  {
    name: "Ing. Tetjana Tomášková, Ph.D.",
    role: "Faculty Member",
    affiliation: "University of West Bohemia in Pilsen, Czech Republic",
    photo: "/images/speakers/tetjana.png",
    bio: `Prof. Tetjana Tomášková, Ing. Tetjana Tomášková, Ph.D. is a faculty member at the University of West Bohemia (Západočeská univerzita) in Pilsen, Czech Republic. She is notably associated with multiple departments across different faculties at the university. Her work focuses on technical education, STEM competency development, engineering materials, manufacturing technologies, and innovative approaches to project-based learning.

She has contributed to curriculum development, teaching, and research aimed at enhancing technical and engineering education. She is actively involved in supervising student projects and theses while contributing to research and educational initiatives that promote practical engineering skills and technology-oriented learning.`,
    profileUrl: "https://www.zcu.cz/en/Employees/person.html?personId=69987",
  },
  {
    name: "Dr. I. A. Palani",
    role: "Professor",
    affiliation: "Department of Mechanical Engineering, IIT Indore",
    photo: "/images/speakers/iapalani.png",
    bio: `Dr. I. A. Palani is a Professor in Mechanical Engineering at IIT Indore. He earned his Doctorate from IIT Madras and conducted postdoctoral research at Kyushu University, Japan. Dr. Palani established the Mechatronics and Instrumentation Lab at IIT Indore, focusing on laser-assisted surface processing, micro-machining, and smart materials like shape memory alloys.

With over 100 international journal publications and significant research funding, he collaborates with global institutions and industries such as Volvo and John Deere. Dr. Palani has received prestigious awards, including the Alumni Award for Research and Innovation.`,
    profileUrl: "https://people.iiti.ac.in/~palaniia/",
  },
  {
    name: "Dr. Ramesh Singh",
    role: "Professor",
    affiliation: "Department of Mechanical Engineering, IIT Bombay",
    photo: "/images/speakers/rameshsingh.png",
    bio: `Dr. Ramesh Singh is a Professor in the Department of Mechanical Engineering at Indian Institute of Technology Bombay.

Prof. Singh earned his Ph.D. from Georgia Institute of Technology and M.S. from Tufts University. His research focuses on high-speed micromachining, laser-based materials processing, advanced manufacturing systems, precision finishing technologies, finite element modeling, and machine tool dynamics. He is recognized for pioneering the development of India's first high-speed micromachining center, capable of producing sub-micron features with nanometric accuracy.

His work integrates advanced signal processing, machine learning, and manufacturing science for real-time process monitoring and chatter control in machining operations. Prof. Singh has made significant contributions to the fields of micro-manufacturing, laser processing, additive manufacturing, composite machining, and smart manufacturing systems. His research group collaborates with academia and industry to develop sustainable and high-performance manufacturing technologies for next-generation engineering applications.`,
    profileUrl: "https://www.me.iitb.ac.in/~ramesh/",
  },
  {
    name: "Dr. Muvvala Gopinath",
    role: "Associate Professor",
    affiliation: "Department of Mechanical & Aerospace Engineering, IIT Hyderabad",
    photo: "/images/speakers/gopinath.png",
    bio: `Dr. Muvvala Gopinath is an Associate Professor in the Department of Mechanical and Aerospace Engineering at Indian Institute of Technology Hyderabad. He earned his M.Tech. and Ph.D. from Indian Institute of Technology Kharagpur and subsequently served as a Senior Scientific Officer before joining IIT Hyderabad.

Dr. Gopinath has established a strong research program in advanced manufacturing and materials processing, with particular emphasis on laser material processing, metal additive manufacturing, laser welding, underwater laser processing, friction stir welding, and surface engineering. His research focuses on developing innovative manufacturing technologies and understanding process–structure–property relationships through real-time monitoring and control of manufacturing processes.

He leads research activities in laser-based manufacturing technologies, including laser cladding, laser surface modification, additive manufacturing, and joining of advanced engineering materials.`,
    profileUrl: "https://iith.ac.in/mae/mgopinath/",
  },
  {
    name: "Dr. G.L. Samuel",
    role: "Professor",
    affiliation: "Department of Mechanical Engineering, IIT Madras",
    photo: "/images/speakers/samuel.png",
    bio: `Dr. G.L. Samuel is working as a professor in the Department of Mechanical Engineering, at IIT Madras. He completed his PhD from IIT Madras and worked as a Post Doctoral fellow at Kyungpook National University, South Korea. His research interests are in the areas of Micromachining, Metrology, and Computer Aided Inspection. He has numerous publications in well-reputed national and international journals. He has also served in several administrative posts in the department and has won numerous awards for his proficiency in guideship.`,
    profileUrl: "https://home.iitm.ac.in/samuelgl/about.html",
  },
]

export function SpeakersPageContent() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[260px] md:h-[360px]">
        <img
          src="/images/bg4.png"
          alt="Speakers Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-white">
              SPEAKERS
            </h1>
            <div className="mx-auto mt-3 h-1 w-20 bg-[color:var(--primary)] rounded" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Keynote Speakers */}
        <section>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary uppercase text-center">
            Keynote Speakers
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-24 bg-muted" />

          <div className="mt-12 space-y-12">
            {keynoteSpeakers.map((sp, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                  i % 2 === 1 ? "md:bg-secondary/20" : ""
                } p-6 md:p-8 rounded-xl border border-border/10`}
              >
                {/* Image */}
                {sp.photo && (
                  <div
                    className={`flex justify-center ${
                      i % 2 === 0
                        ? "md:col-span-3"
                        : "md:col-span-3 md:order-2"
                    }`}
                  >
                    <div className="w-full max-w-[240px] aspect-[3/4] overflow-hidden rounded-lg border border-border/60 bg-muted shadow-sm">
                      <img
                        src={sp.photo}
                        alt={sp.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div
                  className={`flex-grow text-left space-y-3 ${
                    sp.photo
                      ? i % 2 === 0
                        ? "md:col-span-9"
                        : "md:col-span-9 md:order-1"
                      : "md:col-span-12"
                  }`}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {sp.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm md:text-base mt-1">
                      {sp.role}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                      {sp.affiliation}
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                    {sp.bio.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para.trim()}</p>
                    ))}
                  </div>

                  {sp.profileUrl && (
                    <div className="pt-2">
                      <a
                        href={sp.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        View Profile
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Invited Speakers */}
        <section className="mt-20">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary uppercase text-center">
            Invited Speakers
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-24 bg-muted" />

          <div className="mt-12 space-y-12">
            {invitedSpeakers.map((sp, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                  i % 2 === 1 ? "md:bg-secondary/20" : ""
                } p-6 md:p-8 rounded-xl border border-border/10`}
              >
                {/* Image */}
                {sp.photo && (
                  <div
                    className={`flex justify-center ${
                      i % 2 === 0
                        ? "md:col-span-3"
                        : "md:col-span-3 md:order-2"
                    }`}
                  >
                    <div className="w-full max-w-[240px] aspect-[3/4] overflow-hidden rounded-lg border border-border/60 bg-muted shadow-sm">
                      <img
                        src={sp.photo}
                        alt={sp.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div
                  className={`flex-grow text-left space-y-3 ${
                    sp.photo
                      ? i % 2 === 0
                        ? "md:col-span-9"
                        : "md:col-span-9 md:order-1"
                      : "md:col-span-12"
                  }`}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {sp.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm md:text-base mt-1">
                      {sp.role}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                      {sp.affiliation}
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                    {sp.bio.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para.trim()}</p>
                    ))}
                  </div>

                  {sp.profileUrl && (
                    <div className="pt-2">
                      <a
                        href={sp.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        View Profile
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}