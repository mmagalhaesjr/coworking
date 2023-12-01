import { StyledMDedicada } from "./styled";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect } from "react";
import { EffectCreative, Navigation, Pagination, A11y } from 'swiper/modules';
import { Helmet } from "react-helmet";

import { BsWhatsapp } from 'react-icons/bs';
import foto2 from '../../../assets/dedicadas/1.webp'
import foto3 from '../../../assets/dedicadas/2.webp'
import foto1 from '../../../assets/dedicadas/3.webp'

import Cabecalho2 from "../../../components/Cabecalho2/Cabecalho2";
import IconesCadaEspacos from '../../../components/IconesCadaEspacos/IconesCadaEspacos'
import Rodape from "../../../components/Rodape/Rodape";



export default function MDedicada() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    //-----------------------------------mover para contato
   

    return (

        <>
            <Helmet>
                <title>mesas dedicadas</title>
                <meta name="description" content="Bem-vindo ao Temasek Coworking JF - aqui você encontra ambiente com mesas dedicadas" />
            </Helmet>
            
            <Cabecalho2 />
            <StyledMDedicada>

                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                <div id="container">

                    <div id="containerTexto">
                        <div id="texto">
                            <h1 id="titulo">Estação de Trabalho Dedicada </h1>
                            <h2>
                                Acesso exclusivo à sua posição fixa de trabalho, em um ambiente compartilhado.
                                Ideal para 1 pessoa e equipes reduzidas.
                            </h2>
                            <h3>Vantagens</h3>
                            <ul>
                                <li>Ambiente climatizado e Wifi de alta velocidade</li>
                                <li>Reserve o dia que deseja trabalhar, sem compromisso mensal</li>
                                <li>Horas na Sala de Reunião</li>
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


                            </Swiper>
                        </div>
                    </div>
                </div>

                

            </StyledMDedicada>

            <IconesCadaEspacos />
            <Rodape />
        </>

    )
}