import React from "react";
import { Container } from "react-bootstrap";

import Cta3Shape1 from "../assets/images/shapes/cta-three-bg-1-1.png";
import Cta3Shape2 from "../assets/images/shapes/cta-three-bg-1-2.png";

const CTAThree = () => {
  return (
    <section className="cta-three">
      <img src={Cta3Shape1} className="cta-three__bg-1" alt="" />
      <img src={Cta3Shape2} className="cta-three__bg-2" alt="" />
      <Container className="text-center">
        <h3>
          Download our App Today & <br /> Experience Endless Possibilities
        </h3>
        <p>and get started with a free 1 month trial for your business </p>
        <div className="cta-three__btn-wrap">
          <a href="#" className="cta-three__btn">
            <i className="fa fa-play"></i>
            <span>Get in</span>
            <b>Google Play</b>
          </a>
          <a href="#" className="cta-three__btn">
            <i className="fab fa-apple"></i>
            <span>Get in</span>
            <b>Apple Store</b>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CTAThree;
