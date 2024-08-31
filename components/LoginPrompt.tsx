import { IconAirBalloon } from '@tabler/icons-react'
export default function LoginPrompt() {
  return (
    <div className="mt-20 flex w-full flex-col justify-center space-y-20 text-center">
      <h1 className="block text-3xl sm:text-5xl md:text-7xl">登录一下吧 😘</h1>
      <div className="flex justify-center text-center">
        <p className="mr-4 text-muted-foreground">此内容只对登录用户开放 </p>
        <IconAirBalloon className="text-primary-500 dark:text-neutral-300" />
      </div>
    </div>
  )
}
