interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader(props: PageHeaderProps) {
  return (
    <header className="mb-8 space-y-3">
      {props.eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          {props.eyebrow}
        </p>
      )}
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {props.title}
      </h1>
      {props.description && (
        <p className="max-w-2xl text-sm text-neutral-600">
          {props.description}
        </p>
      )}
    </header>
  )
}


