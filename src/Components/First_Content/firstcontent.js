import React from 'react'
import Styles from "./firstcontent.module.css";
import videobg from '../../assets/videobg.mp4'

const Firstcontent = () => {
  return (
    <div className={Styles.firstcontent}>
        {/* <div className={Styles.overlay}></div> */}
        <video src={videobg} autoPlay loop muted></video>
        <div className={Styles.text}>
            <h2>OUTDOOR KITCHEN SPECIALISTS</h2>
            <h1>Never Settle<br />For Less</h1>
            <p>Fully customized Outdoor Kitchens to maxmize your outdoor space. Contact us today for a free consultation and quote.</p>
            <button>OUTDOOR KITCHEN</button>
        </div>
    </div>
  )
}

export default Firstcontent;