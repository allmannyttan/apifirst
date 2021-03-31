import React from "react";
import BlockTitle from "./BlockTitle";  

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import CtaMoc1 from "../assets/images/resources/cta-1-moc-1.jpg";

const CTAOne = () => {
  return (
    <section className="cta-one">
      <img src={CtaShape1} className="cta-one__bg-shape-1" alt="" />
      <img src={CtaShape2} className="cta-one__bg-shape-2" alt="" />
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="Vår vision"
                titleText={`Vi vill att alla organisationer i Sverige ska ha ett öppet API`}
              />
              <div className="cta-one__text">
                <p>
                
                The mask app, she argues, is a technical project playing to the strength of Taiwan’s evolving societal norms. 
                The government trusted the people not to abuse access to NHI data, and the people responded to that trust by 
                creating a multitude of applications that went far beyond Howard Wu’s initial experiment, doing things such as
                adding inclusivity-expanding features like audio assistance for the visually impaired. 
                If that kind of participatory mechanism design eventually becomes the norm,” Tang says, 
                “then you will see a sea change, and people will start to think about how to collaborate with 
                different people, rather than to cast them as others. making civic technology practices work, 
                you need a critical mass of citizens who are willing and able to participate.

https://www.wired.com/story/how-taiwans-unlikely-digital-minister-hacked-the-pandemic

                  Om alla organisationer hade ett API hade vi kunnat se ett samhälle växa fram som vi bygger tillsammans och som blir mer värdeskapande för medborgare och företag och gör Sverige mer konkurrenskraftigt.
                </p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  Bygga samhället tillsammans
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Släppa lös innovationskraften
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Mycket
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Bättre digitala tjänster
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
