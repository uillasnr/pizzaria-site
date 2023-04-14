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
                            Bem-vindo à nossa pizzaria e delivery, onde a qualidade e o sabor são a nossa prioridade
                            número um! 
                            Somos apaixonados por pizza e estamos comprometidos em oferecer aos nossos clientes a melhor
                            experiência gastronômica possível. Preparamos cada pizza com ingredientes frescos e
                            selecionados, garantindo um sabor autêntico e delicioso em cada mordida.
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