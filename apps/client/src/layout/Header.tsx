import { MdMenu, MdMenuOpen, MdOutlineLogin } from 'react-icons/md'
import IconButton from '@/components/button/icon'

type HeaderProps = {
  onToggleSidebar: () => void;
  isNavOpen: boolean;
}

export default function Header({ onToggleSidebar, isNavOpen }: HeaderProps) {
  return (
    <header className="header" >
      <IconButton onClick={onToggleSidebar} >
        {isNavOpen ? <MdMenuOpen /> : <MdMenu />}
      </IconButton>
      <img src="/logo.png" alt="Logo ppojet dark machinery" height={40} width={40} />
      <h2>Project Dark Machinery</h2>
      <IconButton className="ms-auto" >
        <MdOutlineLogin />
      </IconButton>
    </header>
  )
};