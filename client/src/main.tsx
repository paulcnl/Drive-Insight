import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Comparer from "./pages/Comparer/Comparer";
import Compte from "./pages/Compte/Compte";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Log from "./pages/Log/Log";
import Confirm from "./pages/confirmVehicle/confirmVehicle";
import Habits from "./pages/habits/Habits";

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */
import InfosEnviro from "./pages/Info/InfosEnviro";

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
        path: "/confirm",
        element: <Confirm />,
      },
      {
        path: "/habits",
        element: <Habits />,
      },
      {
        path: "*",
        element: <div>Page non trouvée</div>,
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
