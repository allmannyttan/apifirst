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
              API 1st dagen
              </h3>
              <p>
               Varje dag känns som ett aprilskämt! Varje gång vi hör om stora dyra och stängda system så tänker vi pengar i sjön. Det finns ett bättre sätt. API först, jobba nära användarna och samarbeta i öppna system. Bättre och rent utav nödvändigt för att bygga ett hållbart samhälle som människor mår bra i. Vi vill inte se en till beställning som är ett skämt. Därför utropar vi 1 april till API 1st dagen. 

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
