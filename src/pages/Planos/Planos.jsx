import { StyledPlanos, StyledPlanos2 } from "./styled"

import foto from '../../assets/foto-capa.jpg'
import Cabecalho2 from "../../components/Cabecalho2/Cabecalho2"



export default function Planos() {
    return (


        <>
            <Cabecalho2 />
            <StyledPlanos >

                <div id="container" >
                    <img src={foto} alt="" />
                    <div id="texto">
                        <h2>Espaços de trabalho flexíveis</h2>
                        <p>
                            O Temasek Coworking se adapta à todas as formas e jornadas <br />
                            de trabalho, com todos os serviços de um escritório completo.
                        </p>
                    </div>

                    <div id="cxDayUse">

                        <div id="dayUseTexto">
                            <h1>Day use</h1>
                            <p>
                                Garanta uma diária no nosso espaço <br />
                                e conheça as nossas vantagens!
                            </p>

                        </div>

                        <div id="circulo">
                            <h3>Valor da diária</h3>
                            <div>
                                <p>R$ </p><h2>55,00</h2>
                            </div>

                        </div>

                    </div>

                </div>

            </StyledPlanos>

            <StyledPlanos2>

                <div id="titulo">
                    <h1>Conheça os nossos planos</h1>
                </div>

                <div className="cxEstacao">

                    <div className="img"></div>
                    <div className="texto">
                        <div className="txt">
                            <h2> Estação de trabalho dedicada</h2>
                            <p>Acesso exclusivo à sua posição de trabalho fixa, <br />
                                em um ambiente compartilhado. </p>
                            <p>A mesa dedicada é ideal para 1 pessoa e equipes reduzidas.</p>

                            <div className="valor">
                                <p>R$</p><h3>800,00</h3>
                            </div>
                            <button>Contratar agora</button>

                        </div>
                    </div>

                </div>

                <div className="cxEstacao">

                    <div className="texto">
                        <div className="txt">
                            <h2> Estação de trabalho rotativa </h2>
                            <p>Acesso diário a uma mesa compartilhada em um espaço <br />
                                comum com toda a estrutura do Temasek Coworking. </p>
                            <p>A mesa dedicada é ideal para 1 pessoa e equipes reduzidas.</p>

                            <div className="valor">
                                <p>R$</p><h3>280,00</h3>
                            </div>
                            <button>Contratar agora</button>

                        </div>
                    </div>
                    <div className="img"></div>

                </div>

                <div className="cxEstacao">

                    <div className="img"></div>
                    <div className="texto">
                        <div className="txt">
                            <h2>Sala Privativa</h2>
                            <p>
                                A Sala Roma é preparada para realizar qualquer tipo de reunião. <br />
                                Ideal para trabalhar e organizar reuniões e treinamentos.
                            </p>
                            <p>Sala ideal para 1 a 4 pessoas.</p>

                            <div className="valor">
                                <p>R$</p><h3>280,00</h3>
                            </div>
                            <button>Contratar agora</button>

                        </div>
                    </div>

                </div>

                <div className="cxEstacao">


                    <div className="texto">
                        <div className="txt">
                            <h2>Salas de Reunião</h2>
                            <p>Acesso exclusivo à sua posição de trabalho fixa, <br />
                                em um ambiente compartilhado. </p>
                            <p>.</p>

                            <div className="valor">
                                <p>R$</p><h3>0,00</h3>
                            </div>
                            <button>Contratar agora</button>

                        </div>
                    </div>
                    <div className="img"></div>
                </div>

                <div className="cxEstacao">

                    <div className="img"></div>
                    <div className="texto">
                        <div className="txt">
                            <h2>Sala Privativa</h2>
                            <p>
                                A Sala Roma é preparada para realizar qualquer tipo de reunião. <br />
                                Ideal para trabalhar e organizar reuniões e treinamentos.
                            </p>
                            <p>Sala ideal para 1 a 4 pessoas.</p>

                            <div className="valor">
                                <p>R$</p><h3>280,00</h3>
                            </div>
                            <button>Contratar agora</button>

                        </div>
                    </div>

                </div>

                <div className="cxEstacao">


                    <div className="texto">
                        <div className="txt">
                            <h2>Salas de Reunião</h2>
                            <p>Acesso exclusivo à sua posição de trabalho fixa, <br />
                                em um ambiente compartilhado. </p>
                            <p>.</p>

                            <div className="valor">
                                <p>R$</p><h3>0,00</h3>
                            </div>
                            <button>Contratar agora</button>

                        </div>
                    </div>
                    <div className="img"></div>
                </div>

            </StyledPlanos2>
        </>
    )
}