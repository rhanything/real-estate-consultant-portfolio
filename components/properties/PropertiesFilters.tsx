'use client'

import { useState, type FormEvent } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface PropertiesFiltersProps {
  initialCity?: string
  initialMinPrice?: string
  initialMaxPrice?: string
  initialReference?: string
}

export function PropertiesFilters(props: PropertiesFiltersProps) {
  const [city, setCity] = useState(props.initialCity ?? "")
  const [minPrice, setMinPrice] = useState(props.initialMinPrice ?? "")
  const [maxPrice, setMaxPrice] = useState(props.initialMaxPrice ?? "")
  const [reference, setReference] = useState(props.initialReference ?? "")

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const params = new URLSearchParams(searchParams ? searchParams.toString() : "")

    if (city) params.set("city", city)
    else params.delete("city")

    if (minPrice) params.set("minPrice", minPrice)
    else params.delete("minPrice")

    if (maxPrice) params.set("maxPrice", maxPrice)
    else params.delete("maxPrice")

    if (reference) params.set("reference", reference)
    else params.delete("reference")

    const queryString = params.toString()
    const basePath = pathname ?? "/properties"
    const target = queryString ? `${basePath}?${queryString}` : basePath

    router.push(target)
  }

  return (
    <section className="mb-6 rounded-2xl border border-neutral-200 bg-white p-4 text-xs text-neutral-800 shadow-sm">
      <form className="grid gap-3 sm:grid-cols-4" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label htmlFor="city" className="block text-[11px] font-semibold text-neutral-700">
            Cidade
          </label>
          <select
            id="city"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-2.5 py-1.5 text-xs outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-1"
          >
            <option value="">Todas</option>
            <option value="Ribeirão Preto">Ribeirão Preto</option>
            <option value="Brodowski">Brodowski</option>
            <option value="Jardinópolis">Jardinópolis</option>
            <option value="Pitangueiras">Pitangueiras</option>
            <option value="Serrana">Serrana</option>
            <option value="Sertãozinho">Sertãozinho</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="minPrice" className="block text-[11px] font-semibold text-neutral-700">
            Valor mín. (R$)
          </label>
          <input
            id="minPrice"
            name="minPrice"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
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
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
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
            value={reference}
            onChange={(event) => setReference(event.target.value)}
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
  )
}


