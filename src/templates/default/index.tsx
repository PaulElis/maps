import React, { FC } from "react";
import { AppWrapper, AppContent } from "./styles";
import Hero from "../../components/hero";
import Header from "../../components/header";
import { useLocation } from "react-router-dom";

// PART 1 - Routing
// Section 4
// Implement the following logic: When a user is not on the homepage, hide the Hero component

const DefaultTemplate: FC = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <AppWrapper>
      <Header />
      {pathname === "/" && <Hero />}
      <AppContent>{children}</AppContent>
    </AppWrapper>
  );
};

export default DefaultTemplate;
