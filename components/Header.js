import React, { useState, useEffect, useContext } from "react";
import NavLinks from "./NavLinks";

import LogoImage from "../assets/images/logo-1-1.png";
import { MenuContext } from "../context/MenuContext";

const HeaderHome = (props) => {
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header
      className={`site-header-one stricky  ${props.extraClassName} ${
        sticky === true ? "stricky-fixed stricked-menu" : " "
      }`}
    >
      <div className="container-fluid">
        <div className="site-header-one__logo">
          <a href="/">
            <img src={LogoImage} width="180" alt="" />
          </a>
          <span className="side-menu__toggler" onClick={handleMenuClick}>
            <i className="fa fa-bars"></i>
          </span>
        </div>
        <div className="main-nav__main-navigation">
          <NavLinks />
        </div>
        {/* <div className="main-nav__right">
          <a href="#" className={`thm-btn ${props.btnClass}`}>
            <span>Download App</span>
          </a>
        </div> */}
      </div>
    </header>
  );
};

export default HeaderHome;
