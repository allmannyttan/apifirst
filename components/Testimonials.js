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
                paraText="N??r alla har API"
                titleText={`Vad kan jag g??ra med ett API?`}
              />
              <div className="testimonials-one__carousel">
                <Swiper {...paramsTwo}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
<i>Kartong ??r full i soprummet igen, kan du fr??ga om en extra soph??mtning?</i>
<br/>
En extra soph??mtning ??r redan beg??rd i din fastighet, den ??r planerad till imorgon f??rmiddag.
Tack!
                      </p>

                      <h3 className="testimonials-one__title">Siri</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
<i>Kan du sjukanm??la Frank till skolan?</i>

Jag g??r en sjukanm??lan p?? Frank p?? Skola24. 
Vill du att jag ocks?? l??gger in en anm??lan om VABB till F??rs??kringskassan?

                      </p>

                      <h3 className="testimonials-one__title">Google Home</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
<i>G??r det att l??na Real Life av Brandon Taylor p?? stadsbiblioteket idag?</i><br/>
Det finns inget exemplar av Real Life av Brandon Taylor inne p?? n??got bibliotek i Malm?? idag. 
Vill du att jag ska g??ra en reservation?<br/>
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
