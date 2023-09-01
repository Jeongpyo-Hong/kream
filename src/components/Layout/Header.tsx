import React from "react";
import logo from "../../assets/logo.png";
import { styled } from "styled-components";
import { MdSearch } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <StNavContainer>
        <a href="#">고객센터</a>
        <a href="#">마이페이지</a>
        <a href="#">관심상품</a>
        <a href="#">알림</a>
        <a href="#">로그인</a>
      </StNavContainer>

      <StHomeCateContainer>
        <StLogo href="/">
          <img src={logo} alt="logo" width="100%" height="100%" />
        </StLogo>
        <StCateContainer>
          <a href="#" style={{ fontWeight: "800" }}>
            HOME
          </a>
          <a href="#">STYLE</a>
          <a href="#">SHOP</a>
          <span>
            <MdSearch />
          </span>
        </StCateContainer>
      </StHomeCateContainer>
    </>
  );
};

const StNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 24px;
  color: #5e5e5e;
  padding-bottom: 16px;
`;

const StHomeCateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;

const StLogo = styled.a`
  width: 120px;
  height: 34px;
`;

const StCateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: black;
  font-size: 18px;
  column-gap: 32px;
`;
