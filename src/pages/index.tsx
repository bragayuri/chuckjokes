import React from "react";
import CategoriesComponent from "src/components/CategoriesComponent";
import Container from "src/components/Container";
import HomeBanner from "src/components/HomeBanner";

const Home = (): JSX.Element => {
  return (
    <Container>
      <HomeBanner />
      <CategoriesComponent />
    </Container>
  );
};

export default Home;
