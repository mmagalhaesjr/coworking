import { StyledInicial } from "./styled";

// import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import foto from '../../assets/capa/1.jpg'
import foto2 from '../../assets/capa/2.jpg'
import foto3 from '../../assets/capa/3.jpg'



export default function Inicial() {



    return (

        <StyledInicial>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, A11y]}

                pagination={{ clickable: true }}
                slidesPerView={window.innerWidth < 600 ? 1 : 1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                navigation={true}
                effect="fade"
                speed={3000}

                className="mySwiper"
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
                        {/* <div id="titulo">
                            <h1 >
                                O mais novo espaço de trabalho
                            </h1>

                        </div> */}

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="salas">
                        <img src={foto3} alt='' />
                        {/* <div id="titulo">
                            <h1 >
                                O mais novo espaço de trabalho
                            </h1>

                        </div> */}

                    </div>

                </SwiperSlide>


            </Swiper>




            {/* <div id='setas'>
                <BsFillArrowLeftCircleFill />
                <BsFillArrowRightCircleFill />
            </div> */}



        </StyledInicial>
    )
}