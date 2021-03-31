import React, { useContext } from "react";

import FooterLogo from "../assets/images/logo-1-1.png";

const Footer = () => {
  return (
    <div>
      {/* <section className="mailchimp-one">
        <div className="container wow fadeInUp">
          <div className="inner-container">
            <div className="mailchimp-one__icon">
              <i className="apton-icon-mail"></i>
            </div>
            <form action="#" className="mailchimp-one__form">
              <input
                type="text"
                placeholder="Enter your email address"
                name="email"
              />
              <button className="thm-btn mailchimp-one__btn" type="submit">
                <span>Register Now</span>
              </button>
            </form>
          </div>
        </div>
      </section> */}

      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                <a href="/">
                    <img src={FooterLogo} width="180" alt="" />
                  </a>
                  {/* <p>
                    Lorem Ipsum is simply dummy text the <br /> printing and
                    setting industry. Lorm Ipsum
                    <br /> has been the text ever.
                  </p> */}
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
              <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
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
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© copyright 2021 by API1st.org</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
