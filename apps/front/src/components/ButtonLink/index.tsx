import { cn } from 'utils/classes';
import classes from './ButtonLink.module.scss';

type ButtonLinkProps = {
  children: string;
  href: string;
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ children, href, className }) => {
  return (
    <a href={href} className={cn(classes.btnLink, className)} >{children}</a>
  )
}