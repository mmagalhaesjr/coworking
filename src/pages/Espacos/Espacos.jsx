
import { StyledEspacos } from './styled';
import foto1 from '../../assets/cores/1.png';
import foto2 from '../../assets/cores/2.png';
import foto3 from '../../assets/cores/3.png';
import foto4 from '../../assets/cores/4.png';
import foto5 from '../../assets/cores/5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Espacos = () => {
    return (
        <StyledEspacos id="espacos">
            <div id="titulos">
                <h1>
                    Um espaço de trabalho compartilhado que valoriza a simplicidade e a elegância em seu design e funcionalidade.
                </h1>
            </div>

            <div id="container">
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                >
                    <nav>
                        <SwiperSlide>
                            <a href="/compartilhada">
                                <div className="salas">
                                    <img src={foto1} alt='' />
                                    <h3>Mesa compartilhada</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="/dedicada">
                                <div className="salas">
                                    <img src={foto2} alt='' />
                                    <h3>Mesa dedicada</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="/atendimento">
                                <div className="salas">
                                    <img src={foto3} alt='' />
                                    <h3>Salas de atendimento</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="/privativa" >
                                <div className="salas">
                                    <img src={foto4} alt='' />
                                    <h3>Salas Privativas</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="/reuniao">
                                <div className="salas">
                                    <img src={foto5} alt='' />
                                    <h3>Salas de reunião</h3>
                                </div>
                            </a>
                        </SwiperSlide>
                    </nav>
                </Swiper>
            </div>
        </StyledEspacos>
    );
};

export default Espacos;

