import { createClient, type SupabaseClient } from "@supabase/supabase-js"

interface CreateSupabaseClientParams {
  url?: string
  key?: string
}

export function createSupabaseClient(params?: CreateSupabaseClientParams): SupabaseClient | null {
  const url = params?.url ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = params?.key ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) return null

  return createClient(url, key)
}


