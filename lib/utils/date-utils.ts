export default function getCurrentDateTimeWithGreeting(): string {
  const now = new Date()
  const hours = now.getHours()
  return `现在是 ${now.getFullYear()} 年 ${now.getMonth() + 1} 月 ${now.getDate()} 日 ${now.getHours()} 时  \n\n${hours < 12 && hours > 6 ? '早上好' : hours < 18 && hours >= 12 ? '下午好' : '晚上好'} 我的船长 🫡 `
}

export function getCurrentDateTime(): string {
  const now = new Date()
  const hours = now.getHours()
  return `${now.getFullYear()} 年 ${now.getMonth() + 1} 月 ${now.getDate()} 日 ${now.getHours()} 时,`
}

export function transformTimeToSeconds(time: string): number {
  const timeParts = time.match(/(\d{1,2}):(\d{1,2}):(\d{1,2})/)

  if (!timeParts) {
    throw new Error('Invalid time format. Expected format is HH:MM:SS')
  }

  const hours = parseInt(timeParts[1], 10)
  const minutes = parseInt(timeParts[2], 10)
  const seconds = parseInt(timeParts[3], 10)

  return hours * 3600 + minutes * 60 + seconds
}
