import { useState } from "react";
import { useEffect } from 'react';

import img1 from '../../assets/icones/wifi.png'
import img2 from '../../assets/icones/coffe.png'
import img3 from '../../assets/icones/armarios.png'
import img4 from '../../assets/icones/impressora.png'
import img5 from '../../assets/icones/ar.png'
import img6 from '../../assets/icones/facial.png'
import img7 from '../../assets/icones/equipe.png'
import img8 from '../../assets/icones/telefone.png'
import img9 from '../../assets/icones/local.png'


import { StyledServicos } from "./styled"



export default function Servicos() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };


    return (
        <StyledServicos id="servicos" className={scrollY > 1200 ? 'rolagem' : ''}>

            <div id="titulos">
                <h1>
                    O que você encontra no Temasek Coworking
                </h1>
            </div>

            <div id="container" >
                <div className="cx" >
                    <img src={img1} alt="icone" />
                    <h2>Wifi</h2>
                    <p>Fornecemos internet sem fio de alta velocidade.</p>
                </div>
                <div className="cx" >
                    <img src={img2} alt="icone" />
                    <h2>Coffee break</h2>
                    <p>A copa compartilhada oferece máquina de café e água para chá.</p>
                </div>
                <div className="cx" >
                    <img src={img3} alt="icone" />
                    <h2>Armários</h2>
                    <p> Espaços individuais para armazenar seus pertences com segurança.</p>
                </div>
                <div className="cx" >
                    <img src={img4} alt="icone" />
                    <h2>Impressora</h2>
                    <p>Impressão e digitalização para você ter sempre em mãos o que precisa.</p>
                </div>
                <div className="cx" >
                    <img src={img5} alt="icone" />
                    <h2>Ambientes climatizados</h2>
                    <p>Salas climatizadas para acomodar sua equipe e convidados em reuniões.</p>
                </div>
                <div className="cx" >
                    <img src={img6} alt="icone" />
                    <h2>Reconhecimento facial</h2>
                    <p>Acesso por reconhecimento facial para todos os membros.</p>
                </div>
                <div className="cx" >
                    <img src={img7} alt="icone" />
                    <h2>Equipe dedicada</h2>
                    <p>Nossa equipe oferece suporte para otimizar o ambiente de trabalho compartilhado.</p>
                </div>
                <div className="cx" >
                    <img src={img8} alt="icone" />
                    <h2>Cabine  privativa</h2>
                    <p>Área reservada para chamadas telefônicas e videoconferências</p>
                </div>
                <div className="cx" >
                    <img src={img9} alt="icone" />
                    <h2>Endereço Fiscal e Comercial</h2>
                    <p>Gestão e recebimento de correspondências</p>
                </div>


            </div>

        </StyledServicos>
    )
}