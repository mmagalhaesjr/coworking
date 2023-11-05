import { StyledServicos2 } from "./styled"


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { EffectCreative, Navigation, Pagination,A11y } from 'swiper/modules';

import foto1 from '../../assets/servicos/1.jpeg'

import foto3 from '../../assets/servicos/3.jpeg'
import foto4 from '../../assets/servicos/4.jpeg'
import carro from '../../assets/servicos/carro.jpeg'



export default function Servicos2() {
    return (
        <StyledServicos2 id="servicos">

            <div id="container">

                <div id="containerTxt" >

                    <div id="titulo">
                        <h1>
                            Oferecemos serviços exclusivos
                            para atender às necessidades
                            de todos os profissionais:
                        </h1>

                    </div>
                    <ul>
                        <li>Serviço de Concierge</li>
                        <li>Motorista executivo</li>
                        <li>Marketing digital </li>
                        <li>Gerenciamento de mídias sociais</li>
                        <li>Assessoria contábil</li>
                        <li>Linha telefônica privada</li>

                    </ul>
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
                                <SwiperSlide><img className="foto" src={carro} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto1} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto3} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="foto" src={foto4} alt="" /></SwiperSlide>

                            </Swiper>


                        </div>

                    </div>

            </div>



        </StyledServicos2>
    )
}