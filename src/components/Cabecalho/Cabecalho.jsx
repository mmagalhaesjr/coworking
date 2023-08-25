import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-preto.png';
import { StyledCabecalho } from "./styled";


export default function Cabecalho() {

    const navegar = useNavigate();
    function QuemSomos(e) {
        e.preventDefault()
        navegar("/QuemSomos")
    }
    
    return (
        
            <StyledCabecalho onSubmit={QuemSomos}>
                <nav> 
                    <a href="/" className="logo"><img src={logo} alt='logo' /></a>
                    
                    <ul className="nav-list">
                        <li><a >QUEM SOMOS</a></li>
                        <li><a href="#servicos">SERVIÇOS</a></li>
                        <li><a href="#planos">PLANOS</a></li>
                        <li><a href="#espacos">ESPAÇOS</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#contato">CONTATO</a></li>
                    </ul>

                    <div>
                        <button className="hamburger"></button>
                    </div>
                </nav>
            </StyledCabecalho>
        
    );
}
