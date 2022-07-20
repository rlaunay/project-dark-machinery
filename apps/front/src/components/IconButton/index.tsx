import { cn } from 'utils/classes';
import classes from './IconButton.module.scss';

type IconButtonProps = {
  children: JSX.Element;
  className?: string; 
}

export const IconButton: React.FC<IconButtonProps> = ({ children, className }) => {
  return (
    <button className={cn(classes.iconButton, className)} >
      {children}
    </button>
  )
}