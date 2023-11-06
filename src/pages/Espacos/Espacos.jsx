
import { StyledEspacos } from './styled';

import foto1 from '../../assets/dedicadas/3.jpeg'
import foto2 from '../../assets/compartilhadas/4.jpeg'
import foto3 from '../../assets/reuniao/3.png'
import foto4 from '../../assets/privadas/1.jpeg'
import foto5 from '../../assets/atendimento/2.jpg'

import { Navigation, Pagination, A11y} from 'swiper/modules';
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
                    Um espaço de trabalho compartilhado
                    que valoriza a qualidade e a elegância
                    em seu design e funcionalidade.
                </h1>
            </div>

            <div id="container">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={window.innerWidth < 940 ? 1 : 3}
                >
                    <SwiperSlide>
                            <a href="/dedicada">
                                <div className="salas">
                                    <img src={foto1} alt='' />
                                    <h3>Estação de Trabalho Dedicada</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="/compartilhada" >
                                <div className="salas">
                                    <img src={foto2} alt='' />
                                    <h3>Estação de Trabalho Rotativa</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="/reuniao">
                                <div className="salas">
                                    <img src={foto3} alt='' />
                                    <h3>Sala de Reunião</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="/atendimento">
                                <div className="salas">
                                    <img src={foto5} alt='' />
                                    <h3>Sala para Atendimento</h3>
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

                        
                        

                </Swiper>
            </div>
        </StyledEspacos>
    );
};

export default Espacos;

