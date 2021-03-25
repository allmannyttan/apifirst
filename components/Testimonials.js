import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Pagination, Thumbs, Controller } from "swiper";
SwiperCore.use([Pagination, Thumbs, Controller]);
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";

import TestiQoute from "../assets/images/shapes/testi-qoute-1-1.png";

import TestiImageOne from "../assets/images/resources/testi-1-1.jpg";
import TestiImageTwo from "../assets/images/resources/testi-1-2.jpg";
import TestiImageThree from "../assets/images/resources/testi-1-3.jpg";

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
                      <img src={TestiImageOne} alt="Awesome Image" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageTwo} alt="Awesome Image" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageThree} alt="Awesome Image" />
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
                paraText="Our Testimonials"
                titleText={`What Our Customers Are \n Talking About`}
              />
              <div className="testimonials-one__carousel">
                <Swiper {...paramsTwo}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        repre henderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>

                      <h3 className="testimonials-one__title">Joe Kolmer</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        repre henderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>

                      <h3 className="testimonials-one__title">Darrin Martos</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        repre henderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>

                      <h3 className="testimonials-one__title">Tammy Daniely</h3>
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
