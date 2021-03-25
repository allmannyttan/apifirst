import React from "react";
import BlockTitle from "./BlockTitle";

import TeamShape1 from "../assets/images/shapes/team-1-bg-1-1.png";
import TeamShape2 from "../assets/images/shapes/team-1-bg-1-2.png";
import TeamMemeber1 from "../assets/images/team/team-1-1.jpg";
import TeamMemeber2 from "../assets/images/team/team-1-2.jpg";
import TeamMemeber3 from "../assets/images/team/team-1-3.jpg";
import TeamMemeber4 from "../assets/images/team/team-1-4.jpg";

const Team = () => {
  return (
    <section className="team-one" id="team">
      <img src={TeamShape1} className="team-one__bg-shape-1" alt="" />
      <img src={TeamShape2} className="team-one__bg-shape-2" alt="" />
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Expert People"
          titleText={`Meet Our Professional \n Team Members`}
        />
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Nathaniel McKenzie</h3>
                <p>App Designer</p>
                <div className="team-one__image">
                  <img src={TeamMemeber1} alt="" />
                </div>
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Ronald Parks</h3>
                <p>App Designer</p>
                <div className="team-one__image">
                  <img src={TeamMemeber2} alt="" />
                </div>
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Rachel Walker</h3>
                <p>App Designer</p>
                <div className="team-one__image">
                  <img src={TeamMemeber3} alt="" />
                </div>
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Willie Castillo</h3>
                <p>App Designer</p>
                <div className="team-one__image">
                  <img src={TeamMemeber4} alt="" />
                </div>
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
