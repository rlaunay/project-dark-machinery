import { cn } from "@/utils/classnames";
import { Link } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean
}


export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={cn("sidebar", { "open": isOpen })}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/wiki">Wiki</Link>
      </nav>
    </aside>
  )
}