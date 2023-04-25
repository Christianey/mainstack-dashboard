import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Root from "./routes/root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/item1",
        element: <Dashboard />,
      },
      {
        path: "/item2",
        element: <Dashboard />,
      },
      {
        path: "/item3",
        element: <Dashboard />,
      },
      {
        path: "/item4",
        element: <Dashboard />,
      },
      {
        path: "/item5",
        element: <Dashboard />,
      },
      {
        path: "/item6",
        element: <Dashboard />,
      },
      {
        path: "/item7",
        element: <Dashboard />,
      },
      {
        path: "/item8",
        element: <Dashboard />,
      },
      {
        path: "/*",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
