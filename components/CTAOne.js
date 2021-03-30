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
          <img src={CtaMoc1} className="cta-one__moc-img" alt="" />
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="10 viktiga frågor om API"
                titleText={`Vi vill öka förståelsen av\nvad ett API är`}
              />
              <div className="cta-one__text">
                <p>
                  Det finns många missuppfattningar om vad ett API är och hur det fungerar. Vi hjälper dig att räta ut frågetecknen.
                </p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  Måste jag intressera mig för API?
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Vad är ett API?
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Vad kan jag göra med ett API?
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Går inte näringslivet i stöpet med ett API?
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Vad kan samhället göra med ett API?
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Är det inte jättefarligt med ett API som en öppen dörr till en massa känslig data (man har ju hört om GDPR)?
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Finns det olika API:er?
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Finns det bra API:er och dåliga API:er?
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Vilken teknik behöver man för ett API och vilken teknik är bäst?
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Om jag ska köpa ett API, eller jag menar ett system eller nej ett API först, hur kravställer jag ett API?
                </li>
              </ul>
              <a href="#" className="thm-btn cta-one__btn">
                <span>Läs mer här</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
