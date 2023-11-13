import { StyledQuemSomos } from "./styled"
import { useState, useEffect } from "react";
import foto from '../../assets/sobreNos/2.jpeg'
import logo from '../../assets/sobreNos/logo.png'
import Cabecalho2 from '../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../components/Rodape/Rodape';

import { BsWhatsapp } from 'react-icons/bs';


export default function QuemSomos() {

    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setPageLoaded(true);
        };

        // Adiciona um ouvinte de eventos para verificar quando o documento é carregado
        window.addEventListener('load', handleLoad);

        // Limpa o ouvinte de eventos quando o componente é desmontado
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);


    return (
        <>

            <Cabecalho2 />

            <StyledQuemSomos id="#quem-somos" className={`${pageLoaded ? 'paginaCarregada' : ''}`} >

            <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                <div className="titulos">
                    <h1>Conheça o Temasek Coworking</h1>
                </div>

                <div id="container">

                    <img src={logo} alt="" />

                    <div id="texto1">
                        <div className="texto1">
                            <h2>
                                Nossa missão é proporcionar uma nova experiência de trabalho
                                com ambiente inspirador e colaborativo que potencializa as conexões
                                e aprimora a qualidade dos negócios.
                            </h2>
                        </div>
                    </div>

                    <div id="texto2">
                        <div className="texto2">
                            <h2>
                                Visamos ser reconhecidos como líderes em espaços
                                altamente produtivos, onde nossos clientes
                                possam atingir o ápice da sua performance.
                            </h2>
                        </div>
                        {/* <img src={icone2} alt="" /> */}
                    </div>

                </div>

                <div id="container2">
                    <div className="titulos">
                        <h1>
                            Nossos valores guiam nossa maneira
                            de trabalhar para proporcionar a
                            melhor experiência de trabalho a você.
                        </h1>
                    </div>

                    <div id='lista'>
                        <img src={foto}></img>
                        <ul>
                            <li>Ética</li>
                            <li>Qualidade</li>
                            <li>Produtividade</li>
                            <li>Sofisticação</li>
                            <li>Inovação</li>
                            <li>Flexibilidade</li>
                        </ul>
                    </div>

                </div>


            </StyledQuemSomos>

           <Rodape/>
        </>

    )
}