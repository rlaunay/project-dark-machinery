import Image from 'next/image';
import { IconButton } from 'components/IconButton';
import classes from './Header.module.scss';

type HeaderProps = {
  onToggleNav: () => void; 
}

export const Header: React.FC<HeaderProps> = ({ onToggleNav }) => {
  return (
    <header className={classes.header} >
      <IconButton className="me" onClick={onToggleNav} >
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z" fill="#E6E1E5"/>
        </svg>
      </IconButton>
      <Image src="/logo.png" alt="Logo Project Dark Machinery" height="42" width="42" />
      <h2>Project Dark Machinery</h2>
      <button className={classes.last} >Se connecter</button>
    </header>
  )
}