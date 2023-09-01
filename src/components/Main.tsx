import React from "react";
import { Categories } from "./Categories";

export const Main = () => {
  return (
    <div>
      <Categories
        categories={["추천", "랭킹", "럭셔리", "남성", "여성", "발견"]}
      />
    </div>
  );
};
