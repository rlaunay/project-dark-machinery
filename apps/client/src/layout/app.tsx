import Spinner from "@/components/Loader/Spinner";
import { breakpoints } from "@/data/contant";
import useMediaQuery from "@/hooks/media-query";
import { useSession } from "@/modules/auth/context";
import { cn } from "@/utils/classnames";
import { Suspense, useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  const isMd = useMediaQuery(`(min-width: ${breakpoints.md}px)`);
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMd);

  const { loading } = useSession();

  const toogleSidebar = useCallback(() => setIsSidebarOpen((s) => !s), []);

  useEffect(() => {
    if (isMd) {
      setIsSidebarOpen(true)
    } else {
      setIsSidebarOpen(false)
    }
  }, [isMd]);

  if (loading) return <div className="full-screen center">
    <Spinner />
  </div>;

  return (
    <>
      <Header onToggleSidebar={toogleSidebar} isNavOpen={isSidebarOpen} />
      <div className="layout">
        <Sidebar isOpen={isSidebarOpen} />
        {!isMd && <div className={cn("backdrop-sidebar", { "open": isSidebarOpen })} onClick={toogleSidebar} />}
        <main className="main">
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  )
}