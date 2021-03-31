import React, { useContext } from "react";
import NavLinks from "./NavLinks";
import CloseBtn from "../assets/images/shapes/close-1-1.png";
import { MenuContext } from "../context/MenuContext";

const MobileMenu = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  return (
    <div
      className={`animated slideInLeft side-menu__block ${
        true === menuStatus ? "active" : " "
      }`}
    >
      <div
        className="side-menu__block-overlay custom-cursor__overlay"
        onClick={handleMenuClick}
      >
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        <div className="side-menu__top justify-content-end">
          <a
            href="#"
            onClick={handleMenuClick}
            className="side-menu__toggler side-menu__close-btn"
          >
            <img src={CloseBtn} alt="" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinks />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
         
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
