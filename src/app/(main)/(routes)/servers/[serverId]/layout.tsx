import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { redirectToSignIn } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'

type ServerIdParams = {
  serverId: string
}

type ServerIdLayoutProps = {
  children: ReactNode
  params: ServerIdParams
}
export default async function ServerIdLayout({
  children,
  params,
}: ServerIdLayoutProps) {
  const profile = await currentProfile()

  if (!profile) return redirectToSignIn()

  const server = db.server.findUnique({
    where: {
      id: params.serverId,
      members: { some: { profileId: profile.id } },
    },
  })

  if (!server) return redirect('/')

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <main className="h-full md:pl-60">{children}</main>
      </div>
    </div>
  )
}
