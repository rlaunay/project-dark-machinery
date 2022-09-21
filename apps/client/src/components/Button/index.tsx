import { cn } from 'utils/classes';
import classes from './Button.module.scss';

type ButtonProps = {
  children: JSX.Element | string;
  className?: string;
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({ children, className, type = 'button' }) => {
  return (
    <button className={cn(classes.button, className)} type={type} >{children}</button>
  )
}