import React from "react";
import ReactDOM from "react-dom/client";
import App from "./route/App";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookUpload from "./route/BookUpload";
import Home from "./route/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      // {
      //   path: "/bookupload",
      //   element: <BookUpload />,
      // },
    ],
  },
  {
    path: "/bookupload",
    element: <BookUpload />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
