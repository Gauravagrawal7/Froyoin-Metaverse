import React from "react";
import "./Footer.css";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok.png";
import youtubeIcon from "../assets/youtube.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="topSection">
        <div className="logoSection">
          <h2 className="logoText">
            FROYO<span className="highlight">I</span>N
          </h2>
          <div className="socialIcons">
            <img src={facebookIcon} alt="Facebook" className="socialIcon" />
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
            <img src={tiktokIcon} alt="TikTok" className="socialIcon" />
            <img src={youtubeIcon} alt="YouTube" className="socialIcon" />
          </div>
        </div>

        <div className="linksContainer">
          <div className="linksColumns">
            <div className="column">
              <h3 className="linkHeader">Company</h3>
              <p>About Us</p>
              <p>Careers</p>
              <p>Contact</p>
              <p>Social Media</p>
            </div>
            <div className="column">
              <h3 className="linkHeader">Services</h3>
              <p>Overview</p>
              <p>Solutions</p>
              <p>Testimonials</p>
              <p>Pricing</p>
            </div>
            <div className="column">
              <h3 className="linkHeader">Resources</h3>
              <p>Blog</p>
              <p>Newsletter</p>
              <p>Events</p>
              <p>Help Center</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="stayConnected">Stay Connected</h3>
      <p className="communityText">
        Join our community for the latest updates and insights from Froyoin.
      </p>
      <p className="copyright">Froyoin 2024. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
