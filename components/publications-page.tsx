import { BookOpen, ExternalLink, CheckCircle2, Award } from "lucide-react"

type Journal = {
  title: string
  publisher: string
  indexing: string
  metrics: string
  color: string
  photo?: string
}

const supportingJournals: Journal[] = [
  {
    title: "Macromolecular Symposia",
    publisher: "Wiley",
    indexing: "SCOPUS",
    metrics: "Cite Score = 1.5 (Scopus)",
    photo: "/images/publications/wiley.png",
    color: "from-amber-700 to-yellow-900",
  },
  {
    title: "Springer Proceedings",
    publisher: "Springer",
    indexing: "Selected Papers",
    metrics: "Selected Papers",
    photo: "/images/publications/springer.jpg",
    color: "from-blue-700 to-indigo-900",
  },
  {
    title: "Journal of Micromanufacturing",
    publisher: "SAGE",
    indexing: "Q2, SCOPUS",
    metrics: "[Q2, SCOPUS]",
    photo: "/images/publications/micromanufacturing.jpg",
    color: "from-slate-700 to-slate-900",
  },
]

export function PublicationsPageContent() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[260px] md:h-[360px]">
        <img
          src="/images/bg4.png"
          alt="Publications Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-white tracking-wide">
              PUBLICATIONS
            </h1>
            <div className="mx-auto mt-3 h-1 w-20 bg-[color:var(--primary)] rounded" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        
        {/* Main Publications Info Block */}
        <section className="bg-teal-50/40 border border-teal-100 rounded-2xl p-8 md:p-12 mb-16 shadow-xs text-center max-w-5xl mx-auto space-y-8">
          {/* Publications Header */}
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-200/50 rounded-xl px-8 py-3">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 tracking-wide uppercase font-sans">
              Publications
            </h2>
          </div>
          
          <div className="space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            <p>
              It is planned to publish the peer-reviewed and selected papers of conference as proceedings with Springer. For detailed instructions for author and editors of conference proceedings, kindly visit the following link:{" "}
              <a
                href="https://www.springer.com/us/authors-editors/conference-proceedings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-semibold inline-flex items-center gap-1 hover:text-blue-800"
              >
                https://www.springer.com/us/authors-editors/conference-proceedings
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
            
            <p>
              Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.
            </p>
          </div>

          <div className="pt-4 border-t border-teal-100/60 max-w-3xl mx-auto space-y-3">
            <p className="text-blue-600 font-semibold text-base md:text-lg">
              Outstanding extended papers will be submitted for possible publication in special/general issue of the SCIE/ESCI/SCOPUS Indexed journals.
            </p>
            <p className="text-red-500 font-bold text-base md:text-lg">
              (There are no additional publication charges.)
            </p>
          </div>
        </section>

        {/* Supporting Journals Section */}
        <section className="border-t border-border/40 pt-16">
          {/* Grid of Journal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportingJournals.map((journal, i) => (
              <div 
                key={i} 
                className="bg-card text-card-foreground rounded-2xl overflow-hidden border border-border/60 hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Journal Cover Section */}
                <div className="aspect-[3/4] bg-muted relative flex items-center justify-center overflow-hidden border-b border-border/40">
                  {journal.photo ? (
                    <img
                      src={journal.photo}
                      alt={journal.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${journal.color} p-8 flex flex-col justify-between text-white select-none`}>
                      <div className="text-xs uppercase tracking-widest font-semibold opacity-75">
                        {journal.publisher}
                      </div>
                      <div className="text-xl font-bold font-serif leading-snug drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-300">
                        {journal.title}
                      </div>
                      <div className="flex items-center justify-between border-t border-white/20 pt-4 text-xs font-mono opacity-80">
                        <span>{journal.indexing}</span>
                        <span>{journal.indexing === "ESCI" ? "I.F: 0.9" : journal.indexing === "SCIE" ? "I.F: 1.6" : ""}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Journal Meta Section */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors text-sm md:text-base" title={journal.title}>
                      {journal.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Publisher: <span className="font-semibold">{journal.publisher}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs font-semibold text-blue-800">
                    <span>{journal.indexing}</span>
                    <span>{journal.metrics}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
