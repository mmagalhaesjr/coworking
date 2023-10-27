import logo from '../../assets/logo-preto.png';

import { useState } from "react";
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import MenuMobile from '../MenuMobile/MenuMobile';
import {  StyledCabecalho2 } from './styled';


export default function Cabecalho2() {

    


    const [mobileAtivado, setMobileAtivado] = useState(false);
    const mobile = () => {
        setMobileAtivado(!mobileAtivado)
    }

    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado])

    // const navegar = useNavigate();
    const blog = () => {
        window.open('/blog', "_blank");
        // navegar('/blog');
    };

    const quemSomos = () => {
        window.location.href = '/quem-somos';
    };

    const planos = () => {
        window.location.href = '/planos';
        
    };
   

    return (

        <>
            <MenuMobile
                mobileAtivado={mobileAtivado}
                setMobileAtivado={setMobileAtivado} />
          

            <StyledCabecalho2 mobile={mobileAtivado} id="header"
                >
                <nav>
                    <a href="/" className="logo"><img src={logo} alt='logo' /></a>
                    

                    <ul className="nav-list">
                        <li><a onClick={quemSomos}>Sobre nós</a></li>
                        <li><a href="#espacos">Espaços</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a onClick={planos}>Planos</a></li>
                        <li><a href="http://#">Eventos</a></li>
                        <li><a href="#contato">Contato</a></li>
                        <li><a onClick={blog} >Blog</a></li>
                        
                    </ul>

                    <button onClick={mobile}  >
                        <span className='linha'></span>
                        <span className='linha'></span>
                        <span className='linha'></span>
                    </button>

                </nav>

            </StyledCabecalho2>
        </>

    );
}
