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
               Sweden API Award 
              </h3>
              <p>
                API 1st instiftar Sweden API Award 2021 för att uppmärksamma utmärkta API:er. Sveriges bästa API ska vara till nytta för mänskligheten, lättanvänt, säkert, byggd med integritet och på öppen teknik.                
                Nomineringen öppnar 5 oktober 13:00 på Innovationsveckan. <a href="https://sv-se.invajo.com/events/welcome/id/81bf2a70-1526-11ec-9432-fd7faa4ab2ab">Allt du vill vet och anmälan här!</a>

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
