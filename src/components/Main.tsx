import React from "react";
import { Categories } from "./Categories";
import { Carousel } from "./Carousel";

export const Main = () => {
  return (
    <div>
      <Categories
        categories={["추천", "랭킹", "럭셔리", "남성", "여성", "발견"]}
      />
      <Carousel />
    </div>
  );
};
