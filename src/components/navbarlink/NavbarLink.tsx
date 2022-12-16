import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AchorLink from "react-anchor-link-smooth-scroll";
import "./NavbarLink.css";
import { Link as LinkS } from "react-scroll";
import logo from "../../images/nobglogo.png";
import { Link as LinkR } from "react-router-dom";



export const NavbarLink = () => {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div>
          <LinkS to="herosection" onClick={handleClose} className="logo">
            <img src={logo} alt="Guestlist logo" width={60} />
          </LinkS>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <LinkS
              onClick={handleClose}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </LinkS>
          </li>
          <li>
            <LinkS
              onClick={handleClose}
              activeClass="active"
              to="discover"
              spy={true}
              smooth={true}
              duration={500}
            >
              Discover
            </LinkS>
          </li>
          <li>
            <LinkS
              onClick={handleClose}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </LinkS>
          </li>
          <li>
            <LinkS
              onClick={handleClose}
              to="discover"
              spy={true}
              smooth={true}
              duration={500}
            >
              Download App
            </LinkS>
          </li>
          <div className="mobile-menu">
            <li>
              <LinkS
                activeClass="active"
                onClick={handleClose}
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Join
              </LinkS>
            </li>
          </div>
        </ul>

        <ul className="nav-menu hide">
          <li>
            <LinkS to="contact">Join</LinkS>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars style={{ color: "purple" }} size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

// export default NavbarLink;
