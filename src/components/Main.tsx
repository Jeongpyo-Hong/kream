import React from "react";
import { MainCategories } from "./MainCategories";
import { Carousel } from "./Carousel";
import { SubCategories } from "./SubCategories";
import { ShoesList } from "./ShoesList";

export const Main = () => {
  return (
    <div>
      <MainCategories />
      <Carousel />
      <SubCategories />
      <ShoesList />
    </div>
  );
};
