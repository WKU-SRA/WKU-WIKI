'use client'

function notification() {
  window.alert('对不起，我们正在搭建邮件通知业务，此功能暂不可用 🥹 ')
}

export default function ComingSoon() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center text-center">
      <div className="text-black">
        <h1 className="text-4xl font-bold text-blue-400 dark:text-white">建设中 🎒</h1>
        <p className="mt-4 text-lg text-primary-400 dark:text-white">美好即将到来 🚀</p>
      </div>
      <div className="mt-8">
        <form action={() => notification()} method="post" className="flex items-center">
          <input
            type="email"
            name="email"
            placeholder="留下你的邮箱"
            className="mr-4 rounded-md px-4 py-2 text-black focus:outline-none dark:bg-apple-primary-dark-from dark:text-white placeholder:dark:text-neutral-200"
            required
          />
          <button
            type="submit"
            className="h-full rounded-md bg-blue-500 px-4 py-2 text-black hover:bg-blue-600 focus:outline-none dark:text-white"
          >
            订阅
          </button>
        </form>
      </div>
    </div>
  )
}
