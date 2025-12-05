import { createSupabaseClient } from "@/lib/supabase/client"

interface Property {
  id: string
  titulo: string
  cidade: string
  bairro: string
  quartos: number | null
  suites: number | null
  vagas: number | null
  metragem: number | null
  preco_venda: number | null
  referencia: string | null
  lancamento: boolean | null
}

const fallbackProperties: Property[] = [
  {
    id: "1",
    titulo: "Apartamento moderno no Jardim Botânico",
    cidade: "Ribeirão Preto",
    bairro: "Jardim Botânico",
    quartos: 3,
    suites: 1,
    vagas: 2,
    metragem: 95,
    preco_venda: 780000,
    referencia: "REF-101",
    lancamento: false
  },
  {
    id: "2",
    titulo: "Casa térrea aconchegante",
    cidade: "Ribeirão Preto",
    bairro: "City Ribeirão",
    quartos: 3,
    suites: 1,
    vagas: 2,
    metragem: 140,
    preco_venda: 980000,
    referencia: "REF-102",
    lancamento: false
  },
  {
    id: "3",
    titulo: "Lote em condomínio fechado",
    cidade: "Sertãozinho",
    bairro: "Condomínio Reserva Verde",
    quartos: null,
    suites: null,
    vagas: null,
    metragem: 300,
    preco_venda: 260000,
    referencia: "REF-103",
    lancamento: true
  }
]

async function getProperties(): Promise<Property[]> {
  const supabase = createSupabaseClient()

  if (!supabase) return fallbackProperties

  const { data, error } = await supabase
    .from("imoveis")
    .select(
      [
        "id",
        "titulo",
        "cidade",
        "bairro",
        "quartos",
        "suites",
        "vagas",
        "metragem",
        "preco_venda",
        "referencia",
        "lancamento",
        "ativo"
      ].join(",")
    )
    .eq("ativo", true)
    .order("created_at", { ascending: false })

  if (error || !data) return fallbackProperties

  return data as Property[]
}

function formatCurrency(value: number | null): string {
  if (!value || value <= 0) return "Sob consulta"

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  })
}

function formatMeta(property: Property): string {
  const parts: string[] = []

  if (property.quartos && property.quartos > 0) parts.push(`${property.quartos} dorm`)
  if (property.suites && property.suites > 0) parts.push(`${property.suites} suíte`)
  if (property.vagas && property.vagas > 0) parts.push(`${property.vagas} vaga`)
  if (property.metragem && property.metragem > 0) parts.push(`${property.metragem} m²`)

  return parts.join(" • ")
}

async function PropertiesPage() {
  const properties = await getProperties()

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Imóveis em destaque
        </p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Imóveis à venda em Ribeirão Preto e região
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Lista inicial de imóveis para visualizar o layout. Em produção, estes dados serão
          carregados diretamente do Supabase conforme o cadastro da Lúcia.
        </p>
      </header>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <article
            key={property.id}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                {property.bairro}, {property.cidade}
              </span>
              {property.lancamento && (
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                  Lançamento
                </span>
              )}
            </div>
            <h2 className="mb-2 line-clamp-2 text-sm font-semibold text-neutral-900">
              {property.titulo}
            </h2>
            <p className="mb-3 text-xs text-neutral-600">{formatMeta(property)}</p>
            <p className="mb-4 text-base font-semibold text-emerald-700">
              {formatCurrency(property.preco_venda)}
            </p>
            <div className="mt-auto flex items-center justify-between pt-2 text-xs text-neutral-500">
              <span>{property.referencia ?? "Sem referência"}</span>
              <a
                href="https://wa.me/5516993692189"
                className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                aria-label="Falar sobre este imóvel no WhatsApp"
              >
                Falar sobre este imóvel
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default PropertiesPage


