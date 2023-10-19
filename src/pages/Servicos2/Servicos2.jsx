import { StyledServicos2 } from "./styled"

import foto from '../../assets/xicara.jpeg'



export default function Servicos2() {
    return (
        <StyledServicos2 id="servicos">

            <div id="container">

                <div id="containerTxt" >

                    <div id="titulo">
                        <h1>
                            Oferecemos serviços exclusivos <br></br>
                            para atender às necessidades<br></br>
                            de todos os profissionais:
                        </h1>

                    </div>
                    <ul>
                        <li>Serviço de concierge</li>
                        <li>Motorista executivo</li>
                        <li>Café da manhã continental</li>
                        <li>Marketing digital </li>
                        <li>Gerenciamento de mídias sociais</li>
                        <li>Acessoria contábil</li>
                        <li>Linha telefônica privada</li>

                    </ul>
                </div>

                <img src={foto} alt="" />

                <div id="containerImg">


                </div>

            </div>



        </StyledServicos2>
    )
}