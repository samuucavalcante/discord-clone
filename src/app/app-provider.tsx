import { ThemeProvider } from '@/components/theme-provider'
import type { ReactNode } from 'react'

type AppProviderProps = {
  children: ReactNode
}
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="discord"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
