// Next Imports
import { cookies, headers } from 'next/headers'

// Third-party Imports
import 'server-only'

// Type Imports
// import type { Settings } from '@core/contexts/settingsContext'
// import type { SystemMode } from '@core/types'

// Config Imports
// import themeConfig from '@configs/themeConfig'

// export const getSettingsFromCookie = async (): Promise<Settings> => {
//   const cookieStore = await cookies()

//   const cookieName = themeConfig.settingsCookieName

//   return JSON.parse(cookieStore.get(cookieName)?.value || '{}')
// }

// export const getMode = async () => {
//   const settingsCookie = await getSettingsFromCookie()

//   // Get mode from cookie or fallback to theme config
//   const _mode = settingsCookie.mode || themeConfig.mode

//   return _mode
// }

// export const getSystemMode = async (): Promise<SystemMode> => {
//   const cookieStore = await cookies()
//   const mode = await getMode()

//   const colorPrefCookie = (cookieStore.get('colorPref')?.value || 'light') as SystemMode

//   return (mode === 'system' ? colorPrefCookie : mode) || 'light'
// }

// export const getServerMode = async () => {
//   const mode = await getMode()
//   const systemMode = await getSystemMode()

//   return mode === 'system' ? systemMode : mode
// }

// export const getSkin = async () => {
//   const settingsCookie = await getSettingsFromCookie()

//   return settingsCookie.skin || 'default'
// }

export const isMobileDevice = async (): Promise<boolean> => {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || ''

  // 모바일 기기 감지를 위한 정규식 패턴 (React Native WebView 포함)
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|ReactNative|WebView/i
  
  return mobileRegex.test(userAgent)
}
