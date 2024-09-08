'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ComingSoon from '@/components/ComingSoon'
import { supabase } from 'lib/auth/supabaseClient'

export default function Page() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const user = await supabase.auth.getUser()
      console.log(user)
      if (!user) {
        router.push('/login')
      } else {
        setLoading(false)
      }
    }

    checkUser()
  }, [router])

  if (loading) {
    return <div>Loading...</div>
  }

  return <ComingSoon />
}
