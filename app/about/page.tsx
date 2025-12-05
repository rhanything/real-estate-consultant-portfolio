import { PageHeader } from "@/components/page-header/PageHeader"

function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <PageHeader
        eyebrow="Sobre"
        title="Quem é a Lúcia Vieira"
        description="Consultora de imóveis em Ribeirão Preto e região, com foco em imóveis prontos, lançamentos, imóveis na planta e terrenos selecionados."
      />
      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-sm">
        <p>
          A Lúcia Vieira atua no mercado imobiliário de Ribeirão Preto e região ajudando clientes
          a encontrar o imóvel certo, com atendimento próximo, transparente e personalizado.
        </p>
        <p>
          O foco do trabalho está em casas, apartamentos, lançamentos, imóveis na planta e
          terrenos em bairros consolidados e em condomínios planejados, em Ribeirão Preto,
          Brodowski, Jardinópolis, Pitangueiras, Serrana e Sertãozinho.
        </p>
        <p>
          Cada imóvel é selecionado com cuidado, considerando não só as características físicas,
          mas também o estilo de vida e os planos de quem vai morar ou investir.
        </p>
      </section>
    </main>
  )
}

export default AboutPage


