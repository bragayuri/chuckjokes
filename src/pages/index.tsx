import React from "react";
import CategoriesComponent from "src/components/CategoriesComponent";
import Container from "src/components/Container";
import HomeBanner from "src/components/HomeBanner";
import LandingBanner from "src/components/LandingBanner";

const Home = (): JSX.Element => {
  return (
    <Container>
      <LandingBanner />
      <HomeBanner />
      <CategoriesComponent />
    </Container>
  );
};

export default Home;
