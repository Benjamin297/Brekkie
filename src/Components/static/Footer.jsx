import React from "react";
import { FooterContainer, FooterHolder, FooterIcon } from "./FooterStyle";
import { RxTwitterLogo } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io";
import FooterLogo from "../../assets/LogoFooter.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHolder>
        <div className="Footer_logo">
          <img src={FooterLogo} alt="" />
        </div>

        <div className="First_Footer">
          <div className="footer_list">
            <h3>Locations</h3>
            <ul>
              <li>Lekki Peninsula</li>
              <li>Lekki Peninsula ll</li>
              <li>Bella Vista</li>
            </ul>
          </div>

          <div className="footer_list">
            <h3>Download</h3>
            <ul>
              <li>Google Play Store</li>
              <li>iOS App Store</li>
              <li>Web Browser</li>
            </ul>
          </div>
        </div>

        <div className="Second_footer">
          <div className="footer_list_left">
            <h3>Contact Us</h3>
            <ul>
              <li>Brekkie@gmail.com</li>
              <li>07038204058</li>
            </ul>
          </div>

          <div className="footer_list">
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Teams of Use</li>
            </ul>
          </div>
        </div>
      </FooterHolder>

      <FooterIcon>
        <small>© 2025, Brekkie</small>
        <div className="icons">
          <RxTwitterLogo />
          <IoLogoInstagram />
        </div>
      </FooterIcon>
    </FooterContainer>
  );
};

export default Footer;
