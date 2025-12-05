import Link from "next/link"

function SimuladoresPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Simuladores imobiliários
        </p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Acesse simuladores dos principais bancos
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Use os links abaixo para simular as condições de financiamento diretamente nos sites
          dos bancos. As condições apresentadas são de responsabilidade de cada instituição.
        </p>
      </header>
      <section className="grid gap-4 sm:grid-cols-2">
        <SimuladorCard
          bankName="Caixa Econômica Federal"
          href="https://www.caixa.gov.br/voce/habitacao/Paginas/default.aspx"
        />
        <SimuladorCard
          bankName="Banco do Brasil"
          href="https://www.bb.com.br/site/pra-voce/imoveis/"
        />
        <SimuladorCard
          bankName="Bradesco"
          href="https://banco.bradesco/html/classic/produtos-servicos/financiamentos/imoveis.shtm"
        />
        <SimuladorCard
          bankName="Santander"
          href="https://www.santander.com.br/credito-imobiliario"
        />
      </section>
    </main>
  )
}

interface SimuladorCardProps {
  bankName: string
  href: string
}

function SimuladorCard(props: SimuladorCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-sm">
      <div className="mb-3">
        <h2 className="text-base font-semibold text-neutral-900">
          {props.bankName}
        </h2>
        <p className="mt-1 text-xs text-neutral-600">
          Simulação de financiamento diretamente no site do banco.
        </p>
      </div>
      <Link
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      >
        Abrir simulador
      </Link>
    </article>
  )
}

export default SimuladoresPage


