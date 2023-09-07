import React, { useState } from "react";
import { getShoesList } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";
import { Horizontal } from "./Horizontal";

type ListWithOptionalNext = ListItem[] & [{ isEnd?: "y" }];
type ListItem = {
  brand: string;
  name: string;
  price: string;
  dcPrice: string;
  point: string;
  img: string;
};

export const ShoesList = () => {
  const [cnt, setCnt] = useState(1);
  const { data: list } = useQuery<ListWithOptionalNext>(
    ["shoesList", cnt],
    () => getShoesList(cnt)
  );
  let isEnd: string | undefined = "n";
  if (list) {
    isEnd = list[list.length - 1].isEnd;
  }

  return (
    <>
      <StTitle>Just Dropped</StTitle>
      <StSubTitle>발매 상품</StSubTitle>
      <StContainer>
        {list?.map(
          (item, idx) =>
            item.img && (
              <StItem key={idx}>
                <StImgBox>
                  <StImg src={item.img} alt="shoes" />
                </StImgBox>
                <StBrand>{item.brand}</StBrand>
                <p>{item.name}</p>
                <p>{item.price}원</p>
              </StItem>
            )
        )}
        {isEnd !== "y" && (
          <StMoreBtnBox>
            <StMoreBtn onClick={() => setCnt(cnt + 1)}>더보기</StMoreBtn>
          </StMoreBtnBox>
        )}
      </StContainer>
      <Horizontal />
    </>
  );
};

const StTitle = styled.p`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 8px;
`;

const StSubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #777;
  margin-bottom: 16px;
`;

const StContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  font-size: 13px;
`;

const StItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  width: calc(25% - 10px);
  margin-bottom: 30px;
`;

const StImgBox = styled.div`
  margin-bottom: 10px;
  width: 100%; /* 이미지 박스의 가로 폭을 100%로 설정 */
  padding-bottom: 100%; /* 이미지 박스의 높이를 100%로 설정 (가로 폭과 동일) */
  position: relative; /* 자식 요소를 절대 위치로 배치하기 위해 부모 요소를 상대적으로 설정 */
`;

const StImg = styled.img`
  border-radius: 10px;
  border: 1px solid #eee;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute; /* 절대 위치로 이미지를 배치 */
  top: 0;
  left: 0;
`;

const StBrand = styled.p`
  font-weight: 800;
`;

const StMoreBtnBox = styled.div`
  text-align: center;
  width: 100%;
`;

const StMoreBtn = styled.button`
  padding: 10px 30px;
  border-radius: 10px;
  border: 1px solid #e4e4e4;
  color: #777;
  cursor: pointer;
`;
