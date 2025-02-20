import { createBrowserRouter, Navigate  } from "react-router";
import Home from '@/pages/home'
import About from '@/pages/about'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

export default router;