import { NavigationAction } from '@/components/navigation/navigation-action'
import { Separator } from '@/components/ui/separator'
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'

export async function NavigationSidebar() {
  const profile = await currentProfile()

  if (!profile) redirect('/')

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  })

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1e1f22]">
      <NavigationAction />
      <Separator />
    </div>
  )
}
