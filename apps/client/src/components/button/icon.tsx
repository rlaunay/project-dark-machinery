import type { PropsWithChildren } from "react"

type IconButtonProps = PropsWithChildren<{}>

export default function IconButton({ children }: IconButtonProps) {
  return (
    <button>
      {children}
    </button>
  )
}