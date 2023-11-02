import { StyledEventos, StyledEventos2, StyledEventos3 } from "./styled"
import Cabecalho2 from "../../components/Cabecalho2/Cabecalho2"

import { FaWhatsapp } from 'react-icons/fa';


import foto from '../../assets/capa/6.jpeg'
import Formulario from "../../components/Formulario/Formulario";


export default function Eventos() {


    return (

        <>
            <Cabecalho2 />
            <StyledEventos >

                <div id="container">
                    <div id="cxTexto">
                        <h2>
                            O <span>Temasek Coworking</span> recebe você e seus
                            parceiros de trabalho e amigos para happy hour,
                            reuniões mais descontraídas, workshops,
                            treinamentos e celebrações de fim de ano!
                        </h2>
                    </div>
                    <div id="cxVideo">

                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7t3Uky-dKLE?si=uotXoqRu1Q6M0Y5_" 
                    title="YouTube video player" frameBorder="0" allow="accelerometer; 
                    autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>
                </div>

            </StyledEventos>

            <StyledEventos2>
                <div id="container">
                    <div id="cxTexto">
                        <h2>
                            Nossos espaços contam com equipamentos
                            audiovisuais e uma equipe de prontidão que te
                            oferece suporte, além de uma rede de serviços
                            completa para o evento da sua empresa.
                        </h2>
                    </div>
                    <div id="cxImg">
                        <div className="faixa">
                            <p>
                                Segunda à sexta, a partir das 20h
                            </p>
                            <p>
                                Sábados e domingos a partir das 8h
                            </p>
                        </div>
                        <img src={foto} alt="" />

                    </div>
                </div>
            </StyledEventos2>

            <StyledEventos3>
                <div id="container">
                    <div id="cxTexto">
                        <h2>
                            Planeje seu próximo evento com o Temasek Coworking
                        </h2>
                    </div>

                    <div id="cxForm">

                        <div className="cxForm">

                            <div className="texto">
                                <h2>
                                    Reserve <br />
                                    nosso espaço <br />
                                    para a sua <br />
                                    celebração! <br />
                                </h2>
                                <p>
                                    Entre em contato <br />
                                    conosco para garantir <br />
                                    a sua reserva <br />
                                </p>

                                <div className="botao">
                                    <FaWhatsapp />
                                    <h3>whatsApp</h3>
                                </div>
                            </div>

                        </div>

                        <Formulario />

                    </div>

                </div>

            </StyledEventos3>


        </>
    )
}