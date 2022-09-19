import { NavLink } from 'components/NavLink';
import { cn } from 'utils/classes';
import classes from './Nav.module.scss';

type NavProps = {
  isOpen: boolean;
}

const NAV_LINKS = [
  { to: "/", children: 'Accueil' },
  { to: "/profil", children: 'Profil' },
  { to: "/fiches", children: 'Fiches' },
  { to: "/wiki", children: 'Wiki' },
  { to: "/admin", children: 'Admin' },
]

export const Nav: React.FC<NavProps> = ({ isOpen }) => {
  return (
    <nav className={cn(classes.nav, { [classes.open]: isOpen })} >
      <ul className={classes.list}>
        {NAV_LINKS.map((link) => {
          return (
            <li key={link.to} className={classes.item} >
              <NavLink to={link.to} activeClassName={classes.active} >
                {link.children}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}