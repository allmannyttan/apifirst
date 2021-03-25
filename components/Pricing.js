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
          paraText="Pricing Tables"
          titleText={`Choose Pricing Plans Which \n Suits Your Needs`}
        />
        <ul
          className="list-inline text-center switch-toggler-list"
          role="tablist"
          id="switch-toggle-tab"
        >
          <li className={`month ${plan === false ? "active" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPlan(false);
              }}
            >
              Monthly
            </a>
          </li>
          <li>
            <label
              onClick={(e) => {
                e.preventDefault();
                setPlan(!plan);
              }}
              className={`switch ${plan === true ? "off" : "on"}`}
            >
              <span className="slider round"></span>
            </label>
          </li>
          <li className={`year ${plan === true ? "active" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPlan(true);
              }}
            >
              Annualy
            </a>
          </li>
        </ul>
        {plan === true ? (
          <div id="yearly">
            <Row>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Basic Pack</p>
                    <h3>$59.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Standard Pack</p>
                    <h3>$79.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Ultimate Pack</p>
                    <h3>$99.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div id="month">
            <Row>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Basic Pack</p>
                    <h3>$20.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Standard Pack</p>
                    <h3>$40.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Ultimate Pack</p>
                    <h3>$49.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Pricing;
