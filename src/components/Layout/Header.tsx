import React, { useState } from "react";
import { styled } from "styled-components";
import { MdSearch } from "react-icons/md";

export const Header = () => {
  const categories = [
    { name: "HOME", href: "/" },
    { name: "STYLE", href: "#" },
    { name: "SHOP", href: "#" },
  ];

  const [activeCate, setActiveCate] = useState("HOME");
  const activeHandler = (cateName: string) => {
    setActiveCate(cateName);
  };

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
          <img src="assets/logo.png" alt="logo" width="100%" height="100%" />
        </StLogo>
        <StCateContainer>
          {categories.map((cate, idx) => (
            <StCate
              href={cate.href}
              key={idx}
              onClick={() => activeHandler(cate.name)}
              $active={activeCate === cate.name}
            >
              {cate.name}
            </StCate>
          ))}

          <StSearchBtn>
            <MdSearch />
          </StSearchBtn>
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
  padding: 10px 0 20px 0;
  a {
    color: #555555;
  }
`;

const StHomeCateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;

const StLogo = styled.a`
  width: 110px;
  height: 18px;
`;

const StCateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: black;
  font-size: 18px;
  column-gap: 32px;
`;

const StCate = styled.a<{ $active: boolean }>`
  font-weight: ${(props) => props.$active && "800"};
`;

const StSearchBtn = styled.button`
  font-size: 24px;
`;
