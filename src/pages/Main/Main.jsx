import { StyledTelaInicial } from "./styled";
import { BsWhatsapp } from 'react-icons/bs';

import Servicos from "../Servicos/Servicos"
import Espacos from '../Espacos/Espacos'
import Inicial from "../Inicial/Inicial";
import Cabecalho from "../../components/Cabecalho/Cabecalho"
import Servicos2 from "../Servicos2/Servicos2";
import Rodape from "../../components/Rodape/Rodape"
import Contato from "../Contato/Contato";
import { useContext, useEffect } from "react";
import { HomeContext } from "../../contexts/HomeContext";

import { Helmet } from 'react-helmet';




export default function TelaInicial() {

    const { homeComponent, setHomeComponent } = useContext(HomeContext)

    useEffect(() => {
        window.scrollTo(0, 0);
        const component = document.getElementById(homeComponent);
        if (component) {
            component.scrollIntoView({ behavior: 'smooth' });
            setHomeComponent('')
        }
    }, []);


    const whatsappClick = () => {
        // Adicione aqui a chamada para o evento do Google Analytics
        // Exemplo: window.gtag('event', 'chat_initiated');
        window.gtag('event', 'chat_initiated');
    
        // Em seguida, redirecione para o link do WhatsApp
        window.location.href = "https://api.whatsapp.com/send?phone=3298501001";
    };


    return (
        <>
            <Helmet>
                <meta name="description" content="Bem-vindo ao Temasek Coworking JF - O melhor espaço de coworking em Juiz de Fora. Oferecemos ambientes colaborativos para trabalho, networking e eventos. Conheça nossos espaços e planos e aluguel." />
            </Helmet>

            <StyledTelaInicial>
                <Cabecalho />
                
                {/* <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer" ><BsWhatsapp id="whattsapp" /></a> */}

                <a
                    href="#"
                    onClick={whatsappClick}
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsWhatsapp id="whattsapp" />
                </a>


                <Inicial />
                <Espacos />
                <Servicos />
                <Servicos2 />
                <Contato />
                <Rodape />

            </StyledTelaInicial>
        </>
    )
}