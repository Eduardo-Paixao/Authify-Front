import Header from "@/components/Header";
import React, { ReactNode } from "react";

// import { Container } from './styles';

const PrivateLayout = ({children}: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default PrivateLayout;
