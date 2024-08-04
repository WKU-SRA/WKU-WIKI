import Link from 'next/link'
import { CardHeader, CardTitle, Card, CardContent, CardFooter } from './ui/card'

export default function Quote({
  quote,
  element,
  paraphrsed,
}: {
  quote: {
    author: string
    href?: string
  }
  element: React.ReactElement
  paraphrsed?: boolean
}) {
  return (
    <Card>
      <CardContent>{element}</CardContent>
      <CardFooter>
        {quote.href ? (
          <a className="text-sm font-bold text-muted-foreground" href={quote.href}>
            {paraphrsed ? `转述于 ${quote.author}` : `引用自 ${quote.author}`}
          </a>
        ) : (
          <p className="text-sm font-bold text-muted-foreground">
            {paraphrsed ? `转述于 ${quote.author}` : `引用自 ${quote.author}`}
          </p>
        )}
      </CardFooter>
    </Card>
  )
}
