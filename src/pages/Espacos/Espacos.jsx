
import { StyledEspacos } from './styled';

import foto1 from '../../assets/dedicadas/3.webp'
import foto2 from '../../assets/compartilhadas/4.webp'
import foto3 from '../../assets/reuniao/3.webp'
import foto4 from '../../assets/privadas/1.webp'
import foto5 from '../../assets/atendimento/2.webp'

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';

const Espacos = () => {

    const navegar = useNavigate()

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

                <div id='bloco1'>
                </div>

                <div id='bloco2'>
                </div>
                
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={window.innerWidth < 940 ? 1 : 3}
                >

                    <SwiperSlide>
                        <a onClick={() => navegar('/dedicada')}>
                            <div className="salas">
                                <img src={foto1} alt='' />
                                <h3>Estação de Trabalho Dedicada</h3>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a onClick={() => navegar('/compartilhada')}>
                            <div className="salas">
                                <img src={foto2} alt='' />
                                <h3>Estação de Trabalho Rotativa</h3>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a onClick={() => navegar('/atendimento')}>
                            <div className="salas">
                                <img src={foto5} alt='' />
                                <h3>Sala para Atendimento</h3>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a onClick={() => navegar('/privativa')}>
                            <div className="salas">
                                <img src={foto4} alt='' />
                                <h3>Salas Privativas</h3>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a onClick={() => navegar('/reuniao')}>
                            <div className="salas">
                                <img src={foto3} alt='' />
                                <h3>Sala de Reunião</h3>
                            </div>
                        </a>
                    </SwiperSlide>



                </Swiper>

            </div>


        </StyledEspacos>
    );
};

export default Espacos;

