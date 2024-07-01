import React from 'react'
import Styles from "./bottomheader.module.css";
import { useState } from 'react';

const Bottomheader = () => {

    const [isCookingDropDownVisible, setIsCookingDropdownVisible] = useState(false);
    const [isKitchenDropDownVisible, setIsKitchenDropdownVisible] = useState(false);
    const [isHeatingDropDownVisible, setIsHeatingDropdownVisible] = useState(false);
    const [isLivingDropDownVisible, setIsLivingDropdownVisible] = useState(false);
 
    const handleCookingMouseEnter = () => setIsCookingDropdownVisible(true); 
    const handleCookingMouseLeave = () => setIsCookingDropdownVisible(false); 
    const handleKitchenMouseEnter = () => setIsKitchenDropdownVisible(true);
    const handleKitchenMouseLeave = () => setIsKitchenDropdownVisible(false);
    const handleHeatingMouseEnter = () => setIsHeatingDropdownVisible(true);
    const handleHeatingMouseLeave = () => setIsHeatingDropdownVisible(false);
    const handleLivingMouseEnter = () => setIsLivingDropdownVisible(true);
    const handleLivingMouseLeave = () => setIsLivingDropdownVisible(false);

  return (
    <section className={Styles.bottomheader}>
        <div className={Styles.bottomheaderitems}>
            <div className={Styles.inputfield}>
                <input type="text" placeholder='Search...'/>
            </div>
            <div className={Styles.logoimg}>
                <img src="/images/logoo.png" alt="logo" />
            </div>
            <div className={Styles.userandcart}>
                <img src="/images/user.png" alt="user" />
                <h3>ACCOUNT</h3>
                <img src="/images/cart.png" alt="cart" />
                <h3>CART</h3>
            </div>
        </div>
        <div className={Styles.line}>
            .
        </div>
        <div className={Styles.navbar}>
            <ul>
                <li>Home</li>
                <li onMouseEnter={handleCookingMouseEnter} onMouseLeave={handleCookingMouseLeave}>
                    Outdoor Cooking  {isCookingDropDownVisible && (
                    <ul className={Styles.dropdownMenu}>
                        <li className={Styles.dropdownItem}>BBQ</li>
                        <li className={Styles.dropdownItem}>Pizza Ovens</li>
                        <li className={Styles.dropdownItem}>Griddles</li>
                        <li className={Styles.dropdownItem}>Burners</li>
                        <li className={Styles.dropdownItem}>Smokers</li>
                    </ul>
                )}</li>
                <li onMouseEnter={handleKitchenMouseEnter} onMouseLeave={handleKitchenMouseLeave}>
                    Outdoor Kitchens {isKitchenDropDownVisible && (
                    <ul className={Styles.dropdownMenu}>
                        <li className={Styles.dropdownItem}>Cabinets</li>
                        <li className={Styles.dropdownItem}>Sinks</li>
                        <li className={Styles.dropdownItem}>Fridges</li>
                        <li className={Styles.dropdownItem}>Access Doors</li>
                        <li className={Styles.dropdownItem}>Trash Centers</li>
                        <li className={Styles.dropdownItem}>Storage</li>
                    </ul>
                )}</li>
                <li onMouseEnter={handleHeatingMouseEnter} onMouseLeave={handleHeatingMouseLeave}>
                    Outdoor Heating {isHeatingDropDownVisible && (
                    <ul className={Styles.dropdownMenu}>
                        <li className={Styles.dropdownItem}>Bromic</li>
                        <li className={Styles.dropdownItem}>Sunpak</li>
                        <li className={Styles.dropdownItem}>Dekko</li>
                    </ul>
                )}</li>
                <li onMouseEnter={handleLivingMouseEnter} onMouseLeave={handleLivingMouseLeave}>
                    Outdoor Living {isLivingDropDownVisible && (
                    <ul className={Styles.dropdownMenu}>
                        <li className={Styles.dropdownItem}>Patio Furnitures</li>
                        <li className={Styles.dropdownItem}>Umbrellas</li>
                        <li className={Styles.dropdownItem}>Complete Backyard Transformation</li>
                        <li className={Styles.dropdownItem}>Concept Designs</li>
                    </ul>
                )}</li>
                <li>Our Installations</li>
                <li>About Us</li>
            </ul>
        </div>
    </section>
  )
}

export default Bottomheader;