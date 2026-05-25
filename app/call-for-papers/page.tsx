import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

function Hero({ title }: { title: string }) {
  return (
    <section className="relative w-full">
      <div className="relative z-10 flex h-[340px] flex-col items-center justify-center bg-[url('/images/callss.png')] bg-cover bg-center text-center">
        <h1 className="text-5xl font-bold tracking-wide text-white drop-shadow-lg md:text-6xl">
          {title}
        </h1>
        <div className="mx-auto my-4 h-1 w-20 rounded-full bg-primary" />
      </div>
    </section>
  );
}

export default function CallForPapersPage() {
  return (
    <main>
      <Header />

      <Hero title="CALL FOR PAPERS" />

      <section className="container mx-auto px-4 py-12 md:py-16">
        {/* ================= KEY TOPICS ================= */}
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-primary md:text-3xl">
          KEY TOPICS
        </h2>

        <ul className="mx-auto max-w-4xl list-disc space-y-3 pl-6 leading-relaxed md:pl-10">
          <li>Additive Manufacturing</li>
          <li>Advances in Casting and Welding</li>
          <li>Advances in Engineering Materials</li>
          <li>Advances in Traditional and Non-Traditional Machining</li>
          <li>Beam Technologies in Manufacturing</li>
          <li>CAD / CAM / CAE / Reverse Engineering</li>
          <li>Composites and Polymer Processing</li>
          <li>Cyber-Physical Systems</li>
          <li>Design for Manufacturing</li>
          <li>Digital Manufacturing</li>
          <li>Electronics Manufacturing and Assembly</li>
          <li>Forming and Consolidation Processes</li>
          <li>Green and Inclusive Manufacturing</li>
          <li>Hybrid Manufacturing</li>
          <li>Industrial Engineering and Manufacturing Process Control</li>
          <li>Industry 4.0 and IoT</li>
          <li>Manufacturing for Aerospace / Space Applications</li>
          <li>Manufacturing for Bio-Medical Applications</li>
          <li>Precision Manufacturing for Textile Machineries</li>
          <li>Precision Manufacturing for Farm Machineries</li>
          <li>Precision Manufacturing for Mining and Tunnelling Machineries</li>
          <li>Metrology and Quality Engineering</li>
          <li>Micro / Nano Fabrication</li>
          <li>Modelling and Simulation in Manufacturing</li>
          <li>Robotics and AI/ML for Precision Engineering</li>
          <li>Smart Manufacturing and Automation</li>
          <li>Surface Engineering for Precision Applications</li>
          <li>Trends in Manufacturing</li>
        </ul>

        {/* ================= SUBMISSION GUIDELINES ================= */}
        <div className="mt-16">
          <h3 className="mb-6 font-serif text-2xl font-bold text-primary md:text-3xl">
            SUBMISSION GUIDELINES
          </h3>

          <p className="max-w-5xl leading-relaxed text-base md:text-lg">
            All papers must be original and not simultaneously submitted
            elsewhere. Submissions should include a title, abstract, 4–5
            keywords, and be in PDF format (maximum 6 pages). All papers undergo
            plagiarism screening (
            <span className="font-semibold">&lt;20% similarity required</span>)
            and peer review by our Technical Committee. Authors are requested to
            prepare the manuscript strictly as per the{" "}
            <a
              href="Manuscript_temp.docx"
              download
              className="font-semibold text-primary underline hover:text-primary/80"
            >
              Manuscript Template
            </a>{" "}
            before submitting.
          </p>

          <h3 className="mt-10 mb-6 font-serif text-2xl font-bold text-primary md:text-3xl">
            SUBMISSION LINK
          </h3>

          <p className="max-w-5xl leading-relaxed text-base md:text-lg">
            <a
              className="underline text-blue-400 hover:text-blue-700"
              href="https://cmt3.research.microsoft.com/COPEN2026/Submission/Index"
            >
              Click here to submit your paper
            </a>
          </p>

          <p className="mt-6 max-w-5xl font-semibold leading-relaxed text-destructive md:text-lg">
            <span className="underline">Note:</span> The Microsoft CMT service
            was used for managing the peer-reviewing process for this
            conference. This service was provided for free by Microsoft and they
            bore all expenses, including costs for Azure cloud services as well
            as for software development and support.
          </p>
        </div>

        {/* ================= IMPORTANT DATES ================= */}
        <div className="mt-16 border-t pt-10">
          <h3 className="font-serif text-2xl font-bold text-primary md:text-3xl">
            IMPORTANT DATES
          </h3>

          <div className="mt-8 space-y-6">
            <p className="text-lg">
              <span className="font-semibold">
                Full Paper Submission Last Date:
              </span>{" "}
              <span className="font-semibold text-destructive">31/07/2026</span>
            </p>

            <p className="text-lg">
              <span className="font-semibold">
                Early Bird Registration End Date:
              </span>{" "}
              <span className="font-semibold text-destructive">31/08/2026</span>
            </p>

            <p className="text-lg">
              <span className="font-semibold">Last Date of Registration:</span>{" "}
              <span className="font-semibold text-destructive">15/10/2026</span>
            </p>
          </div>

          <div className="mt-12 space-y-6 text-xl">
            <p>
              <span className="font-semibold">Conference Venue:</span>{" "}
              <a
                href="https://www.mnit.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                MNIT Jaipur
              </a>
            </p>

            <p>
              <span className="font-semibold">Conference Mode:</span>{" "}
              <span className="text-primary">Offline</span>
            </p>

            <p className="italic text-destructive">
              For international participants, online presentations will be
              allowed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
