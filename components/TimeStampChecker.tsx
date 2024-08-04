import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'components/ui/card'
import { Checkbox } from './ui/checkbox'

export default function TimeStampChecker({
  heading = '检查点',
  description = '点击 检查点 ⏭️ 到 对应视频位置，因为b站高清晰度需要登陆，建议在这里勾选检查点后跳转到对应位置后再点击b站登陆观看',
  checkPoints,
  summary,
  updateTime,
}: {
  heading?: string
  updateTime: (time: string) => void
  summary?: string
  description?: string
  checkPoints: { label: string; content: string; time: string }[]
}) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="items-top flex space-x-2">
          <div className="grid gap-1.5 leading-none">
            {checkPoints.map((checkPoint) => (
              <div key={checkPoint.label}>
                <Checkbox onClick={() => updateTime(checkPoint.time)} id={checkPoint.label} />
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {checkPoint.label}
                </label>
                <p className="text-sm text-muted-foreground">{checkPoint.content}</p>
              </div>
            ))}
          </div>
        </div>
        <p>{summary}</p>
      </CardContent>
    </Card>
  )
}
