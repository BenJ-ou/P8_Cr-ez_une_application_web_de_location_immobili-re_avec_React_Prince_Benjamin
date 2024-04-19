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
import AboutPage from "./pages/about-page";
import ErrorPage from "./pages/error-page";
import KasaFooter from "./component/footer";
import KasaNavbar from "./component/navbar";
import LodgingPage from "./pages/lodging-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <KasaHome />,
    errorElement: <ErrorPage />,
    footer: <KasaFooter />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
    footer: <KasaFooter />,
  },
  {
    path: "/errorPage",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
    footer: <KasaFooter />,
  },
  {
    path: "/lodging/:id", // Utilisez un paramètre dynamique pour l'ID du logement
    element: <LodgingPage />,
    errorElement: <ErrorPage />,
    footer: <KasaFooter />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KasaNavbar />
    <RouterProvider router={router} />
    <KasaFooter />
  </React.StrictMode>
);
