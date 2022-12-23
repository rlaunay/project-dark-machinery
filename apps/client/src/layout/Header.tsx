import { MdMenu, MdMenuOpen, MdOutlineLogin, MdOutlineLogout } from 'react-icons/md'
import IconButton from '@/components/button/icon'
import { useCallback } from 'react';
import http from '@/libs/http';
import { useSession } from '@/modules/auth/context';

type HeaderProps = {
  onToggleSidebar: () => void;
  isNavOpen: boolean;
}

export default function Header({ onToggleSidebar, isNavOpen }: HeaderProps) {
  const { user } = useSession();

  const loginRedirect = useCallback(async () => {
    const { url } = await http.get<{ url: string }>('/discord/redirect')
    window.location.href = url;
  }, [])

  return (
    <header className="header" >
      <IconButton onClick={onToggleSidebar} >
        {isNavOpen ? <MdMenuOpen /> : <MdMenu />}
      </IconButton>
      <img src="/logo.png" alt="Logo ppojet dark machinery" height={40} width={40} />
      <h2>Project Dark Machinery</h2>
      <IconButton className="ms-auto" >
        {user ? <MdOutlineLogout /> : <MdOutlineLogin onClick={loginRedirect} />}
      </IconButton>
    </header>
  )
};