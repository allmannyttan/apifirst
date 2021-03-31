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
                Vi vill byta namn på första april
              </h3>
              <p>
                Vi tycker att varje dag är ett aprilskämt. Varje gång vi hör om ett miljardprojekt så tänker vi att det finns ett bättre sätt. Att börja med API. Jobba nära användarna och samarbeta i ett öppet system. 
                
                Därför vill vi byta namn på första april till API 1ST day.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
