import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";

const Pricing = (props) => {
  const [plan, setPlan] = useState(false);
  return (
    <section className="pricing-one" id="pricing">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="För dig som CDO"
          titleText={`Vilken variant ska du välja?`}
        />
       
          <div id="month">
            <Row>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Monolit</p>
                    <h3>100 milj kr</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>✅ Du får inte sparken</li>
                      <li>🚫 Kräver anpassning</li>
                      <li>🚫 Svårt att hitta kompetens</li>
                      <li>🚫 Gammal teknik</li>
                      <li>🚫 Användarfientlig</li>
                      <li>🚫 Dömt att misslyckas</li>
                    </ul>
                    <a href="javascript: alert('😡 nej men snälla')" className="thm-btn pricing-one__btn">
                      <span>Välj</span>
                    </a>

                    <span>Licenskostnader!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Skräddarsytt system</p>
                    <h3>10 milj kr</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>✅ Du vinner priser</li>
                      <li>✅ Användaranpassat</li>
                      <li>✅ Total kontroll</li>
                      <li>❔ Vem äger koden?</li>
                      <li>🚫 Tar tid och resurser</li>
                      <li>🚫 Teknisk skuld / legacy</li>
                    </ul>
                    <a href="javascript: alert('🤷🏻‍♀️ ja det är väl bekvämt')" className="thm-btn pricing-one__btn">
                      <span>Välj</span>
                    </a>

                    <span>Champagne på galor!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>API First</p>
                    <h3>400 tkr</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>✅ Användarstyrt</li>
                      <li>✅ Öppen källkod</li>
                      <li>✅ Bygger community</li>
                      <li>✅ Oväntad innovation</li>
                      <li>✅ Demokratisk</li>
                      <li>❔ Släpper kontroll</li>
                      </ul>
                    <a href="javascript: alert('🦚 välkommen till framtiden!')" className="thm-btn pricing-one__btn">
                      <span>Välj</span>
                    </a>

                    <span>Det är roligt!</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
      </Container>
    </section>
  );
};

export default Pricing;
