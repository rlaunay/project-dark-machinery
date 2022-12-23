import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { SessionProvider } from "./modules/auth/context";

function App() {
  return (
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  )
}

export default App
