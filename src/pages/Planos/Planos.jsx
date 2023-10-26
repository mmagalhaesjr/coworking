import { StyledPlanos, StyledPlanos2 } from "./styled"

import foto from '../../assets/foto-capa.jpg'


export default function Planos() {
    return (


        <>
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
                            <p>Valor da diária</p>
                            <p>R$ <span>55,00</span></p>

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
                                <p>R$</p><h3>280,00</h3>
                            </div>
                            <button>Contratar agora</button>

                        </div>
                    </div>

                </div>

                <div className="cxEstacao">

                    <div className="texto">
                        <div className="txt">
                            <h2> Estação de trabalho dedicada</h2>
                            <p>Acesso exclusivo à sua posição de trabalho fixa, <br />
                                em um ambiente compartilhado. </p>
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
                            <h2> Estação de trabalho dedicada</h2>
                            <p>Acesso exclusivo à sua posição de trabalho fixa, <br />
                                em um ambiente compartilhado. </p>
                            <p>A mesa dedicada é ideal para 1 pessoa e equipes reduzidas.</p>

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
                            <h2> Estação de trabalho dedicada</h2>
                            <p>Acesso exclusivo à sua posição de trabalho fixa, <br />
                                em um ambiente compartilhado. </p>
                            <p>A mesa dedicada é ideal para 1 pessoa e equipes reduzidas.</p>

                            <div className="valor">
                                <p>R$</p><h3>280,00</h3>
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