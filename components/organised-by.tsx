export function OrganisedBy() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Organised by</h3>
        <p className="mb-6">
          <a href="https://www.mnit.ac.in" className="underline font-medium">
            MNIT Jaipur
          </a>
        </p>
        <div className="mx-auto w-60 h-60">
          <img src="/images/mnit-logo.png" alt="MNIT Jaipur Logo" className="w-full h-full object-contain" />
        </div>
        {/* <p className="mt-8 text-sm text-muted-foreground">Previous edition (COPEN 13) was organised by NIT Calicut.</p> */}
      </div>
    </section>
  )
}
