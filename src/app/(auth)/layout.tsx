import { ReactNode } from "react"

type AuthLayoutProps = {
  children: ReactNode
}
export default function AuthLayout ({children}: AuthLayoutProps) {
  return (
    <div className="bg-red-500 h-full">{children}</div>
  )
}