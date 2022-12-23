import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layout/app";
import ErrorPage from "@/pages/ErrorPage";
import Callback from "@/modules/auth/pages/Callback";

const Home = lazy(() => import("@/pages/Home"));
const Profile = lazy(() => import("@/modules/auth/pages/Profile"));
const Wiki = lazy(() => import("@/modules/wiki/pages"));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/wiki',
        element: <Wiki />
      },
      {
        path: '/discord/callback',
        element: <Callback />
      }
    ]
  }
])