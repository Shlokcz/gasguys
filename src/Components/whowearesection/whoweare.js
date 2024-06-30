import React from "react";
import Styles from "./whoweare.module.css";

const Whoweare = () => {
  return (
    <section className={Styles.whoweare}>
      <div className={Styles.whowearecontent}>
        <h1>WHO WE ARE</h1>
        <p>
          The Gas Guys is a Custom Outdoor Living contractor based in the
          Greater Vancouver Area. We have years of experience with happy
          customers throughout the Lower Mainland. We specialize in the design
          and installation of Outdoor Kitchens, Fire Features, Patio Heaters and
          Gas Line Installations, and a variety of other custom services.
        </p>
        <span>LEARN MORE</span>
      </div>
      <div className={Styles.whoweareimg}>
        <img src="/images/whoweare.png" alt="whoweare" />
      </div>
    </section>
  );
};

export default Whoweare;
