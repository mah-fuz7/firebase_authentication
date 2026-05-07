// import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Rootlayout from "../layouts/Rootlayout";
import Sign_in from "../pages/Sign_in";
import Log_in from "../pages/Log_in";
import { createBrowserRouter } from "react-router";
import Test from "../pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Sign_in />,
      },
      {
        path: "/login",
        element: <Log_in />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);

export default router;