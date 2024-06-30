import React from 'react'
import Styles from "./bottomheader.module.css";
import { useState } from 'react';

const Bottomheader = () => {

    const [isShopDropDownVisible, setIsShopDropdownVisible] = useState(false);
    const [isDesignDropDownVisible, setIsDesignDropdownVisible] = useState(false);
    const [isBuildDropDownVisible, setIsBuildDropdownVisible] = useState(false);
    const [isAboutDropDownVisible, setIsAboutDropdownVisible] = useState(false);

    
    const handleShopMouseEnter = () => {
        setIsShopDropdownVisible(true);
    }; 
    
    const handleShopMouseLeave = () => {
        setIsShopDropdownVisible(false);
    }; 
    
    const handleDesignMouseEnter = () => {
        setIsDesignDropdownVisible(true);
    };
    
    const handleDesignMouseLeave = () => {
        setIsDesignDropdownVisible(false);
    };

    const handleBuildMouseEnter = () => {
        setIsBuildDropdownVisible(true);
    };

    const handleBuildMouseLeave = () => {
        setIsBuildDropdownVisible(false);
    };

    const handleAboutMouseEnter = () => {
        setIsAboutDropdownVisible(true);
    };

    const handleAboutMouseLeave = () => {
        setIsAboutDropdownVisible(false);
    };

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
                <li onMouseEnter={handleShopMouseEnter} onMouseLeave={handleShopMouseLeave}>
                    Shop Now {isShopDropDownVisible && (
                    <ul className={Styles.dropdownMenu}>
                        <li className={Styles.dropdownItem}>Fire Pits</li>
                        <li className={Styles.dropdownItem}>Fire Pits Accessories</li>
                        <li className={Styles.dropdownItem}>Grills</li>
                    </ul>
                )}</li>
                <li onMouseEnter={handleDesignMouseEnter} onMouseLeave={handleDesignMouseLeave}>
                    Design Services {isDesignDropDownVisible && (
                    <ul className={Styles.dropdownMenu}>
                        <li className={Styles.dropdownItem}>Outdoor Kitchens and Equipment</li>
                        <li className={Styles.dropdownItem}>Fire Features</li>
                        <li className={Styles.dropdownItem}>Patio Heaters</li>
                        <li className={Styles.dropdownItem}>Pergolas, Decks & Privacy Walls</li>
                        <li className={Styles.dropdownItem}>natural Gas Tiki Torches</li>
                        <li className={Styles.dropdownItem}>Pizza Owens and Barbecue Equipment</li>
                    </ul>
                )}</li>
                <li onMouseEnter={handleBuildMouseEnter} onMouseLeave={handleBuildMouseLeave}>
                    Build Services {isBuildDropDownVisible && (
                    <ul className={Styles.dropdownMenu}>
                        <li className={Styles.dropdownItem}>Electrical Setup</li>
                        <li className={Styles.dropdownItem}>Product Sourcing Services</li>
                    </ul>
                )}</li>
                <li onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>
                    About Us {isAboutDropDownVisible && (
                    <ul className={Styles.dropdownMenu}>
                        <li className={Styles.dropdownItem}>Our Showroom</li>
                        <li className={Styles.dropdownItem}>Our Work</li>
                        <li className={Styles.dropdownItem}>Design Tips</li>
                    </ul>
                )}</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </section>
  )
}

export default Bottomheader;