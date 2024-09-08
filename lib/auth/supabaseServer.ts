import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createSupabaseClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll().map((cookie) => ({ name: cookie.name, value: cookie.value }))
        },
        setAll(cookies: { name: string; value: string; options: CookieOptions }[]) {
          try {
            cookies.forEach((cookie) => {
              cookieStore.set({ name: cookie.name, value: cookie.value, ...cookie.options })
            })
          } catch (error) {
            console.error(error)
          }
        },
      },
    }
  )
}

export async function getUser() {
  const { auth } = createSupabaseClient()
  const user = (await auth.getUser()).data.user

  return user
}

export async function protectRoute() {
  const user = await getUser()
  if (!user) throw new Error('Unauthorized')
}
