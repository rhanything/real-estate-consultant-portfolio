function EncontramosParaVocePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Encontramos para você
        </p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Conte o que você está buscando
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Preencha as informações abaixo para que a Lúcia possa selecionar imóveis alinhados com
          o seu perfil, região e faixa de valor.
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
            <label htmlFor="name" className="text-xs font-semibold text-neutral-800">
              Seu nome
            </label>
            <input
              id="name"
              name="Nome"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
              required
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="phone" className="text-xs font-semibold text-neutral-800">
                Telefone / WhatsApp
              </label>
              <input
                id="phone"
                name="Telefone"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-semibold text-neutral-800">
                E-mail
              </label>
              <input
                id="email"
                name="E-mail"
                type="email"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="desired-type" className="text-xs font-semibold text-neutral-800">
                Tipo de imóvel desejado
              </label>
              <input
                id="desired-type"
                name="Tipo de imóvel desejado"
                placeholder="Casa, apartamento, terreno..."
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="desired-city" className="text-xs font-semibold text-neutral-800">
                Cidade / região
              </label>
              <input
                id="desired-city"
                name="Cidade / região"
                placeholder="Ex.: Ribeirão Preto, região sul..."
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="min-value" className="text-xs font-semibold text-neutral-800">
                Valor mínimo
              </label>
              <input
                id="min-value"
                name="Valor mínimo"
                placeholder="Ex.: R$ 300.000"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="max-value" className="text-xs font-semibold text-neutral-800">
                Valor máximo
              </label>
              <input
                id="max-value"
                name="Valor máximo"
                placeholder="Ex.: R$ 800.000"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="preferences" className="text-xs font-semibold text-neutral-800">
              Preferências e observações
            </label>
            <textarea
              id="preferences"
              name="Preferências"
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

export default EncontramosParaVocePage


