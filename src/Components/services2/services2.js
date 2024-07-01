import React from "react";
import Styles from "./services2.module.css";

const Services2 = () => {
  return (
    <section className={Styles.services2}>
      <div className={Styles.serviceItems}>
        <div className={Styles.serviceItem}>
          <img src="/images/sec2_1.jpg" alt="installation" />
          <h3>INSTALLATION SERVICES</h3>
          <span>Now Available In-Store
          Limited Quantities Available Online</span>
        </div>
        <div className={Styles.serviceItem}>
          <img src="/images/sec2_2.jpg" alt="design" />
          <h3>DESIGN INSIGHTS</h3>
          <span>Now Available In-Store
          Limited Quantities Available Online</span>
        </div>
      </div>
    </section>
  );
};

export default Services2;
