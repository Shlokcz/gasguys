import React from 'react'
import Styles from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <section className={Styles.subscribe}>
        <div className={Styles.para}>
            <p>Subscribe to our newsletter for special offers & news!</p>
        </div>
        <div className={Styles.inputText}>
            <input type="text" placeholder='Enter your Email' />
            <button>Subscribe</button>
        </div>
    </section>
  )
}

export default Subscribe;