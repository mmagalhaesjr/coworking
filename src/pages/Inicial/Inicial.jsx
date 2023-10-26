import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import { StyledInicial } from "./styled";



import {  Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import foto from '../../assets/foto-capa.jpg'
import foto2 from '../../assets/sala2.png'



export default function Inicial() {


    
    return (

        <StyledInicial>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
              
                pagination={{ clickable: true }}
                slidesPerView={window.innerWidth < 600 ? 1 : 1}
            >
                <SwiperSlide>

                    <div className="salas">
                        <img src={foto} alt='' />

                        <div id="titulo">
                        <h1 >
                            O mais novo espaço de trabalho
                        </h1>

                    </div>

                    </div>
                    

                </SwiperSlide>
                <SwiperSlide>

                    <div className="salas">
                        <img src={foto2} alt='' />
                        <div id="titulo">
                        <h1 >
                            O mais novo espaço de trabalho
                        </h1>

                    </div>

                    </div>

                </SwiperSlide>


            </Swiper>




            <div id='setas'>
                <BsFillArrowLeftCircleFill />
                <BsFillArrowRightCircleFill />
            </div>



        </StyledInicial>
    )
}