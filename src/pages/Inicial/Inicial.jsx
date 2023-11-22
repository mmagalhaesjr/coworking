import { StyledInicial } from "./styled";

// import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css/effect-creative';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';

import foto1 from '../../assets/capa/foto1.webp'
import foto2 from '../../assets/capa/sala2.webp'
import foto3 from '../../assets/capa/sala3.webp'
import foto4 from '../../assets/capa/sala4.webp'



export default function Inicial() {
    

    return (

        <StyledInicial>
            <Swiper

                pagination={{ clickable: true }}
                slidesPerView={window.innerWidth < 600 ? 1 : 1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                effect={'fade'}
                navigation={true}
                speed={5000}

                className="salas"
                modules={[Autoplay, Navigation, Pagination, A11y]}
            >
                <SwiperSlide>

                    <div id="sala1" className="salas">
                        <img src={foto1} alt='' />

                    </div>


                </SwiperSlide>
                <SwiperSlide>

                    <div id="sala2" className="salas">
                        <img src={foto2} alt='' />
                       

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div id="sala3" className="salas">
                        <img src={foto3} alt='' />
                        

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div id="sala3" className="salas">
                        <img src={foto4} alt='' />
                        

                    </div>

                </SwiperSlide>

            </Swiper>


        </StyledInicial>
    )
}