import Link from 'next/link'
import Quote from '@/components/QuoteWrapper'

export default function page() {
  return (
    <div className="h-full w-full py-20 leading-loose">
      <h2 className="mx-auto mb-12 max-w-7xl pl-4 font-sans text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl">
        免费素材使用申明
      </h2>
      <p>感谢所有提供免费素材的作者，这些素材对我们帮助很大。</p>
      <p className="mb-20">
        Thanks to all of you for your free resources for all the people on the earth. They help us a
        lot. 🥰 from 🇨🇳
      </p>
      <p>
        温肯科协飞跃手册为非盈利网站，我们不接受捐赠，不产生广告收益，在网站搭建的过程中，可能未注意版权申明，因此可能照成素材使用不当的情况。若温肯飞跃手册使用了你的资源，而未按照你的要求做出引用说明，请联系温肯科协，我们将立刻删除资源。
      </p>
      <p className="mb-20">
        The Wenzhou-Kean Science and Research Association's Leap Manual is a non-profit website.
        During the process of building the website, there may be potential misuse, if we use your
        free resources without proper attribution, please contact us, we will remove the resource
        immediately. Sorry for the inconvenience.
      </p>
      <ul className="mt-12 text-muted-foreground">
        <li>
          <Link
            className="hover:text-red-500"
            href="https://www.freepik.com/free-photo/close-up-hands-holding-glassware_11630644.htm#fromView=search&page=1&position=2&uuid=78b1ee62-f17f-40f5-bad8-c8c8d08a3821"
          >
            首页生化环宣传图片 Image by DC Studio
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500"
            href="https://www.freepik.com/free-photo/it-expert-updating-ai-systems_237227356.htm#query=programming&position=43&from_view=keyword&track=sph&uuid=6da7f34f-3780-4699-8ff0-877650d7658a"
          >
            首页计算机科学宣传图片 Image by DC Studio on Freepik
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500"
            href="https://www.freepik.com/free-photo/entrepreneurs-discussing-work-results-meeting_3955594.htm#fromView=search&page=1&position=30&uuid=7eb370e3-76a9-4081-b7ed-870f1de828b6"
          >
            首页商科宣传图片 Image by yanalya on Freepik
          </Link>
        </li>{' '}
      </ul>
      <p className="mt-12 text-muted-foreground">
        Someone may say that placing the attribution in the navigation bar may seem like a foolish
        design choice, but We just want to express our appreciation. Thank you for making the world
        a better place. 真的很感谢你们！
      </p>{' '}
    </div>
  )
}
