import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/resources/banner-moc-1-1.png";

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };


  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        // style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">
        {/* <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt=""
          />
        </div> */}
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              
              <div className="mc-form__response"></div>
              <h3>
                Vi vill införa<br /> anti-API <br /> avgift
              </h3>
              <p>
                Det är sjukt dyrt att inte bygga API först. Vi vill införa avgifter för alla organisationer som inte har ett öppet API. 
                Samhället kan bli så mycket bättre och utvecklas av fler. Skriv under vårt upprop nu.
              </p>
              <div
                className="banner-one__mc-form mc-form"
                // data-url="MAILCHIMP__POPUP__FORM__URL"
              >
                
                <input type="text" name="email" placeholder="Din email" />
                
                <button className="thm-btn banner-one__mc-btn">
                <a href="https://tinyurl.com/eudd6bmr" >
                  <span>Anslut dig</span>
                  </a>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
