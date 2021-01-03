import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import React from "react";
import "./Slides.css";
import "pure-react-carousel/dist/react-carousel.es.css";

const Slides = () => {
  return (
    <div className="slides">
      <CarouselProvider
        className="carousel"
        naturalSlideWidth={20}
        naturalSlideHeight={5}
        totalSlides={7}
        isPlaying={true}
        interval={900}
      >
        <Slider>
          <Slide index={0}>
            <img
              src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CoolieNo1WatchParty/d16ac8f3-9085-46b9-90dc-f57701d74b53._UR3000,600_SX1500_FMwebp_.jpg"
              alt=""
            />
          </Slide>
          <Slide index={1}>
            <img
              src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_YearEnder2020SuperheroV2/5cf56731-63ad-403e-bec2-d6e22869d112._UR3000,600_SX1500_FMwebp_.jpg"
              alt=""
            />
          </Slide>
          <Slide index={2}>
            <img
              src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_YearlyDepartedS1/ccfbbfc6-0ca0-458b-b1fe-0847c8e9adf3._UR3000,600_SX1500_FMwebp_.jpg"
              alt=""
            />
          </Slide>
          <Slide index={3}>
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TheForgottenArmyLaunchV3/48fc85a5-3e68-4869-ac09-4cac07931316._UR3000,600_SX1500_FMwebp_.jpg"
              alt=""
            />
          </Slide>
          <Slide index={4}>
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_BrothersDay/ec172b66-e53f-42f2-ada1-fd5a3bc25ff8._UR3000,600_SX1500_FMwebp_.jpg"
              alt=""
            />
          </Slide>
          <Slide index={5}>
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_newton_v1/8e296fc7-7946-40ea-bc04-a4d80990e82e._UR3000,600_SX1500_FMwebp_.jpg"
              alt=""
            />
          </Slide>
          <Slide index={6}>
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_HostelDazeLaunch/5c40c4f6-11f2-48ad-8fec-edc7c39df80a._UR3000,600_SX1500_FMwebp_.jpg"
              alt=""
            />
          </Slide>
        </Slider>
        {/* <div className="btnss">
          <ButtonBack className="back">Back</ButtonBack>
          <ButtonNext className="next">Next</ButtonNext>
        </div> */}
      </CarouselProvider>
    </div>
  );
};

export default Slides;
