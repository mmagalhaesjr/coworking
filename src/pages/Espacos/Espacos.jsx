
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { StyledEspacos } from './styled';

import foto1 from '../../assets/cores/1.png';
import foto2 from '../../assets/cores/2.png';
import foto3 from '../../assets/cores/3.png';
import foto4 from '../../assets/cores/4.png';
import foto5 from '../../assets/cores/5.png';

export default function Espacos() {
    const [carrossel, setCarrossel] = useState(0);

    const handleNextClick = () => {
        const totalSalas = 5; 
        setCarrossel((prevIndex) => (prevIndex + 1) % totalSalas);
    };

    return (
        <StyledEspacos id="espacos">
            <div id="titulos">
                <h1>
                    Um espaço de trabalho compartilhado que valoriza a simplicidade e a elegância em seu design e funcionalidade.
                </h1>
            </div>
            <div id="container">
                {Array.from({ length: 3 }).map((_, index) => {
                    const salaIndex = (carrossel + index) % 5; 
                    const fotos = [foto1, foto2, foto3, foto4, foto5];
                    return (
                        <Link to={`/sala/${salaIndex}`} key={salaIndex}>
                            <div className="salas">
                                <img src={fotos[salaIndex]} alt={`Sala ${salaIndex + 1}`} />
                                <h3>
                                    {salaIndex === 0
                                        ? 'Mesas Dedicadas'
                                        : salaIndex === 1
                                        ? 'Mesas Compartilhadas'
                                        : salaIndex === 2
                                        ? 'Salas de Reunião'
                                        : salaIndex === 3
                                        ? 'Sala Privativa'
                                        : 'Sala para Atendimento'}
                                </h3>
                            </div>
                        </Link>
                    );
                })}
                <button onClick={handleNextClick}>
                    <RiArrowRightSLine id="seta" />
                </button>
            </div>
        </StyledEspacos>
    );
}
