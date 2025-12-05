import type { ReactNode } from "react"
import Link from "next/link"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Lúcia Vieira | Consultora de Imóveis",
  description: "Portfólio de consultoria imobiliária em Ribeirão Preto e região."
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
              <Link href="/" className="flex items-baseline gap-2">
                <span className="text-sm font-semibold tracking-tight">
                  Lúcia Vieira
                </span>
                <span className="text-xs text-neutral-500">
                  Consultoria imobiliária
                </span>
              </Link>
              <nav className="flex items-center gap-4 text-xs font-medium text-neutral-700">
                <Link href="/" className="hover:text-emerald-700">
                  Início
                </Link>
                <Link href="/imoveis" className="hover:text-emerald-700">
                  Imóveis
                </Link>
                <Link href="/empresa" className="hover:text-emerald-700">
                  Empresa
                </Link>
                <Link href="/servicos" className="hover:text-emerald-700">
                  Serviços
                </Link>
                <Link href="/contato" className="hover:text-emerald-700">
                  Contato
                </Link>
              </nav>
            </div>
          </header>
          <div className="flex-1">{props.children}</div>
          <footer className="border-t border-neutral-200 bg-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
              <span>
                © {new Date().getFullYear()} Lúcia Vieira. Todos os direitos reservados.
              </span>
              <span className="text-[11px]">
                Site em desenvolvimento – informações ilustrativas.
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}


