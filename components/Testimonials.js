import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Pagination, Thumbs, Controller } from "swiper";
SwiperCore.use([Pagination, Thumbs, Controller]);
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";

import TestiQoute from "../assets/images/resources/siri.png";

const Testimonials = (props) => {
  const paramsTwo = {
    observer: true,
    observeParents: true,
    speed: 1400,
    mousewheel: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonials-one__pagination-wrap .swiper-pagination",
      clickable: true,
    },
  };

  const paramsOne = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1400,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="testimonials-one">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="testimonials-one__thumb-carousel-wrap">
              <div className="testimonials-one__icon">
                <div className="testimonials-one__icon-inner">
                  <img src={TestiQoute} alt="" />
                </div>
              </div>
              <div className="testimonials-one__thumb-carousel">
                <Swiper {...paramsOne}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="my-auto">
              <BlockTitle
                textAlign="left"
                paraText="När alla har API"
                titleText={`Vad kan jag göra med ett API?`}
              />
              <div className="testimonials-one__carousel">
                <Swiper {...paramsTwo}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
<i>Kartong är full i soprummet igen, kan du fråga om en extra sophämtning?</i>
<br/>
En extra sophämtning är redan begärd i din fastighet, den är planerad till imorgon förmiddag.
Tack!
                      </p>

                      <h3 className="testimonials-one__title">Siri</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
<i>Kan du sjukanmäla Frank till skolan?</i>

Jag gör en sjukanmälan på Frank på Skola24. 
Vill du att jag också lägger in en anmälan om VABB till Försäkringskassan?

                      </p>

                      <h3 className="testimonials-one__title">Google Home</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
<i>Går det att låna Real Life av Brandon Taylor på stadsbiblioteket idag?</i><br/>
Det finns inget exemplar av Real Life av Brandon Taylor inne på något bibliotek i Malmö idag. 
Vill du att jag ska göra en reservation?<br/>
<i>Ja!</i>
                      </p>

                      <h3 className="testimonials-one__title">Alexa</h3>
                    </div>
                  </div>
                </Swiper>
                <div className="testimonials-one__pagination-wrap">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
