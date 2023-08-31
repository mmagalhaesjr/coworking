import logo from '../../assets/logo-preto.png';
// import { usestate } from "react";
// import { useNavigate } from 'react-router-dom';

import MenuMobile from '../MenuMobile/MenuMobile';

import { StyledCabecalho } from './styled';




export default function Cabecalho() {

    // const navegar = useNavigate();
    const blog = () => {
        window.open('/blog', "_blank");
        // navegar('/blog');
    };
    const quemSomos = () => {
        window.open('/quemSomos', "_blank");
        // navegar('/quemSomos');

    };

    // const [mobileAtivado, setMobileAtivado] = usestate(false);

    return (

        <>
            <MenuMobile />

            <StyledCabecalho >
                <nav>
                    <a href="/" className="logo"><img src={logo} alt='logo' /></a>

                    <ul className="nav-list">
                        <li><a href="#espacos">ESPAÇOS</a></li>
                        <li><a href="#servicos">SERVIÇOS</a></li>
                        <li><a href="#planos">PLANOS</a></li>
                        <li><a href="#contato">CONTATO</a></li>
                        <li><a onClick={blog} >BLOG</a></li>
                        <li><a onClick={quemSomos}  >QUEM SOMOS</a></li>
                    </ul>

                    <div>
                        <button className="hamburger"></button>
                    </div>

                </nav>

            </StyledCabecalho>
        </>

    );
}
