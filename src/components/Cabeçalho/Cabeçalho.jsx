import { StyledCabeçalho, StyledprimeiraFaixa } from "./styled"
import logo from '../../assets/logo.png'

import { BsInstagram } from 'react-icons/bs';
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';






export default function Cabeçalho() {

    

    return (
        <>
            <StyledprimeiraFaixa>
                <div id="icones">
                   <a href= 'https://www.instagram.com/temasekjf/' ><BsInstagram /></a> 
                   <a href= 'https://www.facebook.com/profile.php?id=100095096174475' ><AiFillFacebook/></a> 
                   <a href= 'https://www.linkedin.com/company/temasek-jf/about/?viewAsMember=true' ><AiFillLinkedin /></a> 
                </div>
                <div id="telefone">
                    <h1>(32) 99850-1001</h1>
                </div>
            </StyledprimeiraFaixa>

            <StyledCabeçalho>


                <div>
                    <img src={logo} alt='logo' />
                </div>
                <section>
                    <a href="#">QUEM SOMOS</a>
                    <a href="#serviços">SERVIÇOS</a>
                    <a href="#">PLANOS</a>
                    <a href="#espaços">ESPAÇOS</a>
                    <a href="#">BLOG</a>
                    <a href="#contato">CONTATO</a>
                    <button>RESERVAS</button>
                </section>

            </StyledCabeçalho>
        </>
    )
}
 



