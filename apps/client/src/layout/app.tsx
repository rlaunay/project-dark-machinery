import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <div>
        <Link to="/">Home</Link>
        <Link to="/wiki">Wiki</Link>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  )
}