import React from "react";
import { styled } from "styled-components";

export const SubCategories = () => {
  const categories = [
    "크림 드로우",
    "셀럽픽",
    "남성 추천",
    "여성 추천",
    "10% 적립 브랜드",
    "정가 아래",
    "블랙 럭셔리",
    "인기 가을백",
    "9월 혜택모음",
    "선착순 포인트!",
  ];

  return (
    <>
      <StContainer>
        {categories.map((item, idx) => (
          <StItem key={idx}>
            <StItemBox></StItemBox>
            <StItemTitle>{item}</StItemTitle>
          </StItem>
        ))}
      </StContainer>
      <StHr />
    </>
  );
};

const StContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 40px;
  margin-bottom: 80px;
`;

const StItem = styled.li`
  width: calc(20% - 10px);
  height: 100px;
`;

const StItemBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #eee;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const StItemTitle = styled.p`
  text-align: center;
  font-size: 14px;
`;

const StHr = styled.hr`
  border: 1px solid #eee;
  margin-bottom: 40px;
`;
