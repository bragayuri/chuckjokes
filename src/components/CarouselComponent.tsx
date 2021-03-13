import Carousel from "nuka-carousel";
import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsCircle, BsCircleFill } from "react-icons/bs";
import { useAppState } from "src/lib/context";

import SlideFirst from "../components/slides/SlideFirst";

const CarouselComponent = (): JSX.Element => {
  const [isActive, setIsActive] = useState(true);
  const { getRandomJoke } = useAppState();

  return (
    <Carousel
      className="transparent cursor-default focus:outline-none"
      slideIndex={0}
      renderBottomCenterControls={() => (
        <div className="flex space-x-2 mb-2">
          {!isActive ? (
            <BsCircle className="ps-0.5 pe-0.5" size={20} color="#979797" />
          ) : (
            <BsCircleFill className="ps-0.5 pe-0.5" size={20} color="#467038" />
          )}
          {!isActive ? (
            <BsCircleFill className="ps-0.5 pe-0.5" size={20} color="#467038" />
          ) : (
            <BsCircle className="ps-0.5 pe-0.5" size={20} color="#979797" />
          )}
        </div>
      )}
      renderCenterLeftControls={({ goToSlide }) => (
        <BsChevronLeft
          size={80}
          color="#979797"
          className="md:ml-2 relative bottom-0 cursor-pointer"
          onClick={() => {
            goToSlide(0);
            setIsActive(true);
            getRandomJoke();
          }}
        />
      )}
      renderCenterRightControls={({ goToSlide }) => (
        <BsChevronRight
          size={80}
          color="#979797"
          className="md:ml-2 relative bottom-0 cursor-pointer"
          onClick={() => {
            goToSlide(1);
            setIsActive(false);
            getRandomJoke();
          }}
        />
      )}>
      <div className="">
        {/* WEB */}
        <SlideFirst />
      </div>
      <div className="">
        <SlideFirst />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
