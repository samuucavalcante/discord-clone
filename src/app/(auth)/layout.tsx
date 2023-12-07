import { ReactNode } from "react"

type AuthLayoutProps = {
  children: ReactNode
}
export default function AuthLayout ({children}: AuthLayoutProps) {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  )
}