# real-estate-consultant-portfolio

Site de portfólio da consultora de imóveis Lúcia Vieira, desenvolvido com Next.js (App Router), React, TypeScript, Tailwind CSS e Supabase.

## Stack e versões recomendadas

- **Node.js**: >= 20.x (desenvolvido com Node 20 LTS)
- **npm**: >= 10.x (vem junto com Node 20)
- **pnpm**: >= 10.x (desenvolvido com pnpm 10.12.4)

> Gerenciador de pacotes padrão do projeto: **pnpm**

## Instalação

No diretório do projeto:

```bash
pnpm install
```

## Ambiente de desenvolvimento

Para rodar o servidor de desenvolvimento:

```bash
pnpm dev
```

O app ficará disponível em:

- `http://localhost:3004`

## Build de produção

Gerar build de produção:

```bash
pnpm build
```

Rodar o servidor de produção localmente após o build:

```bash
pnpm start
```

Por padrão, o Next.js roda em `http://localhost:3000` no modo `start`.  
Se for necessário alterar a porta em produção, use a variável `PORT`:

```bash
PORT=3004 pnpm start
```

## Lint

Para rodar o lint:

```bash
pnpm lint
```


