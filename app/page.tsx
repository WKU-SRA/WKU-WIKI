import { Apple } from './_components/Main'
import ActivityHero from '@/components/ui/activity-hero'

export default function Home() {
  return (
    <div>
      <ActivityHero
        link="blog/programming-tutorial-for-freshman/introduction"
        description="这个夏天，我们一起成长"
        arr={['温肯科协', '编程', '入门', '之夏']}
      />
      <Apple />
    </div>
  )
}
