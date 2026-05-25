import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SponsorsHero } from "@/components/sponsors/hero";

function SponsorSection({
  title,
  amount,
  accent,
  points,
}: {
  title: string;
  amount: string;
  accent: string;
  points: string[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-b border-gray-200">
      {/* Left */}
      <div className="md:col-span-1">
        <h3 className={`text-xl md:text-2xl font-bold ${accent}`}>
          {title}
        </h3>
        <p className="mt-2 text-lg font-semibold text-gray-800">
          {amount}
        </p>
      </div>

      {/* Right */}
      <div className="md:col-span-2">
        <ul className="list-disc pl-5 space-y-2 leading-relaxed text-gray-700">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <main>
      <Header />

      <section className="pb-24">
        <SponsorsHero />

        <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-wide text-[#0a2342] mb-20">
            Sponsorship Opportunities
          </h2>

          <SponsorSection
            title="Platinum Sponsorship"
            amount="₹10,00,000 + 18% GST"
            accent="text-[#003366]"
            points={[
              "Organisation Head or nominee as Chairperson of COPEN14",
              "Chairperson to deliver Inaugural Key Talk and dais sharing with Chief Guest",
              "30-minute plenary talk for all 500+ participants",
              "Two exhibition stalls (12’ × 8’) at most prominent location",
              "One full-page advertisement in the Conference Souvenir",
              "Company logo on conference website, dais, and publicity banners",
              "Free registration for one delegate at VIP Guest House with complete hospitality",
              "Six conference registrations including food and accommodation",
            ]}
          />

          <SponsorSection
            title="Diamond Sponsorship"
            amount="₹7,00,000 + 18% GST"
            accent="text-[#4b4f9c]"
            points={[
              "Inaugural session sponsorship",
              "20-minute keynote / introduction talk",
              "Name and logo on dais, banners, brochures, and conference website",
              "One full-page advertisement in conference souvenir / proceedings",
              "Two exhibition stalls (12’ × 8’ and 8’ × 8’)",
              "Four conference registrations including food and accommodation",
            ]}
          />

          <SponsorSection
            title="Gold Sponsorship"
            amount="₹5,00,000 + 18% GST"
            accent="text-[#bfa14a]"
            points={[
              "20-minute keynote / introduction talk",
              "Name and logo on dais, banners, brochures, and conference website",
              "One full-page advertisement in conference souvenir / proceedings",
              "Two exhibition stalls (8’ × 8’)",
              "Three conference registrations including food and accommodation",
            ]}
          />

          <SponsorSection
            title="Silver Sponsorship"
            amount="₹3,00,000 + 18% GST"
            // accent="text-[#8b5a2b]"
             accent="text-[#6b7280]"
            points={[
              "10-minute keynote / introduction talk",
              "Name and logo on dais, banners, brochures, and conference website",
              "One full-page advertisement in conference souvenir / proceedings",
              "One exhibition stall (12’ × 8’)",
              "Two conference registrations including food and accommodation",
            ]}
          />

          <SponsorSection
            title="Bronze Sponsorship"
            amount="₹2,00,000 + 18% GST"
            // accent="text-[#6b7280]"
            accent="text-[#8b5a2b]"
            points={[
              "Name and logo on dais, banners, brochures, and conference website",
              "One full-page advertisement in conference souvenir / proceedings",
              "One exhibition stall (8’ × 8’)",
              "One conference registration including food and accommodation",
            ]}
          />

          {/* Exhibition */}
          <div className="pt-14">
            <h3 className="text-xl md:text-2xl font-bold text-[#0a2342] mb-6">
              Exhibition Stall Options
            </h3>

            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                <span className="font-semibold">12’ × 8’ Stall:</span> ₹1,00,000 +
                18% GST
                <span className="block text-sm text-gray-500 mt-1">
                  Quarter-page advertisement in conference souvenir and free
                  entry for four delegates (food & hostel accommodation)
                </span>
              </p>

              <p>
                <span className="font-semibold">6’ × 8’ Stall:</span> ₹50,000 +
                18% GST
                <span className="block text-sm text-gray-500 mt-1">
                  Quarter-page advertisement in conference souvenir and free
                  entry for two delegates (food & hostel accommodation)
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
