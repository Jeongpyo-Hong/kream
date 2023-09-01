import React from "react";
import { styled } from "styled-components";

export const Footer = () => {
  return (
    <StFooterContainer>
      <StCateContainer>
        <StCateInnerContainer>
          <StCateWrapper>
            <StCateTitle>이용안내</StCateTitle>
            <div>검수기준</div>
            <div>이용정책</div>
            <div>패널티정책</div>
            <div>커뮤니티 가이드라인</div>
          </StCateWrapper>
          <StCateWrapper>
            <StCateTitle>고객지원</StCateTitle>
            <div>공지사항</div>
            <div>서비스 소개</div>
            <div>스토어 안내</div>
            <div>판매자 방문접수</div>
          </StCateWrapper>
        </StCateInnerContainer>
        <StInfo>
          <div
            style={{ fontWeight: "800", fontSize: "16px", marginBottom: "4px" }}
          >
            고객센터 1588-7813
          </div>
          <div style={{ color: "gray" }}>운영시간 평일 11:00 - 18:00</div>
          <div style={{ color: "gray" }}>점심시간 평일 13:00 - 14:00</div>
          <div style={{ color: "gray" }}>
            1:1 문의하기는 앱에서만 가능합니다.
          </div>
          <StQna>자주 묻는 질문</StQna>
        </StInfo>
      </StCateContainer>
    </StFooterContainer>
  );
};

const StFooterContainer = styled.div`
  border-bottom: 1px solid #eee;
  padding: 50px 0;
`;

const StCateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StCateInnerContainer = styled.div`
  display: flex;
  column-gap: 120px;
`;

const StCateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
  font-size: 14px;
  color: gray;
`;

const StInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
`;

const StCateTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  padding-bottom: 4px;
  color: black;
`;

const StQna = styled.div`
  background-color: black;
  color: white;
  width: fit-content;
  padding: 10px;
  font-weight: 600;
  margin-top: 8px;
`;
