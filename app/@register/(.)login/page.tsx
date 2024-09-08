'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Toaster, toast } from 'sonner'
import { loginAction } from 'actions/auth'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import Modal from '@/components/ui/modal'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isPending, start] = useTransition()
  const router = useRouter()

  const closed = () => {
    router.back()
  }

  const handleLogin = async (formData: FormData) => {
    start(async () => {
      const { errorMessage } = await loginAction(formData)
      if (errorMessage) {
        toast.error(errorMessage)
      } else {
        toast.success('登录成功')
        setTimeout(() => {
          router.back()
        }, 3000)
      }
    })
  }

  return (
    <Modal
      contentClassName="shadow-none w-[328px] sm:w-[372px] md:w-[456px] lg:w-[520px]"
      isOpen
      onClose={closed}
    >
      <Toaster richColors />
      <form
        action={handleLogin}
        className=" relative z-20 w-full max-w-xs sm:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg"
      >
        <div className="min-h-96 rounded-xl bg-white px-8 py-6 text-left shadow-lg dark:bg-gray-900">
          <div className="flex h-full select-none flex-col items-center justify-center">
            <div className="mb-8 flex flex-col items-center justify-center gap-2">
              <Link href="/" target="_blank">
                <Image
                  alt=""
                  width="20"
                  height="20"
                  src="/static/favicons/apple-touch-icon.png"
                  className="w-8"
                />
              </Link>
              <p className="m-0 text-[16px] font-semibold dark:text-white">登录</p>
              <span className="m-0 max-w-[90%] text-start text-xs text-[#8B8E98]">
                科研 ALL IN ONE, 让科协维基助你科研一臂之力 🚀
              </span>
            </div>
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold text-gray-400">
                邮箱
              </label>
              <input
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-5 w-full rounded-lg border px-3 py-2 text-sm outline-none dark:border-gray-500 dark:bg-gray-900"
                placeholder="用户名"
                disabled={isPending}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="password" className="text-xs font-semibold text-gray-400">
              密码
            </label>
            <input
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mb-5 w-full rounded-lg border px-3 py-2 text-sm outline-none dark:border-gray-500 dark:bg-gray-900"
              placeholder="••••••••"
              disabled={isPending}
            />
          </div>
          <div className="mt-5 flex flex-col">
            <button className="w-full cursor-pointer select-none rounded-lg bg-blue-500 px-8 py-1 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-200">
              {isPending ? <Loader2 className="mx-auto animate-spin" /> : '登录'}
            </button>
            <div className="mt-4">
              <label htmlFor="register" className="text-primary-400">
                未注册？
              </label>
              <Link href="/signup" className="text-muted-foreground hover:text-blue-500">
                点击注册
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}
