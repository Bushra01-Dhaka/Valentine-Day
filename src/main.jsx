import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import HeroBanner from "./Components/HeroBanner";
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init();

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
      {
        path: "/",
        Component: Home,
      },
      {
        path:"/msg",
        Component:HeroBanner,
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="md:max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
);
