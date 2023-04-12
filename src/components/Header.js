import React from "react";
import Navbar from "./Navbar";


function Header() {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner-content">
                <div className="container">
                    <div className="banner-text">
                        <h3>Pizza Devlivery</h3>
                        <h1>MAESTRO PIZZINNI</h1>
                        <p>
                            bkjbjkbkjbkjbjkbjkbjkbkjbjkbjkbkjbkjbkjbkjbkjbkjb
                        </p>
                        <div className="banner-button">
                            <a href="" className="button button-smart">Devlivery NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header