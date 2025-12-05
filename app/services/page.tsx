import Link from "next/link"
import { PageHeader } from "@/components/page-header/PageHeader"

function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <PageHeader
        eyebrow="Serviços"
        title="Como a Lúcia pode te ajudar"
        description="Serviços pensados para quem quer anunciar um imóvel, encontrar o imóvel certo ou simular condições de financiamento com os principais bancos."
      />
      <section className="grid gap-5 sm:grid-cols-2">
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-sm">
          <h2 className="mb-2 text-base font-semibold text-neutral-900">
            Cadastre seu imóvel
          </h2>
          <p className="mb-4">
            Se você tem um imóvel para vender, a Lúcia pode te ajudar a posicionar esse imóvel
            para o público certo e organizar todo o processo de divulgação e atendimento.
          </p>
          <div className="mt-auto">
            <Link
              href="/services/list-your-property"
              className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Preencher formulário
            </Link>
          </div>
        </article>
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-sm">
          <h2 className="mb-2 text-base font-semibold text-neutral-900">
            Encontramos para você
          </h2>
          <p className="mb-4">
            Conte o que você procura e deixe a Lúcia buscar as melhores opções de imóveis de
            acordo com o seu perfil, região desejada e faixa de valor.
          </p>
          <div className="mt-auto">
            <Link
              href="/services/property-finder"
              className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Descrever o que busco
            </Link>
          </div>
        </article>
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-sm sm:col-span-2">
          <h2 className="mb-2 text-base font-semibold text-neutral-900">
            Simuladores imobiliários
          </h2>
          <p className="mb-4">
            Acesse rapidamente os simuladores dos principais bancos para ter uma ideia das
            condições de financiamento antes de avançar na negociação.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <Link
              href="/services/mortgage-calculators"
              className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-1.5 font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Ver simuladores
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}

export default ServicesPage


