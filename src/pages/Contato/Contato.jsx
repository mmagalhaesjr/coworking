import Formulario from "../../components/Formulario/Formulario";
import { StyledContato } from "./styled";

import foto from '../../assets/capa/marcos.png'


export default function Contato() {

    return (
        <StyledContato id="contato" >

            {/* <p>site em manutenção...</p> */}

            <div id="container">

               <img src={foto} alt="" />

                <div id="titulos">
                    <h1>
                        Entre em contato
                        conosco e agende
                        uma visita
                        para conhecer nosso
                        espaço e serviços!
                    </h1>

                </div>

                
                    <Formulario />
                

            </div>

        </StyledContato >
    )
}