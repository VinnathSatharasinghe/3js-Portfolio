import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Mainhome from "./mainhome";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainhome />,
  },
  {
    path: "/hero",
    element: <Hero />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/who",
    element: <Who />,
  },
  {
    path: "/works",
    element: <Works />,
  },

]);

const RouterSetup = () => (
    <RouterProvider router={router} />
);

export default RouterSetup;