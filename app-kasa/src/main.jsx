import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./css/navbar.css";
import "./css/footer.css";
import "./css/banner.css";
import KasaHome from "./pages/kasa-home";
import ErrorPage from "./pages/error-page";
import KasaFooter from "./component/footer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <KasaHome />,
    errorElement: <ErrorPage />,
    footer:<KasaFooter />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);