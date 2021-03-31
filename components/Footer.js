import React, { useContext } from "react";

import AllmannyttanLogo from "../assets/images/resources/sveriges-allmannytta.jpg";
import NikolaiLogo from "../assets/images/resources/nikolai.png";
import IteamLogo from "../assets/images/resources/iteam.png";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer" id="footer">
        <div className="site-footer__upper">
          <p>Vi som står bakom</p>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-widget footer-widget__about">
                  <a href="/">
                    <img src={AllmannyttanLogo} width="180" alt="" />
                  </a>
                  <a href="/">
                    <img src={IteamLogo} width="180" alt="" />
                  </a>
                  <a href="/">
                    <img src={NikolaiLogo} width="180" alt="" />
                  </a>
                </div>
              </div>

              {/* <div className="col-lg-5">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Company</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Features</a>
                      </li>
                      <li>
                        <a href="#">Download</a>
                      </li>
                      <li>
                        <a href="#">Free Trial</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of Use</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="col-lg-12 d-flex align-items-center justify-content-md-center justify-content-sm-center">
            <div className="footer-widget">
              <div className="footer-widget__social">
                {/* <a href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a> */}
                {/* <a href="#">
                  <i className="fab fa-my"></i>
                </a> */}
                <a href="https://www.linkedin.com/company/allm%C3%A4nnyttans-digitaliseringsinitiativ/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.linkedin.com/company/iteam1337/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.linkedin.com/company/nikolaidev/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
