import React from "react";
import BlockTitle from "./BlockTitle";

import CTAImage1 from "../assets/images/shapes/apifirst.png";

const CTATwo = () => {
  return (
    <section className="cta-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cta-two__content">
              <BlockTitle
                textAlign="left"
                paraText="Fråga"
                titleText={`Vad är ett API?`}
              />
              
              <div className="cta-two__text">
                <p>
                Ett API är en dokumenterad och säker koppling till ett system. Ett öppet API erbjuder din organisations funktioner, tjänster och data på ett sätt som gör att det kan kopplas samman med andra system, plattformar och organisationer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="cta-two__images d-flex justify-content-end align-items-end flex-column">
              <img
                src={CTAImage1}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
