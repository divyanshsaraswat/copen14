export function SponsorsHero() {
  return (
    <div className="relative w-full">
      <div
        className="h-[260px] md:h-[360px] bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/bg4.png')",
        }}
        role="img"
        aria-label="Sponsors page hero background"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20 uppercase tracking-wider backdrop-blur-sm">
            Conference Supporters
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tight text-white uppercase">
            OUR SPONSORS & PARTNERS
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto font-normal leading-relaxed pt-1">
            We gratefully acknowledge the generous support of our sponsors and industrial partners.
          </p>
        </div>
      </div>
    </div>
  );
}
