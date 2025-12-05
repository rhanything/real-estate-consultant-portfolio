import { createSupabaseClient } from "@/lib/supabase/client"
import { PropertyCard, type PropertyCardData } from "@/components/property-card/PropertyCard"

interface PropertyRow {
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

const fallbackProperties: PropertyCardData[] = [
  {
    id: "1",
    title: "Apartamento moderno no Jardim Botânico",
    city: "Ribeirão Preto",
    neighborhood: "Jardim Botânico",
    bedrooms: 3,
    suites: 1,
    parkingSpaces: 2,
    areaInSquareMeters: 95,
    salePrice: 780000,
    reference: "REF-101",
    isLaunch: false
  },
  {
    id: "2",
    title: "Casa térrea aconchegante",
    city: "Ribeirão Preto",
    neighborhood: "City Ribeirão",
    bedrooms: 3,
    suites: 1,
    parkingSpaces: 2,
    areaInSquareMeters: 140,
    salePrice: 980000,
    reference: "REF-102",
    isLaunch: false
  },
  {
    id: "3",
    title: "Lote em condomínio fechado",
    city: "Sertãozinho",
    neighborhood: "Condomínio Reserva Verde",
    bedrooms: null,
    suites: null,
    parkingSpaces: null,
    areaInSquareMeters: 300,
    salePrice: 260000,
    reference: "REF-103",
    isLaunch: true
  }
]

async function getProperties(): Promise<PropertyCardData[]> {
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

  const rows = data as unknown as PropertyRow[]

  return rows.map((row) => ({
    id: row.id,
    title: row.titulo,
    city: row.cidade,
    neighborhood: row.bairro,
    bedrooms: row.quartos,
    suites: row.suites,
    parkingSpaces: row.vagas,
    areaInSquareMeters: row.metragem,
    salePrice: row.preco_venda,
    reference: row.referencia,
    isLaunch: row.lancamento
  }))
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


