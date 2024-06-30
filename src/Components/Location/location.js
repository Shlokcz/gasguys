import React from 'react'
import Styles from "./location.module.css";

const Location = () => {
  return (
    <div className={Styles.location}>
        <div className={Styles.loc}>
            <h2>Kerrisdale Lumber Home</h2>
            <address>
                6365 West Boulevard, Vancouver BC<br />Open 7 Days a Week: 9:30am - 6pm
            </address>
            <button>Get Directions</button>
        </div>
    </div>
  )
}

export default Location;