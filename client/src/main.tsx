import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Comparer from "./pages/Comparer/Comparer";
import Compte from "./pages/Compte/Compte";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Log from "./pages/Log/Log";

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */
import InfosEnviro from "./pages/Info/InfosEnviro";
import Options from "./pages/Options/Options";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Log",
        element: <Log />,
      },
      {
        path: "/comparer",
        element: <Comparer />,
      },
      {
        path: "/compte",
        element: <Compte />,
      },
      {
        path: "/info",
        element: <InfosEnviro />,
      },
      {
        path: "*",
        element: <div>Page non trouvée</div>,
      },
      {
        path: "/options",
        element: <Options />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
