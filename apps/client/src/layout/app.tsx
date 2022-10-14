import { breakpoints } from "@/data/contant";
import useMediaQuery from "@/hooks/media-query";
import { cn } from "@/utils/classnames";
import { Suspense, useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  const isMd = useMediaQuery(`(min-width: ${breakpoints.md}px)`)
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMd)

  const toogleSidebar = useCallback(() => setIsSidebarOpen((s) => !s), [])

  useEffect(() => {
    if (isMd) {
      setIsSidebarOpen(true)
    } else {
      setIsSidebarOpen(false)
    }
  }, [isMd])

  return (
    <>
      <Header onToggleSidebar={toogleSidebar} isNavOpen={isSidebarOpen} />
      <div className="layout">
        <Sidebar isOpen={isSidebarOpen} />
        {!isMd && <div className={cn("backdrop-sidebar", { "open": isSidebarOpen })} onClick={toogleSidebar} />}
        <main className="main">
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  )
}