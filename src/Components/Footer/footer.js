import React from "react";
import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={Styles.footer}>
      <div className={Styles.container}>
        <div className={Styles.column}>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className={Styles.column}>
          <h3>Contact</h3>
          <p>1314 SW Marine Drive, Vancouver, V6P 5Z6</p>
          <p>Email: info@gasguys.com</p>
          <p>Phone: (123) 456-7890</p>
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
