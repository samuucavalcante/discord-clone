'use client'

import { ActionTooltip } from '@/components/action-tooltip'
import { cn } from '@/lib/utils'
import { useParams, useRouter } from 'next/navigation'

type NavigationItemProps = {
  id: string
  imageUrl: string
  name: string
}
export function NavigationItem({ id, imageUrl, name }: NavigationItemProps) {
  const params = useParams()
  const router = useRouter()

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button onClick={() => null} className="group relative flex items-center">
        <div
          className={cn(
            'aboslute left-0 bg-primary rounded-r-full transition-all w-[4px]',
            params?.serverId !== id && 'group-hover:h-[20px]',
            params?.serverId === id ? 'h-[36px]' : 'h-[8px]',
          )}
        >
          server
        </div>
      </button>
    </ActionTooltip>
  )
}
