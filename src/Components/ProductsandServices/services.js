import React from "react";
import Styles from "./services.module.css";

const Services = () => {
  return (
    <section className={Styles.services}>
      <div className={Styles.productheading}>
        <p>OUR SPECIALIZED</p>
        <h2>Products and Services</h2>
      </div>
      <div className={Styles.serviceItems}>
        <div className={Styles.serviceItem1}>
          <img src="/images/openKitchen.jpg" alt="openkitchen" />
          <h3>OUTDOOR DESIGN SERVICES</h3>
          <button>SHOP NOW</button>
        </div>
        <div className={Styles.serviceItem1}>
          <img src="/images/installation.jpg" alt="installation" />
          <h3>INSTALLATION SERVICES</h3>
          <button>SHOP NOW</button>
        </div>
        <div className={Styles.serviceItem1}>
          <img src="/images/design.png" alt="design" />
          <h3>DESIGN INSIGHTS</h3>
          <button>SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
