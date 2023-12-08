import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team Chat Application',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ cn(openSans.className, "bg-white dark:bg-[#313338]")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey='discord'
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
