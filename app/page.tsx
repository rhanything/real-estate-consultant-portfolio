import Link from "next/link"

function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Consultoria imobiliária em Ribeirão Preto e região
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Lúcia Vieira, consultora de imóveis
          </h1>
          <p className="max-w-2xl text-base text-neutral-600">
            Em breve você poderá conhecer os imóveis em destaque, lançamentos e terrenos selecionados especialmente para você.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/5516993692189"
            className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            aria-label="Falar com Lúcia Vieira no WhatsApp"
          >
            Falar no WhatsApp
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Ver opções de contato
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage


