
import { StyledEspacos } from './styled';



import foto1 from '../../assets/espaços/dedicada.jpg'
import foto2 from '../../assets/espaços/compartilhada.png'

import foto from '../../assets/sala2.png'


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
                    slidesPerView={window.innerWidth < 600 ? 1 : 3}
                >
                    <SwiperSlide>
                            <a href="/dedicada">
                                <div className="salas">
                                    <img src={foto1} alt='' />
                                    <h3>Mesas Dedicadas</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="/compartilhada" >
                                <div className="salas">
                                    <img src={foto2} alt='' />
                                    <h3>Mesas Compartilhadas</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="/reuniao">
                                <div className="salas">
                                    <img src={foto} alt='' />
                                    <h3>Salas de Reunião</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="/privativa" >                               
                            <div className="salas">
                                    <img src={foto} alt='' />
                                    <h3>Sala Privativa</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        
                        <SwiperSlide>
                            <a href="/atendimento">
                                <div className="salas">
                                    <img src={foto} alt='' />
                                    <h3>Sala para Atendimento</h3>
                                </div>
                            </a>
                        </SwiperSlide>

                        

                       
                    
                </Swiper>
            </div>
        </StyledEspacos>
    );
};

export default Espacos;

