import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./kasa-home.css";
import "./kasa-footer.css";
import Root from "./routes/kasa-home";
import ErrorPage from "./routes/error-page";
import KasaFooter from "./routes/kasa-footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    footer:<KasaFooter />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);