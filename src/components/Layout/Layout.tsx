import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
