function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Contato
        </p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Fale com a Lúcia Vieira
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Escolha o canal que preferir para falar sobre compra de imóveis, lançamentos, imóveis
          na planta ou terrenos em Ribeirão Preto e região.
        </p>
      </header>
      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="space-y-1 text-sm">
          <h2 className="font-semibold text-neutral-900">WhatsApp</h2>
          <a
            href="https://wa.me/5516993692189"
            className="inline-flex items-center gap-2 text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            (16) 99369-2189
          </a>
        </div>
        <div className="space-y-1 text-sm">
          <h2 className="font-semibold text-neutral-900">E-mail</h2>
          <a
            href="mailto:luvieiraandrade10021987@gmail.com"
            className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
          >
            luvieiraandrade10021987@gmail.com
          </a>
        </div>
      </section>
    </main>
  )
}

export default ContactPage


