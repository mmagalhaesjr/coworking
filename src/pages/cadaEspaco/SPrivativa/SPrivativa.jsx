import { StyledSPrivativa } from "./styled";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect } from "react";
import { EffectCreative, Navigation, Pagination, A11y } from 'swiper/modules';
import { Helmet } from "react-helmet";

import { BsFillPersonFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import foto1 from '../../../assets/privadas/1.webp'
import foto2 from '../../../assets/privadas/2.webp'
import foto3 from '../../../assets/privadas/3.webp'
import foto4 from '../../../assets/privadas/4.webp'


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import IconesCadaEspacos from '../../../components/IconesCadaEspacos/IconesCadaEspacos'
import Rodape from '../../../components/Rodape/Rodape';


export default function SPrivativa() {



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //-----------------------------------mover para contato
   

    return (

        <>
            <Helmet>
                <title>sala privativa</title>
                <meta name="description" content=" proporcionamos ambientes ideais para profissionais que buscam espaços privado para reuniões ou trabalhar em um espaço privado .nossas salas oferecem o ambiente perfeito para suas necessidades. " />
            </Helmet>

            <Cabecalho2 />
            <StyledSPrivativa>

                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                <div id="container">

                    <div id="containerTexto">
                        <div id="texto">
                            <h1 id="titulo">Salas Privativas</h1>
                            <h2>
                                As Salas <span> Roma e Londres</span> são preparadas para realizar qualquer tipo de reunião.
                                Possui design moderno e intimista.
                            </h2>

                            <div> <h4>Sala Londres</h4> <BsFillPersonFill /> <h4>4   </h4></div>
                            <div> <h4>Sala Roma</h4> <BsFillPersonFill /> <h4>4   </h4></div>

                            <h3>Vantagens</h3>
                            <ul>
                                <li>Ambiente climatizado e Wifi de alta velocidade</li>
                                <li>Horas na Sala de Reunião </li>
                                <li>Reserve o dia que deseja trabalhar, sem compromisso mensal</li>
                                <li>Impressão e digitalização de documentos e arquivos </li>
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
                                <SwiperSlide><img className="foto" src={foto1} alt="coworking" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto2} alt="coworking" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto3} alt="coworking" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto4} alt="coworking" /></SwiperSlide>


                            </Swiper>


                        </div>
                    </div>
                </div>
            </StyledSPrivativa>

        
            <IconesCadaEspacos/>
            <Rodape />

        </>
    )
}