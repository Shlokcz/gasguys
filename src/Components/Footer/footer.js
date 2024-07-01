import React from "react";
import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={Styles.footer}>
      <div className={Styles.container}>
        <div className={Styles.column}>
          <h3>Footer Menu</h3>
          <ul className={Styles.footerMenu}>
            <li>About Us</li>
            <li>Returns & Exchange Policy</li>
            <li>Shipping Policy</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>My Account</li>
          </ul>
        </div>
        <div className={Styles.column}>
            <h3>Get in Touch</h3>
          <ul className={Styles.getintouch}>
            <li><img src="/images/gps.png" alt="gps" />Unit 101, 14772 64 Ave Surrey, V3S 1X7</li>
            <li><img src="/images/gps.png" alt="gps" />1314 SW Marine Drive, Vancouver, V6P 5Z6</li>
            <li><img src="/images/message.png" alt="message" />Email: info@thegasguys.ca</li>
            <li><img src="/images/phone-call.png" alt="phonecall" />Phone: 778-512-1000</li>
            <li><img src="/images/blackclock.png" alt="clock" />Open daily and closed on Sundays</li>
          </ul>
        </div>
        <div className={Styles.column}>
          <h3>Follow Us</h3>
          <div className={Styles.socialIcons}>
            <a href="/">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="/">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
            <a href="/">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className={Styles.bottom}>
        <p>&copy; Copyright ©2024 The Gas Guys.</p>
      </div>
    </section>
  );
};

export default Footer;
