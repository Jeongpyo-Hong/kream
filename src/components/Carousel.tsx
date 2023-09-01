import React, { useState } from "react";
import { styled } from "styled-components";

export const Carousel = () => {
  const imgArr = [0, 1, 2];
  const [translateX, setTranslateX] = useState(0);

  const translateHandler = () => {
    if (translateX < 2) {
      setTranslateX(translateX + 1);
    } else {
      setTranslateX(0);
    }
  };

  return (
    <StContainer>
      <StBtn style={{ fontSize: "50px" }} onClick={translateHandler}>
        ➡️
      </StBtn>
      <StCarousel>
        {imgArr.map((img, idx) => (
          <StItem $translateX={translateX} key={idx}>
            <img src={`assets/carousel/${img}.jpg`} />
          </StItem>
        ))}
      </StCarousel>
    </StContainer>
  );
};

const StContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;

const StBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
`;

const StCarousel = styled.ul`
  display: flex;
`;

const StItem = styled.li<{ $translateX: number }>`
  transform: translateX(-${(props) => props.$translateX * 100}%);
  background-color: black;

  img {
    width: 100vw;
    height: 300px;
    object-fit: contain;
  }
`;
