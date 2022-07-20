import { Header } from './Header'
import { Nav } from './Nav'

type LayoutProps = {
  children: JSX.Element
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Nav />
        <main>
          {children}
        </main>
      </div>
    </>
  )
}