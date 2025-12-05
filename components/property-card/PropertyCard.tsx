export interface Property {
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

interface PropertyCardProps {
  property: Property
}

export function PropertyCard(props: PropertyCardProps) {
  const meta = formatMeta(props.property)
  const price = formatCurrency(props.property.preco_venda)

  return (
    <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
          {props.property.bairro}, {props.property.cidade}
        </span>
        {props.property.lancamento && (
          <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
            Lançamento
          </span>
        )}
      </div>
      <h2 className="mb-2 line-clamp-2 text-sm font-semibold text-neutral-900">
        {props.property.titulo}
      </h2>
      <p className="mb-3 text-xs text-neutral-600">{meta}</p>
      <p className="mb-4 text-base font-semibold text-emerald-700">{price}</p>
      <div className="mt-auto flex items-center justify-between pt-2 text-xs text-neutral-500">
        <span>{props.property.referencia ?? "Sem referência"}</span>
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

function formatMeta(property: Property): string {
  const parts: string[] = []

  if (property.quartos && property.quartos > 0) parts.push(`${property.quartos} dorm`)
  if (property.suites && property.suites > 0) parts.push(`${property.suites} suíte`)
  if (property.vagas && property.vagas > 0) parts.push(`${property.vagas} vaga`)
  if (property.metragem && property.metragem > 0) parts.push(`${property.metragem} m²`)

  return parts.join(" • ")
}


