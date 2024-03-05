import { StyledPlanos, StyledPlanos2 } from "./styled"
import { useState, useEffect, useContext } from "react";

import { CgScreen } from 'react-icons/cg';
import { BsPersonFill } from 'react-icons/bs';
import { LuArmchair } from 'react-icons/lu';
import { HiWifi } from 'react-icons/hi';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { AiOutlineAudio } from 'react-icons/ai';
import { PiSnowflakeDuotone } from 'react-icons/pi';


import { CgArrowLongRight } from 'react-icons/cg';

import coworking from '../../assets/planos/c.png'
import temasek from '../../assets/planos/t.png'
// import foto from '../../assets/foto.webp'



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../assets/espacos/dedicada.webp'
import foto2 from '../../assets/espacos/compartilhada.webp'

import foto3 from '../../assets/espacos/reiniao.webp'
import foto4 from '../../assets/espacos/atendimento.webp'
import foto5 from '../../assets/privadas/3.webp'
import foto6 from '../../assets/privadas/1.webp'


import Cabecalho2 from "../../components/Cabecalho2/Cabecalho2"
import { useNavigate } from "react-router-dom";
import Rodape from '../../components/Rodape/Rodape';
import { HomeContext } from "../../contexts/HomeContext";

export default function Planos() {

    const [scrollY, setScrollY] = useState(0);
    const [pageLoaded, setPageLoaded] = useState(false);






    //---------------------------rolagem
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };


    //---------------------------carregada
    useEffect(() => {
        const handleLoad = () => {
            setPageLoaded(true);
        };

        if (document.readyState === "complete") {
            // Se o documento já estiver carregado, aciona manualmente handleLoad
            handleLoad();
        } else {
            // Se o documento ainda não estiver carregado, adiciona um ouvinte de eventos
            window.addEventListener("load", handleLoad);
        }

        // Limpa o ouvinte de eventos quando o componente é desmontado
        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);





    //---------------------------
    const navegar = useNavigate()
    const { setHomeComponent } = useContext(HomeContext)
    const contato = () => {
        setHomeComponent('contato')
        navegar('/');
    };

    //---------------------------
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //---------------------------


    return (

        <>
            <Cabecalho2 />

            <StyledPlanos className={`${scrollY > 150 ? 'rolagem' : ''}  ${pageLoaded ? 'paginaCarregada' : ''}`}>

                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                <div id="container" >

                    <img className="imgTemasek" src={temasek} alt="coworking" />
                    <img className="imgCoworking" src={coworking} alt="coworking" />

                    <div className="inicio">

                    </div>
                    <div id="texto">
                        {/* <h2>Espaços de trabalho flexíveis</h2> */}
                        <p>
                            O Temasek Coworking se adapta à todas as formas e jornadas
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
                                <p>R$ </p><h2>90,00</h2>
                            </div>

                        </div>

                        <div id="circuloMobile">
                            <h3>Valor da diária</h3>
                            <div>
                                <p>R$</p><h2>120,00</h2>
                            </div>

                        </div>

                    </div>

                </div>

            </StyledPlanos>

            <StyledPlanos2>

                <div id="titulo">
                    <h1>Conheça os nossos planos</h1>
                </div>

                {/* DEDICADA */}
                <div className="cxEstacao">
                    <div className="img">
                        <img src={foto2} alt="coworking" />
                    </div>
                    <div className="texto">
                        <div className="txt">
                            <h2> Estação de Trabalho Rotativa </h2>
                            <p>Acesso diário a uma mesa compartilhada em um espaço
                                comum com toda a estrutura do Temasek Coworking. </p>
                            <p>A mesa rotativa é ideal para 1 pessoa e equipes reduzidas.</p>
                            <section>
                                <div className="valor">
                                    <h4>Mensal</h4>
                                    <div>
                                        <p>R$</p><h3>200,00</h3>
                                    </div>
                                </div>
                                <button onClick={contato}>
                                    <h5>Contratar agora  </h5>
                                    <div className="icone" onClick={contato}>
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                    {/* foto */}
                </div>
                {/* ROTATIVA */}
                <div className="cxEstacao">
                    <div className="img">
                        <img src={foto1} alt="coworking" />
                    </div>
                    <div className="texto">
                        <div className="txt">
                            <h2> Estação de Trabalho Dedicada</h2>
                            <p>Acesso exclusivo à sua posição de trabalho fixa,
                                em um ambiente compartilhado. </p>
                            <p>A mesa dedicada é ideal para 1 pessoa e equipes reduzidas.</p>

                            <section>
                                <div className="valor">
                                    <h4>Mensal</h4>
                                    <div>
                                        <p>R$</p><h3>600,00</h3>
                                    </div>
                                </div>

                                <button onClick={contato}>
                                    <h5>Contratar agora  </h5>
                                    <div className="icone">
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>



                {/* PARIS */}
                <div className="cxEstacao">
                    <div className="img">
                        <img src={foto4} alt="coworking" />
                    </div>
                    <div className="texto">
                        <div className="txt">
                            <h2>Sala Paris</h2>
                            <p>
                                Sala para atendimento com isolamento acústico e
                                climatizada.
                                Possui 2 poltronas e 1 divã.
                            </p>
                            <div id="icones">
                                <div className="numeros"><BsPersonFill /><p>4</p> </div>
                                <div className="numeros"><LuArmchair /><p>3</p> </div>
                                { <div className="numeros">  </div> }
                                <PiSnowflakeDuotone />
                                <HiWifi />
                            </div>
                            <section>
                                <div className="valor">
                                    <h4>Por hora</h4>
                                    <div>
                                        <p>R$</p><h3>40,00</h3>
                                    </div>
                                </div>
                                <button onClick={contato}>
                                    <h5>Contratar agora  </h5>
                                    <div className="icone" >
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                    {/* foto */}
                </div>

                {/* NOVA YORK */}
                <div className="cxEstacao">
                    <div className="img">
                        <img src={foto3} alt="coworking" />
                    </div>
                    <div className="texto">
                        <div className="txt">
                            <h2>Sala Nova York</h2>
                            <p>
                                Sala de reunião para receber seus clientes e parceiros,
                                com isolamento acústico, climatizada, com televisão e
                                equipamento de áudio e vídeo.
                            </p>
                            <div id="icones">
                                <div className="numeros"><BsPersonFill /><p>10</p> </div>
                                <div className="numeros"><CgScreen /><p>55&quot;</p> </div>
                                <div className="numeros"> <AiOutlineAudio /> <AiOutlineVideoCameraAdd /> </div>
                                <PiSnowflakeDuotone />
                                <HiWifi />
                            </div>
                            <section>
                                <div className="valor">
                                    <h4>Por hora</h4>
                                    <div>
                                        <p>R$</p><h3>100,00</h3>
                                    </div>
                                </div>
                                <button /*className="indisponivel"*/ onClick={contato}>
                                    <h5>Contratar agora </h5>
                                    <div className="icone" >
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>

                        </div>
                    </div>
                </div>

               {/* ROMA */}
                <div className="cxEstacao">
                    <div className="img">
                        <img src={foto5} alt="coworking" />
                    </div>
                    <div className="texto">
                        <div className="txt">
                            <h2>Sala Roma</h2>
                            <p>
                                Sala privativa para receber seus clientes e parceiros,
                                com isolamento acústico, climatizada.
                                Possui design moderno e intimista.
                            </p>
                            <div id="icones">
                                <div className="numeros"><BsPersonFill /><p>4</p> </div>
                                <div className="numeros"> <AiOutlineAudio /> <AiOutlineVideoCameraAdd /> </div>
                                <PiSnowflakeDuotone />
                                <HiWifi />
                            </div>

                            <section>
                                <div className="valor">
                                    <h4>Mensal</h4>
                                    <div>
                                        <p>R$</p><h3>1.700,00</h3>
                                    </div>
                                </div>
                                <button onClick={''} className="indisponivel">
                                    <h5>Indisponivel </h5>
                                    <div className="icone">
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                    {/* foto */}
                </div>

                {/* LONDRES */}
                <div className="cxEstacao" >
                    <div className="img">
                        <img src={foto6} alt="coworking" />
                    </div>
                    <div className="texto">
                        <div className="txt">
                            <h2>Sala Londres</h2>
                            <p>
                                Sala privativa para receber seus clientes e parceiros,
                                com isolamento acústico, climatizada, com televisão e
                                equipamento de áudio e vídeo.
                            </p>

                            <div id="icones">
                                <div className="numeros"><BsPersonFill /><p>4</p> </div>
                                <div className="numeros"><CgScreen /><p>43&quot;</p> </div>
                                <div className="numeros"> <AiOutlineAudio /> <AiOutlineVideoCameraAdd /> </div>
                                <PiSnowflakeDuotone />
                                <HiWifi />
                            </div>

                            <section >
                                <div className="valor">
                                    <h4>Mensal</h4>
                                    <div >
                                        <p>R$</p><h3>1.950,00</h3>
                                    </div>
                                </div>
                                <button onClick={contato} >
                                    <h5 >Contratar agora  </h5>
                                    <div className="icone" >
                                        <CgArrowLongRight />
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>



            </StyledPlanos2>

            <Rodape />
        </>
    )
}