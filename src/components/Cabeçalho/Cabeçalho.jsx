

import { StyledCabeçalho } from "./styled";
import logo from '../../assets/logo.png';

export default function Cabeçalho() {
    return (
        
            <StyledCabeçalho>
                <nav> 
                    <a href="/" className="logo"><img src={logo} alt='logo' /></a>

                    <ul className="nav-list">
                        <li><a href="#">QUEM SOMOS</a></li>
                        <li><a href="#serviços">SERVIÇOS</a></li>
                        <li><a href="#">PLANOS</a></li>
                        <li><a href="#espaços">ESPAÇOS</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#contato">CONTATO</a></li>
                    </ul>

                    <div className="nav-hb">
                        <button className="hamburger"></button>
                    </div>
                </nav>
            </StyledCabeçalho>
        
    );
}
