import React from 'react'
import Styles from "./topheader.module.css";

const Topheader = () => {
  return (
    <section className={Styles.topheader}>
        <div className={Styles.topheadercontactitems}>
            <img src="/images/call.png" alt="call" />
            <p>778-512-1000</p>
            <img src="/images/clock.png" alt="clock" />
            <p>CONTACT US FOR A FREE CONSULTATION</p>
        </div>
        <div className={Styles.topheadermailitems}>
            <img src="/images/mail.png" alt="mail" />
            <p>info@thegasguys.ca</p>
            <img src="/images/facebook.png" alt="facebook" />
            <img src="/images/instagram.png" alt="instagram" />
        </div>
    </section>
  )
}

export default Topheader;