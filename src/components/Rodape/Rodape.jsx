import logo from '../../assets/logo.png';
//import logo from '../../assets/logo-preto.png';

import { AiOutlineInstagram, AiOutlineFacebook, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';

import { StyledRodape } from "./styled"

export default function Rodape() {
    return (

        <StyledRodape>
            <div id="container">

                <div className="cx">
                    <h3>Contato</h3>
                    <div className='cxContato'>
                        <div className="icones">
                            <BsFillTelephoneFill /> <p>(32) 99850-1001</p>
                        </div>
                        <div className="icones" >
                            <AiOutlineMail /><p>contato@temasekjf.com.br</p>
                        </div>
                    </div>
                </div>

                <div className="cx" >

                    <h3>Endereço</h3>
                    <a href="https://www.google.com.br/maps/@-21.758616,-43.3502606,3a,75y,51.19h,78.22t/data=!3m6!1e1!3m4!1sUnOASUSPrhLND_fyIgVOvw!2e0!7i16384!8i8192?entry=ttu" target="_blank" rel="noreferrer" >
                        <div className='cxEndereco'>
                            <div className="icones">
                                <ImLocation2 /><p>Av Rio Branco, 1899 </p>
                            </div>
                            <p>Juiz de Fora | MG </p>
                            <p> CEP: 36013-020 </p>
                        </div>
                    </a>
                </div>

                <div className='cx'>
                    <h3>Redes Sociais</h3>
                    <ul className="cxRedes" >
                        <li><a href="https://www.instagram.com/temasekjf" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100095096174475" target="_blank" rel="noreferrer"><AiOutlineFacebook /></a></li>
                        <li><a href="https://www.linkedin.com/company/temasek-jf/about/?viewAsMember=true" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
                    </ul>
                </div>

                < div className="cx">
                    <a href="#" className="logo"><img src={logo} alt='logo' /></a>
                </div>

            </div>
            <h6>
                © 2023
                Todos os direitos reservados | Temasek Coworking | Política de Privacidade
            </h6>
        </StyledRodape>

    )
}