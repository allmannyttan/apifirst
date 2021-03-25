import React from "react";
import { Container, Row } from "react-bootstrap";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";

import appImage1 from "../assets/images/app-shots/app-shot-n-1-1.png";
import appImage2 from "../assets/images/app-shots/app-shot-n-1-2.png";
import appImage3 from "../assets/images/app-shots/app-shot-n-1-3.png";
import appImage4 from "../assets/images/app-shots/app-shot-n-1-4.png";
import appImage5 from "../assets/images/app-shots/app-shot-n-1-5.png";

const AppScreen = (props) => {
  const params = {
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
    slidesPerView: 5,
    rebuildOnUpdate: true,
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      767: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
      991: {
        slidesPerGroup: 2,
        slidesPerView: 3,
      },
      1499: {
        slidesPerGroup: 5,
        slidesPerView: 5,
      },
    },
  };
  return (
    <section className="app-shot-one" id="screens">
      <Container fluid>
        <BlockTitle
          textAlign="center"
          paraText="Application Screenshots"
          titleText={`Checkout Our Application \n Interface Look`}
        />
        <div className="app-shot-one__carousel">
          <Swiper {...params}>
            <div className="item">
              <img src={appImage1} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage2} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage3} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage4} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage5} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage1} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage2} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage3} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage4} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage5} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage1} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage2} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage3} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage4} alt="Awesome Image" />
            </div>
            <div className="item">
              <img src={appImage5} alt="Awesome Image" />
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default AppScreen;
