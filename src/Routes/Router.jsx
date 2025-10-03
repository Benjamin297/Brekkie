import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../Components";
import Homepage from "../Pages/Homepage/Homepage";
import EnglishBreakfast from "../Pages/EnglishBreakFast/EnglishBreakfast";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import AfricanBeeakFast from "../Pages/AfricanBreakFast/AfricanBreakFast";
import CuratedCombo from "../Pages/CuratedCombo/CuratedCombo";
import Drinks from "../Pages/Drinks/Drinks";
import FruitsAndVeggis from "../Pages/FruitsAndVeggisBreakFast/FruitsAndVeggis";
import Pastries from "../Pages/Pastries/Pastries";
import Landing from "../Pages/Landing/Landing";

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
        path: "/homepage/english",
        element: <EnglishBreakfast />,
      },
      {
        path: "/homepage/african",
        element: <AfricanBeeakFast />,
      },
      {
        path: "/homepage/curated",
        element: <CuratedCombo />,
      },
      {
        path: "/homepage/drinks",
        element: <Drinks />,
      },
      {
        path: "/homepage/fruitsAndVeggies",
        element: <FruitsAndVeggis />,
      },

      {
        path: "/homepage/pastries",
        element: <Pastries />,
      },
    ],
  },

  {
    path: "/",
    element: <Landing />,
  },
  // {
  //   path: "/",
  //   element: <Signin />,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
]);
