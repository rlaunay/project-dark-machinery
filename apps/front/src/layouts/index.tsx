import { Header } from './Header';
import { Nav } from './Nav';
import { useEffect, useState } from 'react';

import classes from './Layout.module.scss';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { cn } from 'utils/classes';

type LayoutProps = {
  children: JSX.Element
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMatch = useMediaQuery('(min-width: 992px)')
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavHandler = () => {
    setIsNavOpen((old) => !old)
  }

  useEffect(() => {
    setIsNavOpen(isMatch)
  }, [isMatch])

  return (
    <div className={classes.layout}>
      <Header onToggleNav={toggleNavHandler} />
      <div className={classes.body} >
        <Nav isOpen={isNavOpen} />
        {!isMatch && <div className={cn(classes.backdrop, { [classes.open]: isNavOpen })} onClick={toggleNavHandler} />}
        <div className={classes.container}>
          <main className={classes.main} >
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}