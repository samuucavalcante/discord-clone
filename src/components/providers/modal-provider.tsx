'use client'

import { IsMounted } from '@/app/hooks/IsMounted'
import { CreateServerModal } from '@/components/modals/create-server-modal'

export const ModalProvider = () => {
  const isMounted = IsMounted()

  if (!isMounted) return null

  return <CreateServerModal />
}
