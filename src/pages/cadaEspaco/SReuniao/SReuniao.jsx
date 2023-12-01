import { StyledSReuniao } from "./styled";

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
import foto2 from '../../../assets/reuniao/2.webp'
import foto3 from '../../../assets/reuniao/3.webp'
import foto4 from '../../../assets/reuniao/4.webp'


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import IconesCadaEspacos from '../../../components/IconesCadaEspacos/IconesCadaEspacos'
import Rodape from '../../../components/Rodape/Rodape';



export default function SReuniao() {



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //-----------------------------------mover para contato
   

    return (

        <>

            <Helmet>
                <title>sala de reunião</title>
                <meta name="description" content=" proporcionamos ambientes ideais para profissionais que buscam espaços privado para reuniões ou trabalhar em um espaço privado .nossas salas oferecem o ambiente perfeito para suas necessidades. " />
            </Helmet>

            <Cabecalho2 />
            <StyledSReuniao>

                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                <div id="container">

                    <div id="containerTexto">
                        <div id="texto">
                           <h1 id="titulo">Sala de Reunião</h1> 
                            <h2>
                                A Sala <span>Nova York </span> é preparada para realizar
                                qualquer tipo de reunião ou workshop. Ideal para trabalhar, organizar reuniões e treinamentos.
                            </h2>

                            <div><h4>Sala Nova York </h4> <BsFillPersonFill /> <h4>10</h4></div>

                            <h3>Vantagens</h3>
                            <ul>
                                <li>Ambiente climatizado e Wifi de alta velocidade</li>
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
                                <SwiperSlide><img className="foto" src={foto3} alt="coworking" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto2} alt="coworking" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto4} alt="coworking" /></SwiperSlide>


                            </Swiper>
                        </div>
                    </div>
                </div>


            </StyledSReuniao>


           
            <IconesCadaEspacos/>
            <Rodape />

        </>
    )
}