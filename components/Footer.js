import React, { useContext } from "react";

import AllmannyttanLogo from "../assets/images/resources/sveriges-allmannytta.jpg";
import NikolaiLogo from "../assets/images/resources/nikolai.png";
import IteamLogo from "../assets/images/resources/iteam.png";
import ProxifyLogo from "../assets/images/resources/proxify.png";
import ElksLogo from "../assets/images/resources/46elks.png";
import HomepalLogo from "../assets/images/resources/homepal.svg";
import SkilledLogo from "../assets/images/resources/skilled.png";
import AlingsaskommunLogo from "../assets/images/resources/alingsaskommun.svg";
import SwedishJobtechLogo from "../assets/images/resources/swedishjobtech.png";
import AssedonLogo from "../assets/images/resources/assedon.png";
import MetaSolutionsLogo from "../assets/images/resources/metasolutions.webp";
import OpenKnowledgeSwedenLogo from "../assets/images/resources/openknowledgesweden.webp";
import HandlingarLogo from "../assets/images/resources/handlingar.webp";


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
                  <a href="https://www.linkedin.com/company/allm%C3%A4nnyttans-digitaliseringsinitiativ/">
                    <img src={AllmannyttanLogo} width="180" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/company/iteam1337/">
                    <img src={IteamLogo} width="180" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/company/nikolaidev/">
                    <img src={NikolaiLogo} width="180" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/company/lennox-public-relations/">
                    <img src="https://images.squarespace-cdn.com/content/v1/5f12fde1f67d8f0ee71c496d/1616406911096-UF297OQVRGY7A9T15IOW/ke17ZwdGBToddI8pDm48kI_tQScU0yp6ViEoQ_S7xc17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua4pajMFhX3Rz7xjXCazl056suAr1I5mPtKc-JWB0C8oZ4SODUbdTU85jG6Jwp5K1Q/Lenno_logo_ruta_pr_pink.jpg?format=1500w" width="180" alt="" />
                  </a>
                  <a href="https://proxify.io/">
                    <img src={ProxifyLogo} width="180" alt="" />
                  </a>
                  <a href="https://46elks.se/">
                    <img src={ElksLogo} width="180" alt="" />
                  </a>
                  <a href="https://homepal.se/">
                    <img src={HomepalLogo} width="180" alt="" />
                  </a>
                  <a href="https://skilledpeople.se/">
                    <img src={SkilledLogo} width="180" alt="SkilledPeople Logo" />
                  </a>
                    <a href="https://alingsaskommun.se/">
                    <img src={AlingsaskommunLogo} width="180" alt="Alingsåskommun Logo" />
                  </a>
                  <a href="https://www.swedishjobtech.se/">
                    <img src={SwedishJobtechLogo} width="180" alt="SwedishJobtech Logo" />
                  </a>
                  <a href="https://www.assedon.se/">
                    <img src={AssedonLogo} width="180" alt="Assedon Logo" />
                  </a>
                  <a href="https://www.roaring.io/en/">
                    <img src="https://www.roaring.io/wp-content/uploads/2021/11/roaring-logo-green-1.svg" width="180" alt="" />
                  </a>
                  <a href="https://www.metasolutions.se/">
                    <img src={MetaSolutionsLogo} width="180" alt="MetaSolutions Logo" />
                  </a>
                  <a href="https://okfn.se/">
                    <img src={OpenKnowledgeSwedenLogo} width="180" alt="OpenKnowledgeSweden Logo" />
                  </a>
                  <a href="https://handlingar.se/">
                    <img src={HandlingarLogo} width="180" alt="Handlingar Logo" />
                  </a>

                  {
                  // add your logo here, thnx:
                  }

                </div>
              </div>
              <div className="col-lg-12 d-flex align-items-center justify-content-md-center justify-content-sm-center">
                <div className="footer-widget">
                  <div className="footer-widget__social">
                    Vill du vara med här? Gör en pull request:&nbsp;
                    <a href="https://github.com/allmannyttan/apifirst">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
