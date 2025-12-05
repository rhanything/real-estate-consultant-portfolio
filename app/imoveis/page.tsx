import { createSupabaseClient } from "@/lib/supabase/client"
import { PropertyCard, type Property } from "@/components/property-card/PropertyCard"

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

  if (error || !data || !Array.isArray(data)) return fallbackProperties

  return data as unknown as Property[]
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
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </main>
  )
}

export default PropertiesPage


