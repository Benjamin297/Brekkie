import React from "react";
import { Element } from "./Routes/Router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div>
      <RouterProvider router={Element} />
    </div>
  );
};

export default App;
