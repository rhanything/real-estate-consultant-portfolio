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

interface PropertiesPageSearchParams {
  city?: string
  minPrice?: string
  maxPrice?: string
  reference?: string
}

async function getProperties(params?: PropertiesPageSearchParams): Promise<PropertyCardData[]> {
  const supabase = createSupabaseClient()

  if (!supabase) return fallbackProperties

  let query = supabase
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

  if (params?.city && params.city.trim()) {
    query = query.ilike("cidade", `%${params.city.trim()}%`)
  }

  if (params?.reference && params.reference.trim()) {
    query = query.ilike("referencia", `%${params.reference.trim()}%`)
  }

  const minPriceNumber = params?.minPrice ? Number(params.minPrice) : NaN
  const maxPriceNumber = params?.maxPrice ? Number(params.maxPrice) : NaN

  if (!Number.isNaN(minPriceNumber) && minPriceNumber > 0) {
    query = query.gte("preco_venda", minPriceNumber)
  }

  if (!Number.isNaN(maxPriceNumber) && maxPriceNumber > 0) {
    query = query.lte("preco_venda", maxPriceNumber)
  }

  query = query.order("created_at", { ascending: false })

  const { data, error } = await query

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

interface PropertiesPageProps {
  searchParams: PropertiesPageSearchParams
}

async function PropertiesPage(props: PropertiesPageProps) {
  const properties = await getProperties(props.searchParams)

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Imóveis em destaque
        </p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Imóveis à venda em Ribeirão Preto e região
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Utilize os filtros abaixo para encontrar imóveis por cidade, faixa de valor ou referência.
        </p>
      </header>
      <section className="mb-6 rounded-2xl border border-neutral-200 bg-white p-4 text-xs text-neutral-800 shadow-sm">
        <form className="grid gap-3 sm:grid-cols-4" method="GET">
          <div className="space-y-1">
            <label htmlFor="city" className="block text-[11px] font-semibold text-neutral-700">
              Cidade
            </label>
            <input
              id="city"
              name="city"
              defaultValue={props.searchParams.city ?? ""}
              placeholder="Ribeirão Preto"
              className="w-full rounded-lg border border-neutral-300 px-2.5 py-1.5 text-xs outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="minPrice" className="block text-[11px] font-semibold text-neutral-700">
              Valor mín. (R$)
            </label>
            <input
              id="minPrice"
              name="minPrice"
              defaultValue={props.searchParams.minPrice ?? ""}
              placeholder="300000"
              className="w-full rounded-lg border border-neutral-300 px-2.5 py-1.5 text-xs outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="maxPrice" className="block text-[11px] font-semibold text-neutral-700">
              Valor máx. (R$)
            </label>
            <input
              id="maxPrice"
              name="maxPrice"
              defaultValue={props.searchParams.maxPrice ?? ""}
              placeholder="800000"
              className="w-full rounded-lg border border-neutral-300 px-2.5 py-1.5 text-xs outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="reference" className="block text-[11px] font-semibold text-neutral-700">
              Referência
            </label>
            <input
              id="reference"
              name="reference"
              defaultValue={props.searchParams.reference ?? ""}
              placeholder="REF-101"
              className="w-full rounded-lg border border-neutral-300 px-2.5 py-1.5 text-xs outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
            />
          </div>
          <div className="flex items-end justify-end sm:col-span-4">
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Aplicar filtros
            </button>
          </div>
        </form>
      </section>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </main>
  )
}

export default PropertiesPage

