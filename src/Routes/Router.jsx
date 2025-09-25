import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../Components";
import Homepage from "../Pages/Homepage/Homepage";
import EnglishBreakfast from "../Pages/EnglishBreakFast/EnglishBreakfast";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import AfricanBeeakFast from "../Pages/AfricanBreakFast/AfricanBreakFast";
import CuratedCombo from "../Pages/CuratedCombo/CuratedCombo";
import Drinks from "../Pages/Drinks/Drinks";
import HeathyBreakFast from "../Pages/HealthyBreakFast/HeathyBreakFast";

export const Element = createBrowserRouter([
  {
    path: "/homepage",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "english",
        element: <EnglishBreakfast />,
      },
      {
        path: "African",
        element: <AfricanBeeakFast />,
      },
      {
        path: "Curated",
        element: <CuratedCombo />,
      },
      {
        path: "Drinks",
        element: <Drinks />,
      },
      {
        path: "Heathy",
        element: <HeathyBreakFast />,
      },
    ],
  },

  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
