import { StyledCabeçalho } from "./styled";
import logo from '../../assets/logo.png';

import { useNavigate } from 'react-router-dom';


export default function Cabeçalho() {

    const navegar = useNavigate();

    function QuemSomos(e) {
        e.preventDefault()
        navegar("/QuemSomos")
    }
    
    return (
        
            <StyledCabeçalho onSubmit={QuemSomos}>
                <nav> 
                    <a href="/" className="logo"><img src={logo} alt='logo' /></a>
                    
                    <ul className="nav-list">
                        <li><a type="submit">QUEM SOMOS</a></li>
                        <li><a href="#servicos">SERVIÇOS</a></li>
                        <li><a href="#planos">PLANOS</a></li>
                        <li><a href="#espacos">ESPAÇOS</a></li>
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
