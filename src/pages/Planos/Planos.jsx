import { StyledPlanos, StyledPlanos2 } from "./styled"
import { useState, useEffect } from "react";

import { CgArrowLongRight } from 'react-icons/cg';
import foto from '../../assets/capa/sala1.jpg'
import foto1 from '../../assets/espacos/dedicada.jpg'
import foto2 from '../../assets/espacos/compartilhada.png'
import foto3 from '../../assets/espacos/reuniao.jpg'
import foto4 from '../../assets/espacos/privada.jpeg'
import foto5 from '../../assets/espacos/atendimento.jpg'


import Cabecalho2 from "../../components/Cabecalho2/Cabecalho2"

export default function Planos() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    return (

        <>
            <Cabecalho2 />
            <StyledPlanos className={scrollY > 150 ? 'rolagem' : ''} >

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
                                <p>R$ </p><h2>120,00</h2>
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
                    <div className="img">
                        <img src={foto1} alt="" />
                    </div>
                    <div className="texto">
                        <div className="txt">
                            <h2> Estação de trabalho dedicada</h2>
                            <p>Acesso exclusivo à sua posição de trabalho fixa, <br />
                                em um ambiente compartilhado. </p>
                            <p>A mesa dedicada é ideal para 1 pessoa e equipes reduzidas.</p>

                            <section>
                                <div className="valor">
                                    <h4>Mensal</h4>
                                    <div>
                                        <p>R$</p><h3>800,00</h3>
                                    </div>
                                </div>

                                <button>
                                    <h5>Contratar agora  </h5>
                                    <div className="icone">
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>
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

                            <section>
                                <div className="valor">
                                    <h4>Planos a partir de</h4>
                                    <div>
                                        <p>R$</p><h3>90,00</h3>
                                    </div>
                                </div>
                                <button>
                                    <h5>Contratar agora  </h5>
                                    <div className="icone">
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                    <div className="img">
                        <img src={foto2} alt="" />
                    </div>
                </div>

                <div className="cxEstacao">
                    <div className="img">
                        <img src={foto3} alt="" />
                    </div>
                    <div className="texto">
                        <div className="txt">
                            <h2>Sala Nova York</h2>
                            <p>
                                Sala de reunião para receber seus clientes e parceiros,
                                com tratamento acústico, climatizada, com televisão e
                                equipamento de áudio e vídeo
                            </p>
                            <p></p>
                            <section>
                                <div className="valor">
                                    <h4>Por hora</h4>
                                    <div>
                                        <p>R$</p><h3>100,00</h3>
                                    </div>
                                </div>
                                <button>
                                    <h5>Contratar agora  </h5>
                                    <div className="icone">
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>

                        </div>
                    </div>
                </div>

                <div className="cxEstacao">
                    <div className="texto">
                        <div className="txt">
                            <h2>Salas Paris</h2>
                            <p>
                                Sala para atendimento com tratamento acústico,
                                climatizada e com equipamento de áudio e vídeo.
                                Possui 2 poltronas e 1 divã
                            </p>
                            <p>.</p>
                            <section>
                                <div className="valor">
                                    <h4>Pacote com 10h</h4>
                                    <div>
                                        <p>R$</p><h3>400,00</h3>
                                    </div>
                                </div>
                                <button>
                                    <h5>Contratar agora  </h5>
                                    <div className="icone">
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                    <div className="img">
                        <img src={foto4} alt="" />
                    </div>
                </div>

                <div className="cxEstacao">
                    <div className="img">
                        <img src={foto5} alt="" />
                    </div>
                    <div className="texto">
                        <div className="txt">
                            <h2>Sala Londres</h2>
                            <p>
                                Sala de reunião para receber seus clientes e parceiros,
                                com tratamento acústico, climatizada, com televisão e
                                equipamento de áudio e vídeo
                            </p>
                            <p>Sala ideal para 1 a 4 pessoas.</p>
                            <section>
                                <div className="valor">
                                    <h4>Por hora</h4>
                                    <div>
                                        <p>R$</p><h3>80,00</h3>
                                    </div>
                                </div>
                                <button>
                                    <h5>Contratar agora  </h5>
                                    <div className="icone">
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="cxEstacao">
                    <div className="texto">
                        <div className="txt">
                            <h2>Salas Roma</h2>
                            <p>
                                É preparada para realizar qualquer tipo de reunião. <br />
                                Possui design moderno e intimista. Comporta até 4 pessoas
                            </p>
                            <p>.</p>
                            <section>
                                <div className="valor">
                                    <h4>mensal</h4>
                                    <div>
                                        <p>R$</p><h3>800,00</h3>
                                    </div>
                                </div>
                                <button>
                                    <h5>Contratar agora  </h5>
                                    <div className="icone">
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                    <div className="img">
                        <img src={foto5} alt="" />
                    </div>
                </div>

            </StyledPlanos2>
        </>
    )
}