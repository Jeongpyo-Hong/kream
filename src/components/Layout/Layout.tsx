import React, { useRef, useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { styled } from "styled-components";
import { MdArrowCircleUp } from "react-icons/md";

export const Layout = (props: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<any | null>(null);
  console.log("first:", scrollRef);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scrollYHandler = () => {
      const scrollY = window.scrollY;
      scrollY > 50 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", scrollYHandler);

    return () => {
      window.removeEventListener("scroll", scrollYHandler);
    };
  }, []);

  return (
    <StContainer ref={scrollRef}>
      {isVisible && (
        <StTopBtn onClick={scrollToTop}>
          <MdArrowCircleUp />
        </StTopBtn>
      )}

      <Header />
      <main>{props.children}</main>
      <Footer />
    </StContainer>
  );
};

const StContainer = styled.div`
  position: relative;
`;

const StTopBtn = styled.button`
  position: fixed;
  right: 20px;
  bottom: 10px;
  font-size: 50px;
  color: #b3b3b3;
  cursor: pointer;
`;
