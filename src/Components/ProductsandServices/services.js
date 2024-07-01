import React from "react";
import Styles from "./services.module.css";

const Services = () => {
  return (
    <section className={Styles.services}>
      <div className={Styles.serviceItems}>
        <div className={Styles.serviceItem}>
          <div className="overlay"></div>
          <img src="/images/openKitchen.png" alt="openkitchen" />
          <h3>PIZZA OVENS</h3>
          <button>SHOP NOW</button>
        </div>
        <div className={Styles.serviceItem}>
          <div className="overlay"></div>
          <img src="/images/installation.jpg" alt="installation" />
          <h3>KITCHEN CABINETS</h3>
          <button>SHOP NOW</button>
        </div>
        <div className={Styles.serviceItem}>
          <div className="overlay"></div>
          <img src="/images/outdoorliving.png" alt="design" />
          <h3>OUTDOOR FURNITURES</h3>
          <button>SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
