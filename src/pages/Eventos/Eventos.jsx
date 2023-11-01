import { StyledEventos, StyledEventos2, StyledEventos3 } from "./styled"
import Cabecalho2 from "../../components/Cabecalho2/Cabecalho2"


import foto from '../../assets/capa/sala1.jpg'
import Formulario from "../../components/Formulario/Formulario";

export default function Eventos() {


    return (

        <>
            <Cabecalho2 />
            <StyledEventos >

                <div id="container">
                    <div id="cxTexto">
                        <h2>
                            O Temasek Coworking recebe você e seus
                            parceiros de trabalho e amigos para happy hour,
                            reuniões mais descontraídas, workshops,
                            treinamentos e celebrações de fim de ano!
                        </h2>
                    </div>
                    <div id="cxVideo">

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

                            </div>

                        </div>

                        <Formulario />

                    </div>

                </div>

            </StyledEventos3>


        </>
    )
}