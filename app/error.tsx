'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { MoveLeft } from 'lucide-react'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-6">
      <h2 className="">对不起，但是出现了一些问题</h2>
      <Button
        className="group p-2 hover:bg-green-500"
        variant={'destructive'}
        onClick={() => router.back()}
      >
        <MoveLeft className="mr-2 h-5  w-5 transition-transform group-hover:-translate-x-2" />
        返回
      </Button>
    </div>
  )
}
