import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="md:max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />,
    </div>
  </StrictMode>,
);
