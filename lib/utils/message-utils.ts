import { AuthError } from '@supabase/supabase-js'

export const getSupabaseErrorMessage = (
  error: AuthError,
  defaultMessage: string = '哎呀，出了点问题，请稍后再试。'
) => {
  console.error(error)
  let errorMessage = defaultMessage
  const errorCode = error.code
  switch (errorCode) {
    case '':
      errorMessage = '该电子邮件地址已被使用。'
      return errorMessage
    case 'validation_failed':
      if (error.message.includes('email')) {
        errorMessage = '请输入有效的电子邮件地址'
      }
      return errorMessage
    case 'weak_password':
      errorMessage = '密码太弱, 至少六位密码，请重新输入'
      return errorMessage
    case 'over_email_send_rate_limit':
      errorMessage = '发送邮件的频率过高，请稍后再试。'
      return errorMessage
    default:
      errorMessage = defaultMessage
      break
  }
  if (error.code === undefined) {
    if (error.message.includes('Invalid login credentials')) errorMessage = '你的密码或用户名不正确'
  } else if (error instanceof Error && error.message.length < 50) {
    errorMessage = error.message
  }
  return errorMessage
}
