import { StyledSAtendimento } from "./styled";

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
import foto2 from '../../../assets/atendimento/2.webp'
import foto3 from '../../../assets/atendimento/3.webp'
import foto4 from '../../../assets/atendimento/4.webp'



import Cabecalho2 from "../../../components/Cabecalho2/Cabecalho2";
import IconesCadaEspacos from '../../../components/IconesCadaEspacos/IconesCadaEspacos'
import Rodape from "../../../components/Rodape/Rodape";



export default function SAtendimento() {



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //-----------------------------------mover para contato
   


    return (

        <>
            <Helmet>
                <title>sala de atendimento</title>
                <meta name="description" content=" proporcionamos ambientes ideais para profissionais que buscam espaços dedicados para atendimento. Se você é psicólogo ou realiza atendimentos em geral, nossas salas oferecem o ambiente perfeito para suas necessidades. " />
            </Helmet>

            <Cabecalho2 />
            <StyledSAtendimento>

                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                <div id="container">

                    <div id="containerTexto">
                        <div id="texto">
                            <h1 id="titulo">Sala para Atendimento</h1>
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

          <IconesCadaEspacos/>
            <Rodape />

        </>
    )
}