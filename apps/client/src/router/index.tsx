import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layout/app";

const Home = lazy(() => import("@/pages/Home"));
const Wiki = lazy(() => import("@/modules/wiki/pages"));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/wiki',
        element: <Wiki />
      }
    ]
  }
]) 