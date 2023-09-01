import React, { useState } from "react";
import { styled } from "styled-components";

interface CategoriesProps {
  categories: string[];
}

export const Categories = ({ categories }: CategoriesProps) => {
  const [activeCate, setActiveCate] = useState(categories[0]);
  const activeHandler = (cate: string) => {
    setActiveCate(cate);
  };

  return (
    <StCategoriesContainer>
      {categories.map((cate, idx) => (
        <StCate
          key={idx}
          onClick={() => activeHandler(cate)}
          $active={activeCate === cate}
        >
          {cate}
        </StCate>
      ))}
      <Sthr />
    </StCategoriesContainer>
  );
};

const StCategoriesContainer = styled.div`
  font-size: 16px;
`;

const StCate = styled.span<{ $active: boolean }>`
  display: inline-block;
  padding-bottom: 10px;
  font-weight: ${(props) => props.$active && "800"};
  border-bottom: ${(props) => props.$active && "3px solid black"};
  margin-right: 20px;
  cursor: pointer;
`;

const Sthr = styled.hr`
  border: 1px solid #eee;
  width: 100vw;
  margin: 0 0 0 calc(-50vw + 50%);
`;
