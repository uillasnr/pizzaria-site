import React from "react";



function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="about-img">
                            <img src="./img/pizza69.png" alt="Pizza" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>The Pizza Menu</h3>
                        <h1>Tradição e Qualidade</h1>
                        <p>
                            Na Lelluca Pizzaria, tudo é pensado para que você tenha a melhor e
                            mais autêntica experiência de saborear uma verdadeira pizza com
                            a família e os amigos. Nosso segredo é abusar dos ingredientes
                            especiais para enriquecer o sabor para simplesmente deixar sua
                            noite mais completa.

                          {/*   Nosso cardápio apresenta excelentes pizzas com recheios exclusivos e inovadores, que
                            combinados com a massa sempre crocante, criando as mais saborosas pizzas de São Paulo. */}
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