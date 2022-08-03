import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from 'utils/classes';
import classes from './NavLink.module.scss';

type NavLinkProps = {
  children: JSX.Element | string;
  to: string;
  className?: string;
  activeClassName?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, className, to, activeClassName = '' }) => {
  const router = useRouter();

  return (
    <Link href={to}>
      <a className={cn(className, { [activeClassName]: router.pathname === to })} >{children}</a>
    </Link>
  )
}