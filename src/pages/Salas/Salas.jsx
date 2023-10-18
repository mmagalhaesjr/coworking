import { useState, useEffect } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { StyledSalas } from './styled';

import foto from '../../assets/foto-capa.jpg';

const suasImagens = [foto, foto, foto, foto, foto];

export default function Salas() {
  const [start, setStart] = useState(0);

  const handleNextClick = () => {
    setStart((prevIndex) => prevIndex + 3 >= suasImagens.length ? 0 : prevIndex + 3);
  };

  
  useEffect(() => {
    if (start >= suasImagens.length) {
      setStart(0);
    }
  }, [start]);

  return (
    <StyledSalas id="salas">
      <div id="titulos">
        <h1>
          Um espaço de trabalho compartilhado que valoriza a simplicidade e a elegância em seu design e funcionalidade.
        </h1>
      </div>
      <div id="container">
        {suasImagens.slice(start, start + 3).map((imagem, index) => (
          <div className="salas" key={index}>
            <img src={imagem} alt={`Mesa ${index + 1}`} />
            <h3>Mesas Dedicadas</h3>
          </div>
        ))}
        <button onClick={handleNextClick}>
          <RiArrowRightSLine id="seta" />
        </button>
      </div>
    </StyledSalas>
  );
}
