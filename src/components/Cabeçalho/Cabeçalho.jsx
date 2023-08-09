

import { StyledCabeçalho, StyledprimeiraFaixa } from "./styled"
import logo from '../../assets/logo.png'





export default function Cabeçalho() {
    return (
        <>
            <StyledprimeiraFaixa>
            

            
           
            
                

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