import { cn } from "@/utils/classnames";
import type { PropsWithChildren } from "react"

type IconButtonProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>

export default function IconButton({ children, onClick, className }: IconButtonProps) {
  return (
    <button onClick={onClick} className={cn('btn-icon', className)} >
      {children}
    </button>
  )
}