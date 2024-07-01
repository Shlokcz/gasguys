import React, { useState } from "react";
import Styles from "./firstcontent.module.css";
import image1 from "./../../images/outdoorCooking.png";
import image2 from "./../../images/outdoorKitchen.png";
import image3 from "./../../images/outdoorDesign.png";
import image4 from "./../../images/whoweare.png";

const images = [
  {
    src: image1,
    txt: "OUTDOOR COOKING",
    txtsm: "Now Available at GasGuys",
    btncnt: "Browse our Selection",
  },
  {
    src: image2,
    txt: "OUTDOOR KITCHEN",
    txtsm: "Now Available at GasGuys",
    btncnt: "Browse our Selection",
  },
  {
    src: image3,
    txt: "OUTDOOR LIVING",
    txtsm: "Now Available at GasGuys",
    btncnt: "Browse our Selection",
  },
  {
    src: image4,
    txt: "OUTDOOR FURNITURES",
    txtsm: "Now Available at GasGuys",
    btncnt: "Browse our Selection",
  }
];

const Firstcontent = () => {
  var [selectedIndex, setSelectedIndex] = useState(0);
  const n = images.length;
  const nextImage = () => {
    selectedIndex++;
    selectedIndex = selectedIndex % n;
    setSelectedIndex(selectedIndex);
  };
  const prevImage = () => {
    selectedIndex--;
    if (selectedIndex < 0) selectedIndex = n - 1;
    selectedIndex = selectedIndex % n;
    setSelectedIndex(selectedIndex);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${images[selectedIndex].src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={Styles.firstcontent} style={backgroundImageStyle}>
      <div className={Styles.overlay}></div>
      <div className={Styles.text}>
        <h3>INTRODUCING</h3>
        <h2>{images[selectedIndex].txt}</h2>
        <h4>{images[selectedIndex].txtsm}</h4>

        <button className={Styles.btnf}><span>{images[selectedIndex].btncnt}</span></button>
      </div>

      <div className={Styles.btn}>
          <button onClick={() => prevImage()} style={{ padding: '10px', cursor: 'pointer', borderRadius: '100%' }}>
            <img src="/images/left-arrow.png" alt="leftarrow" />
          </button>
          <button onClick={() => nextImage()} style={{ padding: '10px', cursor: 'pointer', borderRadius: '100%' }}>
            <img src="/images/right-arrow.png" alt="rightarrow" />
          </button>
      </div>
    </div>
  );
};

export default Firstcontent;
