import { StyledCabeçalho } from "./styled"
import logo from '../../assets/logo.png'


export default function Cabeçalho() {
    return (
        <StyledCabeçalho>
           <div>
           <img src={logo} alt='logo' />
           </div>
           <section>
                <p>Quem Somos</p>
                <p>Serviços</p>
                <p>Planos</p>
                <p>Espaço</p>
                <p>Contato</p>
           </section>
          
        </StyledCabeçalho>
    )
}