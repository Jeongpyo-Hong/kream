import React, { useState } from "react";
import { styled } from "styled-components";

export const Carousel = () => {
  const imgArr = [0, 1, 2];
  const [translateX, setTranslateX] = useState(0);
  const [selectCircle, setSelectCircle] = useState(0);

  const translateHandler = (direction: string) => {
    if (direction === "right") {
      if (translateX < imgArr.length - 1) {
        setTranslateX(translateX + 1);
        setSelectCircle(translateX + 1);
      } else {
        setTranslateX(0);
        setSelectCircle(0);
      }
    } else if (direction === "left") {
      if (translateX > 0) {
        setTranslateX(translateX - 1);
        setSelectCircle(translateX - 1);
      } else {
        setTranslateX(imgArr.length - 1);
        setSelectCircle(imgArr.length - 1);
      }
    }
  };

  const selctCircleHandler = (select: number) => {
    setTranslateX(select);
    setSelectCircle(select);
  };

  return (
    <StContainer>
      <StCarousel>
        {imgArr.map((img, idx) => (
          <StItem
            $translateX={translateX}
            key={idx}
            opacity={img === translateX}
          >
            <StImg src={`assets/carousel/${img}.jpg`} />
          </StItem>
        ))}
      </StCarousel>
      <StBtnLeft onClick={() => translateHandler("left")}></StBtnLeft>
      <StBtnRight onClick={() => translateHandler("right")}></StBtnRight>
      <StCircleWrap>
        {imgArr.map((img, idx) => (
          <StCircle
            onClick={() => selctCircleHandler(img)}
            isSelect={img === selectCircle}
            key={idx}
          >
            ⚫
          </StCircle>
        ))}
      </StCircleWrap>
    </StContainer>
  );
};

const StContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
`;

const StBtnRight = styled.button`
  position: absolute;
  right: 70px;
  top: 45%;
  content: "";
  width: 40px; /* 사이즈 */
  height: 40px; /* 사이즈 */
  border-top: 5px solid #eee; /* 선 두께 */
  border-right: 5px solid #eee; /* 선 두께 */
  transform: rotate(45deg); /* 각도 */
  cursor: pointer;
`;

const StBtnLeft = styled(StBtnRight)`
  left: 70px;
  transform: rotate(225deg); /* 각도 */
`;

const StCarousel = styled.ul`
  display: flex;
  border-bottom: 1px solid #eee;
`;

const StItem = styled.li<{ $translateX: number; opacity: boolean }>`
  transform: translateX(-${(props) => props.$translateX * 100}%);
  opacity: ${(props) => (props.opacity ? "1" : "0.6")};
  transition: opacity 0.6s ease-in-out;
`;

const StImg = styled.img`
  width: 100vw;
  height: 480px;
  object-fit: contain;
`;

const StCircleWrap = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  display: flex;
  column-gap: 6px;
`;

const StCircle = styled.span<{ isSelect: boolean }>`
  font-size: 10px;
  opacity: ${(props) => (props.isSelect ? "1" : "0.3")};
  cursor: pointer;
`;
