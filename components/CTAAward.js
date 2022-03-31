import React from "react";
import { Container } from "react-bootstrap";

import Cta3Shape1 from "../assets/images/shapes/cta-three-bg-1-1.png";
import Cta3Shape2 from "../assets/images/shapes/cta-three-bg-1-2.png";
import MainImage from "../assets/images/resources/finalister_och_jury_api_awards_stage.jpg";

const CTAThree = () => {
  const imageCaption = "Vinnarna med vandringspokalen, finalister och jury firar Sweden API Award 2021 på Internetdagarna.";
  return (
    <section className="cta-three cta-award">
      <img src={Cta3Shape1} className="cta-three__bg-1" alt="" />
      <img src={Cta3Shape2} className="cta-three__bg-2" alt="" />
      <Container className="text-center">
        <h3>
        Sweden API Award
        </h3>
        <figure className="cta-award-big-image">
          <img src={MainImage} alt={imageCaption} />
          <figcaption>{imageCaption}</figcaption>
        </figure>
        <p>API 1st har instiftat Sweden API Award för att uppmärksamma utmärkta API:er. <span className="cta-award-pop">En namnkunnig jury utsåg fem finalister och vinnaren på Internetdagarna 2021</span> i den första upplagan av utmärkelsen. Stort grattis till Arbetsförmedlingen som vann för APIet Jobstream.</p>
        <p className="cta-award-pop">Allt du vill veta om Sweden API Award <a href="https://sv-se.invajo.com/events/welcome/id/81bf2a70-1526-11ec-9432-fd7faa4ab2ab">finns här!</a></p>
      </Container>
    </section>
  );
};

export default CTAThree;
