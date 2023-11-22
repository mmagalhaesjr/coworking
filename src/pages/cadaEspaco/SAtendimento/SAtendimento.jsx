import { StyledSAtendimento, Styled2 } from "./styled";
import { BsFillPersonFill } from 'react-icons/bs';

import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../../contexts/HomeContext"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { EffectCreative, Navigation, Pagination, A11y } from 'swiper/modules';

import { BsWhatsapp } from 'react-icons/bs';

import foto2 from '../../../assets/atendimento/2.webp'
import foto3 from '../../../assets/atendimento/3.webp'
import foto4 from '../../../assets/atendimento/4.webp'

import ico1 from '../../../assets/icones/concierge.png'
import ico2 from '../../../assets/icones/tel.png'
import ico3 from '../../../assets/icones/ar.png'
import ico4 from '../../../assets/icones/cozinha.png'
import ico5 from '../../../assets/icones/facial.png'
import ico6 from '../../../assets/icones/correspondencia.png'
import ico7 from '../../../assets/icones/local.png'
import ico8 from '../../../assets/icones/contas.png'
import ico9 from '../../../assets/icones/limpeza.png'
import ico10 from '../../../assets/icones/seguranca.png'
import ico11 from '../../../assets/icones/recepcao.png'
import ico12 from '../../../assets/icones/armarios.png'

import icone1 from '../../../assets/icones2/empresas.png'
import icone2 from '../../../assets/icones2/freelancer.png'
import icone3 from '../../../assets/icones2/startup.png'
import icone4 from '../../../assets/icones2/remotas.png'

import Cabecalho2 from "../../../components/Cabecalho2/Cabecalho2";
import Rodape from "../../../components/Rodape/Rodape";


export default function SAtendimento() {

    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //-----------------------------------mover para contato
    const navegar = useNavigate()
    const { setHomeComponent} = useContext(HomeContext)
    const contato = () => {
        setHomeComponent('contato')
        navegar('/');
    };


    return (

        <>
        <Cabecalho2/>
            <StyledSAtendimento>

            <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                <div id="container">
                    
                    <div id="containerTexto">
                        <div id="texto">
                            <h1>Sala para Atendimento</h1>
                            <h2>
                                A <span>Sala Paris </span> é ideal para atendimentos de profissionais como: terapeutas, psicólogos, fonoaudiólogos,
                                dentre outros.
                            </h2>

                            <div> <h4>Sala Paris</h4> <BsFillPersonFill /> <h4>4</h4></div>


                            <h3>Vantagens</h3>
                            <ul>
                                <li>Ambiente climatizado e Wifi de alta velocidade</li>
                                <li>Possui um divã e duas poltronas</li>
                                <li>Reserve o dia que deseja trabalhar, sem compromisso mensal</li> 
                                <li>Impressão e digitalização de documentos e arquivos</li>
                            </ul>
                        </div>
                    </div>

                    <div id="containerFoto">

                        <div id="cor" >

                            <Swiper
                                modules={[EffectCreative, Navigation, Pagination, A11y]}
                                navigation
                                grabCursor={true}
                                effect={'creative'}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                    },
                                }}

                                className="swiper-slide"
                            >
                                <SwiperSlide><img className="foto" src={foto2} alt="coworking" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto3} alt="coworking" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto4} alt="coworking" /></SwiperSlide>


                            </Swiper>


                        </div>

                    </div>


                </div>


            </StyledSAtendimento>

            <Styled2>
                <div id="container">
                    <div id="titulo">
                        <h1>Conheça nossa infraestrutura e serviços:</h1>
                    </div>
                    <div id="container1">
                        <div className="cxImg">
                            <img src={ico1} alt="icone"/>
                            <p>Serviço de Concierge</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico2} alt="icone" />
                            <p>Linha telefônica privativa</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico3} alt="icone" />
                            <p>Ambiente climatizado</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico4} alt="icone" />
                            <p>Cozinha compartilhada</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico5} alt="icone" />
                            <p>Acesso com leitor facial</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico6} alt="" />
                            <p>Gerenciamento de correspondência</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico7} alt="icone" />
                            <p>Endereço fiscal e comercial</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico8} alt="icone" />
                            <p>Contas essenciais inclusas</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico9} alt="icone" />
                            <p>Limpeza e manutenção</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico10} alt="icone" />
                            <p>Segurança 24h</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico11} alt="icone" />
                            <p>Recepção</p>
                        </div>
                        <div className="cxImg">
                            <img src={ico12} alt="icone" />
                            <p>Armários</p>
                        </div>


                    </div>
                    <div id="container2">

                        <h2>
                            Encontre a solução ideal para seu negócio
                        </h2>

                        <div className="box">

                            <div className="cxIcone">
                                <img src={icone1} alt="icone"/>
                                <p>Empresas</p>
                            </div>
                            <div className="cxIcone">
                                <img src={icone2} alt="icone" />
                                <p>Autônomos</p>
                            </div>

                            <div className="cxIcone">
                                <img src={icone3} alt="icone" />
                                <p>Startups</p>
                            </div>

                            <div className="cxIcone">
                                <img src={icone4} alt="icone" />
                                <p>Empresas remotas</p>
                            </div>

                        </div>



                        <div id="texto">

                            <p>
                                Entre em contato
                                conosco e agende uma visita
                                para conhecer nosso espaço e serviços!
                            </p>
                            <button onClick={contato}>
                                Agende uma visita
                            </button>

                        </div>



                    </div>
                </div>

            </Styled2>

            <Rodape/>

        </>
    )
}