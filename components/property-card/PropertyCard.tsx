export interface PropertyCardData {
  id: string
  title: string
  city: string
  neighborhood: string
  bedrooms: number | null
  suites: number | null
  parkingSpaces: number | null
  areaInSquareMeters: number | null
  salePrice: number | null
  reference: string | null
  isLaunch: boolean | null
}

interface PropertyCardProps {
  property: PropertyCardData
}

export function PropertyCard(props: PropertyCardProps) {
  const meta = formatMeta(props.property)
  const price = formatCurrency(props.property.salePrice)

  return (
    <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
          {props.property.neighborhood}, {props.property.city}
        </span>
        {props.property.isLaunch && (
          <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
            Lançamento
          </span>
        )}
      </div>
      <h2 className="mb-2 line-clamp-2 text-sm font-semibold text-neutral-900">
        {props.property.title}
      </h2>
      <p className="mb-3 text-xs text-neutral-600">{meta}</p>
      <p className="mb-4 text-base font-semibold text-emerald-700">{price}</p>
      <div className="mt-auto flex items-center justify-between pt-2 text-xs text-neutral-500">
        <span>{props.property.reference ?? "Sem referência"}</span>
        <a
          href="https://wa.me/5516993692189"
          className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          aria-label="Falar sobre este imóvel no WhatsApp"
        >
          Falar sobre este imóvel
        </a>
      </div>
    </article>
  )
}

function formatCurrency(value: number | null): string {
  if (!value || value <= 0) return "Sob consulta"

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  })
}

function formatMeta(property: PropertyCardData): string {
  const parts: string[] = []

  if (property.bedrooms && property.bedrooms > 0) parts.push(`${property.bedrooms} dorm`)
  if (property.suites && property.suites > 0) parts.push(`${property.suites} suíte`)
  if (property.parkingSpaces && property.parkingSpaces > 0) parts.push(`${property.parkingSpaces} vaga`)
  if (property.areaInSquareMeters && property.areaInSquareMeters > 0) {
    parts.push(`${property.areaInSquareMeters} m²`)
  }

  return parts.join(" • ")
}


