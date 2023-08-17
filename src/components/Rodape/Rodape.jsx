import { StyledRodape } from "./styled"
import logo from '../../assets/logo.png';

import { AiOutlineInstagram, AiOutlineFacebook, AiFillLinkedin } from 'react-icons/ai';

export default function Rodape() {
    return (

        <StyledRodape>
            <div id="container">
                <div className="container">
                    <h3>Contato</h3>
                    <div className="contInterno" id="endereço" >
                        <p>(32) 99850-1001</p>
                        <p>coworkingtemasekjf@gmail.com</p>
                    </div>
                </div>
                <div className="container">
                    <h3>Endereço</h3>
                    <div className="contInterno" id="endereço">
                        <p>Av Rio Branco, 1899 </p>
                        <p>Juiz de Foa MG </p>
                        <p> CEP: 36010010 </p>
                    </div>
                </div>
                <div className="container">
                    <h3>Redes Sociais</h3>
                    <ul className="contInterno" >
                        <li><a href=""><AiOutlineInstagram /></a></li>
                        <li><a href=""><AiOutlineFacebook /></a></li>
                        <li><a href=""><AiFillLinkedin /></a></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="contInterno" id="endereço" >
                    <a href="#" className="logo"><img src={logo} alt='logo' /></a>
                    </div>
                </div>
            </div>
            <h6>
                © 2023
                Todos os direitos reservados | Temasek Coworking | Política de Privacidade
            </h6>
        </StyledRodape>

    )
}