import { StyledMCompartilhada, Styled2 } from "./styled";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { EffectCreative, Navigation, Pagination,A11y } from 'swiper/modules';

import foto from '../../../assets/xicara.jpeg'


import ico1 from '../../../assets/icones/concierge.png'
import ico2 from '../../../assets/icones/telefone.png'
import ico3 from '../../../assets/icones/ar.png'
import ico4 from '../../../assets/icones/cozinha.png'
import ico5 from '../../../assets/icones/facial.png'
import ico6 from '../../../assets/icones/correspondencia.png'
import ico7 from '../../../assets/icones/local.png'
import ico8 from '../../../assets/icones/contas.png'
import ico9 from '../../../assets/icones/limpeza.png'
import ico10 from '../../../assets/icones/segurança.png'
import ico11 from '../../../assets/icones/recepçao.png'
import ico12 from '../../../assets/icones/armarios.png'

import icone1 from '../../../assets/icones2/empresas.png'
import icone2 from '../../../assets/icones2/freelancer.png'
import icone3 from '../../../assets/icones2/startup.png'
import icone4 from '../../../assets/icones2/remotas.png'


export default function MCompartilhada() {
    return (
        <>
            <StyledMCompartilhada>

                <div id="titulo">
                </div>

                <div id="container">
                    <div id="containerTexto">
                        <div id="texto">
                            <h1>Mesa compartilhada</h1>
                            <h2>
                                Acesso diário a uma mesa compartilhada <br /> em um espaço comum
                                com toda a
                                estrutura da nossa comunidade. Ideal para uma pessoa e equipes reduzidas.
                            </h2>
                            <h3>Vantagens</h3>
                            <ul>
                                <li>Reserve o dia que deseja trabalhar, sem compromisso mensal</li>
                                <li>Acesso a salas de reunião, com pagamento pelo uso</li>
                                <li>Wifi de alta velocidade e serviços de impressão</li>
                            </ul>
                        </div>
                    </div>

                    <div id="containerFoto">

                        <div id="cor" >

                            <Swiper
                             modules={[EffectCreative, Navigation, Pagination,A11y]}
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
                                <SwiperSlide><img className="foto" src={foto} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto} alt="" /></SwiperSlide>

                            </Swiper>


                        </div>

                    </div>

                </div>

                {/* <div className="faixa">

                    <div className="cxIcone">
                        <img src={icone1} alt="" />
                        <p>Empresas</p>
                    </div>
                    <div className="cxIcone">
                        <img src={icone2} alt="" />
                        <p>Freelancer e Autônomos</p>
                    </div>

                    <div className="cxIcone">
                        <img src={icone3} alt="" />
                        <p>Startups</p>
                    </div>

                    <div className="cxIcone">
                        <img src={icone4} alt="" />
                        <p>Empresas remotas</p>
                    </div>


                </div> */}

            </StyledMCompartilhada>

            <Styled2>
                <div id="titulo">
                    <h1>Conheça nossa infraestrutura e serviços:</h1>
                </div>
                <div id="container1">
                    <div className="cxImg">
                        <img src={ico1} alt="" />
                        <p>Serviço de Concierge</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico2} alt="" />
                        <p>Linha telefonica privativa</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico3} alt="" />
                        <p>Ambiente climatizado</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico4} alt="" />
                        <p>Cozinha compartilhada</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico5} alt="" />
                        <p>Acesso com leitor facial</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico6} alt="" />
                        <p>Gerenciamento de correspondência</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico7} alt="" />
                        <p>Endereço fiscal e comercial</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico8} alt="" />
                        <p>Contas essenciais inclusas</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico9} alt="" />
                        <p>Limpeza e manutenção</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico10} alt="" />
                        <p>Segurança 24h</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico11} alt="" />
                        <p>Recepção</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico12} alt="" />
                        <p>Armários</p>
                    </div>


                </div>
                <div id="container2">

                    <div className="box">

                        <div className="cxIcone">
                            <img src={icone1} alt="" />
                            <p>Empresas</p>
                        </div>
                        <div className="cxIcone">
                            <img src={icone2} alt="" />
                            <p>Freelancer e Autônomos</p>
                        </div>

                        <div className="cxIcone">
                            <img src={icone3} alt="" />
                            <p>Startups</p>
                        </div>

                        <div className="cxIcone">
                            <img src={icone4} alt="" />
                            <p>Empresas remotas</p>
                        </div>

                    </div>



                    <div id="texto">
                        <h2>
                            Encontre a solução ideal para seu negócio
                        </h2>
                        <p>
                            Entre em contato
                            conosco e agende uma visita
                            para conhecer nosso
                            espaço e serviços!
                        </p>
                        <button>
                            Agede uma visita
                        </button>

                    </div>



                </div>
            </Styled2>

        </>
    )
}