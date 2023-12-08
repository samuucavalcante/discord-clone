import { useEffect, useState } from 'react'

export const IsMounted = () => {
  const [mounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return mounted
}
