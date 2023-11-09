import { StyledEventos, StyledEventos2, StyledEventos3 } from "./styled"
import Cabecalho2 from "../../components/Cabecalho2/Cabecalho2"

import { FaWhatsapp } from 'react-icons/fa';

import Formulario from "../../components/Formulario/Formulario";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCreative, Navigation, Pagination, A11y } from 'swiper/modules';

import foto1 from '../../assets/fotoNoite/1.webp'
import foto2 from '../../assets/fotoNoite/2.webp'
import foto3 from '../../assets/fotoNoite/3.webp'
import foto4 from '../../assets/fotoNoite/4.webp'
import Rodape from '../../components/Rodape/Rodape';



export default function Eventos() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (



        <>
            <Cabecalho2 />
            <StyledEventos >

                <div id="container">
                    <div id="cxTexto">
                        <h2>
                            O <span>Temasek Coworking </span>
                            recebe você, seus amigos e parceiros
                            de trabalho para treinamentos, reuniões,
                            coquetéis, lançamentos, workshops e celebrações.
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
                            Nosso espaço possui 287 metros quadrados
                            que contam com 58 cadeiras e mesas,
                            além de uma copa e banheiros feminino e masculino.
                            O ambiente é climatizado e possui serviço de recepção e wifi de alta velocidade.
                        </h2>
                    </div>

                    <section>
                        <div id="cxHorario">
                            <div className="horarios">
                                <div className="hora">
                                    <h2>Eventos de segunda a quinta-feira das 20h às 01h.</h2>
                                    <h2>Eventos sexta-feira das 20h às 02h</h2>
                                    <h2>Eventos sábado e domingo das 08h às 18h.</h2>
                                    <h2>Eventos sábado das 19h às 02h.</h2>
                                    <h2>Eventos domingo das 19h às 01h.</h2>
                                </div>
                            </div>
                        </div>

                        <div className="fotos">
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
                                <SwiperSlide><img className="foto" src={foto1} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto2} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto3} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto4} alt="" /></SwiperSlide>

                            </Swiper>
                        </div>
                    </section>

                </div>
            </StyledEventos2>

            <StyledEventos3>
                <div id="container">
                    <div id="cxTexto">
                        <h2>
                            Reserve
                            nosso espaço
                            para a sua
                            celebração!
                        </h2>
                    </div>

                    <div id="cxForm">

                        <div className="cxForm">

                            <div className="texto">
                                <h2>
                                    Entre em contato <br />
                                    conosco para garantir <br />
                                    a sua reserva <br />

                                </h2>
                                <p>



                                </p>


                            </div>
                            <a className="botao" href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer">
                                <FaWhatsapp />
                                <h3>WhatsApp</h3>
                            </a>
                        </div>

                        <Formulario />

                    </div>

                </div>

            </StyledEventos3>

            <Rodape />
        </>
    )
}