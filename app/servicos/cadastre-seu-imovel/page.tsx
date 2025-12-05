function CadastreSeuImovelPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Cadastre seu imóvel
        </p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Informações básicas do imóvel
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Preencha os dados abaixo para que a Lúcia possa analisar o seu imóvel e entrar em
          contato com você.
        </p>
      </header>
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-800 shadow-sm">
        <form
          className="space-y-4"
          action="mailto:luvieiraandrade10021987@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="space-y-1">
            <label htmlFor="owner-name" className="text-xs font-semibold text-neutral-800">
              Seu nome
            </label>
            <input
              id="owner-name"
              name="Nome do proprietário"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
              required
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="owner-phone" className="text-xs font-semibold text-neutral-800">
                Telefone / WhatsApp
              </label>
              <input
                id="owner-phone"
                name="Telefone"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="owner-email" className="text-xs font-semibold text-neutral-800">
                E-mail
              </label>
              <input
                id="owner-email"
                name="E-mail"
                type="email"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="type" className="text-xs font-semibold text-neutral-800">
                Tipo de imóvel
              </label>
              <input
                id="type"
                name="Tipo de imóvel"
                placeholder="Casa, apartamento, terreno..."
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="city" className="text-xs font-semibold text-neutral-800">
                Cidade
              </label>
              <input
                id="city"
                name="Cidade"
                placeholder="Ribeirão Preto, Brodowski..."
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
                required
              />
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="neighborhood" className="text-xs font-semibold text-neutral-800">
              Bairro
            </label>
            <input
              id="neighborhood"
              name="Bairro"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="estimated-price" className="text-xs font-semibold text-neutral-800">
              Valor estimado de venda
            </label>
            <input
              id="estimated-price"
              name="Valor estimado"
              placeholder="Ex.: R$ 800.000"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="details" className="text-xs font-semibold text-neutral-800">
              Detalhes do imóvel
            </label>
            <textarea
              id="details"
              name="Detalhes do imóvel"
              rows={4}
              className="w-full resize-none rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Enviar por e-mail
          </button>
        </form>
      </section>
    </main>
  )
}

export default CadastreSeuImovelPage


