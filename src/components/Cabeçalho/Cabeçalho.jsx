import { StyledCabeçalho, StyledprimeiraFaixa } from "./styled"
import logo from '../../assets/logo.png'

import { BsInstagram } from 'react-icons/bs';
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';






export default function Cabeçalho() {
    return (
        <>
            <StyledprimeiraFaixa>
                <div id="icones">
                    <BsInstagram />
                    <AiFillFacebook />
                    <AiFillLinkedin />
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
                    <p>QUEM SOMOS</p>
                    <p>SERVIÇOS</p>
                    <p>PLANOS</p>
                    <p>ESPAÇO</p>
                    <p>CONTATO</p>
                    <button>RESERVAS</button>
                </section>

            </StyledCabeçalho>
        </>
    )
}