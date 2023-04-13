import React from "react";



function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="about-img">
                            <img src="./img/pizza.jpg" alt="Pizza" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>The Pizza Menu</h3>
                        <h1>CHICAGO THI CRUST</h1>
                        <p>
                            investigationes demonstraverunt lectores legere me lius quod ii legunt
                            saepius. Claritas est etiam processus dynaus, quise sequitus
                            mustationem consuetudium lectorum.
                        </p>
                        <div className="about-button">
                            <a href="" className="button about-smart">VIEW MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About