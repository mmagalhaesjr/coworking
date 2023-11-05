import logo from '../../assets/logo-preto.png';

import { useState } from "react";
import { useEffect } from 'react';
import MenuMobile from '../MenuMobile/MenuMobile';
import { StyledCabecalho2 } from './styled';
import { useNavigate } from 'react-router-dom';


export default function Cabecalho2() {
    const navegar = useNavigate();

    const [mobileAtivado, setMobileAtivado] = useState(false);
    const mobile = () => {
        setMobileAtivado(!mobileAtivado)
    }

    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado])

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
                        <li><a onClick={() => navegar("/quem-somos")}>Sobre nós</a></li>
                        <li><a href="#espacos">Espaços</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a onClick={() => navegar("/planos")}>Planos</a></li>
                        <li><a onClick={() => navegar("/eventos")}>Eventos</a></li>
                        <li><a href="#contato">Contato</a></li>
                        <li><a href='https://temasekcoworking.conexa.app' >Área do cliente</a></li>
                        <li><a onClick={() => navegar("/blog")} >Blog</a></li>
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
