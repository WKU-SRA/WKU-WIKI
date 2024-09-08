'use server'

import { createSupabaseClient, protectRoute } from 'lib/auth/supabaseServer'
import { getSupabaseErrorMessage } from 'lib/utils/message-utils'

export const createAccountAction = async (formData: FormData) => {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { auth } = createSupabaseClient()

    const { error } = await auth.signUp({
      email,
      password,
    })

    if (error) throw error

    return { errorMessage: null }
  } catch (error) {
    return { errorMessage: getSupabaseErrorMessage(error) }
  }
}

export const loginAction = async (formData: FormData) => {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { auth } = createSupabaseClient()

    const { error } = await auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    return { errorMessage: null }
  } catch (error) {
    return { errorMessage: getSupabaseErrorMessage(error) }
  }
}

export const signOutAction = async () => {
  try {
    await protectRoute()

    const { auth } = createSupabaseClient()

    const { error } = await auth.signOut()

    if (error) throw error

    return { errorMessage: null }
  } catch (error) {
    return { errorMessage: getSupabaseErrorMessage(error) }
  }
}
