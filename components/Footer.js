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
                  <a href="https://www.linkedin.com/company/allm%C3%A4nnyttans-digitaliseringsinitiativ/">
                    <img src={AllmannyttanLogo} width="180" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/company/iteam1337/">
                    <img src={IteamLogo} width="180" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/company/nikolaidev/">
                    <img src={NikolaiLogo} width="180" alt="" />
    <a href="https://www.linkedin.com/company/lennox-public-relations/">
                    <img src="https://images.squarespace-cdn.com/content/v1/5f12fde1f67d8f0ee71c496d/1616406911096-UF297OQVRGY7A9T15IOW/ke17ZwdGBToddI8pDm48kI_tQScU0yp6ViEoQ_S7xc17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua4pajMFhX3Rz7xjXCazl056suAr1I5mPtKc-JWB0C8oZ4SODUbdTU85jG6Jwp5K1Q/Lenno_logo_ruta_pr_pink.jpg?format=1500w" width="180" alt="" />
                  </a>
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
