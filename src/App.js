import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/pages/about/AboutPage";
import PortfolioPage from "./components/pages/portfolio/PortfolioPage";
import ContactPage from "./components/pages/contact/ContactPage";
import MainLayout from "./components/mainLayout/MainLayout";
import HomePage from "./components/pages/home/HomePage";
import Error404Page from "./components/pages/Error404/Error404Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
