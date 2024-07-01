import React, {useState} from 'react'
import Styles from "./premium.module.css";
import image1 from "../../images/gourmet.png";
import image2 from "../../images/gourmet2.png";
import image3 from "../../images/gourmet3.png";

const images = [
    { src: image1, txt: "LUXURY OUTDOOR LIVING", txtsm: "Kalamazoo Outdoor Gourmet", btncnt: "View the Collection" },
    { src: image2, txt: "OUR COLLECTION OF OUTDOOR HEATING IS HERE", txtsm: "Cozy Up By the Fire", btncnt: "View the Collection" }
];
  
const Premium = () => {
  var [selectedIndex, setSelectedIndex] = useState(0);
  const n = images.length;
  const nextImage = () => {
      selectedIndex++;
      selectedIndex = selectedIndex % n;
      setSelectedIndex(selectedIndex);
  };
  const prevImage = () => {
    selectedIndex--;
    if(selectedIndex < 0)
        selectedIndex = n-1;
    selectedIndex = selectedIndex % n;
    setSelectedIndex(selectedIndex);
};

const backgroundImageStyle = {
    backgroundImage: `url(${images[selectedIndex].src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}
    
  return ( 

    <div className={Styles.premium} style={backgroundImageStyle}>
    <div className={Styles.premiumtext}>
        <h2>{images[selectedIndex].txt}</h2>
        <h1>{images[selectedIndex].txtsm}</h1>
        <button className={Styles.btnf}><span>{images[selectedIndex].btncnt}</span></button>

        <div className={Styles.btn}>
          <button onClick={() => prevImage()} style={{ padding: '10px', cursor: 'pointer', borderRadius: '100%' }}>
            <img src="/images/left-arrow.png" alt="leftarrow" />
          </button>
          <button onClick={() => nextImage()} style={{ padding: '10px', cursor: 'pointer', borderRadius: '100%' }}>
            <img src="/images/right-arrow.png" alt="rightarrow" />
          </button>
        </div>
    </div>
    </div>
  )
}

export default Premium;