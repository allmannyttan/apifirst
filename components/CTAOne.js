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
                Vi tycker att digitaliseringen har varit för långsam. Att enskilda organisationer ska lösa alltför stort problem med dyra system.

                Släpp loss din information och dina tjänster och göra dessa tillgängliga via API 
                kan du boosta digitaliseringen.
                </p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  Lita på dina konkurrenter
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Hacka din affärsidé
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Få superkrafter
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
