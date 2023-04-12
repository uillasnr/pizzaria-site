import React from "react";



function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About Us</h3>
                        <h1>WELCOME TO MAESTRO PIZZINNI</h1>
                        <p>
                            investigationes demonstraverunt lectores legere me lius quod ii legunt
                            saepius. Claritas est etiam processus dynaus, quise sequitus
                            mustationem consuetudium lectorum.
                        </p>
                        <div className="about-button">
                            <a href="" className="button about-smart">READ MORE</a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about-img">
                            <img src="./img/pizza.jpg" alt="Pizza" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About