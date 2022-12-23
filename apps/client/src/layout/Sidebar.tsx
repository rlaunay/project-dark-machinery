import { useSession } from "@/modules/auth/context";
import { cn } from "@/utils/classnames";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean
}

function className({ isActive }: { isActive: boolean, isPending: boolean }): string {
  return cn("nav-link", { "active": isActive })
}


export default function Sidebar({ isOpen }: SidebarProps) {
  const { user } = useSession();

  return (
    <aside className={cn("sidebar", { "open": isOpen })}>
      <nav className="nav" >
        <ul>
          <li>
            <NavLink to="/" className={className} end>Home</NavLink>
          </li>
          {user && <li>
            <NavLink to="/profile" className={className}>Profil</NavLink>
          </li>}
          <li>
            <NavLink to="/wiki" className={className}>Wiki</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}