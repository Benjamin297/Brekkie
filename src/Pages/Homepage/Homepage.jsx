import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import Costomerfavorite from "./Costomerfavorite";
import Handpick from "./Handpick";
import African from "./African";
import MostOrder from "./MostOrder";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Costomerfavorite />
      <Handpick />
      <African />
      <MostOrder />
    </div>
  );
};

export default Homepage;
