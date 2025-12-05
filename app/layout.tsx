import type { ReactNode } from "react"
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
        {props.children}
      </body>
    </html>
  )
}


