import { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { StyledSalas } from './styled';
import foto from '../../assets/foto-capa.jpg';

export default function Salas() {
    const [carrossel, setCarrossel] = useState(0);

    const handleNextClick = () => {
        const totalSalas = 5; 
        setCarrossel((prevIndex) => (prevIndex + 3) % totalSalas);
    };

    return (
        <StyledSalas id="salas">
            <div id="titulos">
                <h1>
                    Um espaço de trabalho compartilhado que valoriza a simplicidade e a elegância em seu design e funcionalidade.
                </h1>
            </div>
            <div id="container">
                {Array.from({ length: 3 }).map((_, index) => {
                    const salaIndex = (carrossel + index) % 5; 
                    return (
                        <div className="salas" key={salaIndex}>
                            <img src={foto} alt={`Sala ${salaIndex + 1}`} />
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
                    );
                })}
                <button onClick={handleNextClick}>
                    <RiArrowRightSLine id="seta" />
                </button>
            </div>
        </StyledSalas>
    );
}
