import { MouseEventHandler } from 'react';
import { cn } from 'utils/classes';
import classes from './IconButton.module.scss';

type IconButtonProps = {
  children: JSX.Element;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const IconButton: React.FC<IconButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={cn(classes.iconButton, className)} onClick={onClick} >
      {children}
    </button>
  )
}