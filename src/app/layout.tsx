import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google'
import { extractRouterConfig } from 'uploadthing/server'
import { ourFileRouter } from './api/uploadthing/core'
import { AppProvider } from './app-provider'
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
        <body className={cn(openSans.className, 'bg-white dark:bg-[#313338]')}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

          <AppProvider>{children}</AppProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
