import React, {useState} from 'react'
import Styles from "./premium.module.css";
import image1 from "../../images/gourmet.png";
import image2 from "../../images/gourmet2.png";
import image3 from "../../images/gourmet3.png";

const images = [
    { src: image1, txt: "DESIGN SERVICES", txtsm: "Premium Brands", btncnt: "Buy here" },
    { src: image2, txt: "DESIGN SERVICES2", txtsm: "Premium Brands2", btncnt: "Buy here2"  },
    { src: image3, txt: "DESIGN SERVICES3", txtsm: "Premium Brands3", btncnt: "Buy here3"  },
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
    <div>
        <h2>{images[selectedIndex].txt}</h2>
        <h1>{images[selectedIndex].txtsm}</h1>
        {/* <img src={selectedIndex} alt="" /> */}
        <img 
          src={images[selectedIndex].src} 
          style={{ width: '400px', height: '300px',}} 
          alt='mainimage'
        />
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