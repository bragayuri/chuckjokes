import React from "react";
import Container from "src/components/Container";
import i18n from "src/lib/i18n";

const Home = (): JSX.Element => {
  return (
    <Container>
      <div className="bg-black h-screen w-full flex justify-center items-center">
        <div className="font-bold text-white cursor-pointer hover:text-yellow-300">
          {i18n.t("main.welcomeBack")} Chuck Norris!
        </div>
      </div>
    </Container>
  );
};

export default Home;
