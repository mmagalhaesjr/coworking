import Formulario from "../../components/Formulario/Formulario";
import { StyledContato } from "./styled";


export default function Contato() {

    return (
        <StyledContato id="contato" >

            {/* <p>site em manutenção...</p> */}

            <p>SITE EM MANUTENÇÃO</p>

            <div id="container">

               

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