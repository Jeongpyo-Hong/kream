import React, { useState } from "react";
import { styled } from "styled-components";

interface CategoriesProps {
  categories: string[];
}

export const Categories = ({ categories }: CategoriesProps) => {
  const [active, setActive] = useState(false);
  const activeHandler = (
    cate: string,
    e: React.MouseEvent<HTMLSpanElement>
  ) => {
    if (cate === e.currentTarget.innerHTML) {
      setActive(!active);
    }
  };

  return (
    <div>
      {categories.map((cate, idx) => (
        <StCate
          key={idx}
          onClick={(e) => activeHandler(cate, e)}
          active={active}
        >
          {cate}
        </StCate>
      ))}
    </div>
  );
};

const StCate = styled.span<{ active: boolean }>`
  font-weight: ${(props) => props.active && "800"};
`;
