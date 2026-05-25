export function SponsorsHero() {
  return (
    <div className="relative w-full">
      <div
        className="h-[220px] md:h-[360px] bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/bg4.png')",
        }}
        role="img"
        aria-label="Sponsors page hero background"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold tracking-wide text-white">SPONSORS</h1>
          <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded" />
        </div>
      </div>
    </div>
  )
}
