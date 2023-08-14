import { StyledCorpo } from "./styled"

import Espaços from "../Espaços/Espaços"
import Rodape from "../Rodape/Rodape"
import Serviços from "../Serviços/Serviços"
import Formulario from "../Formulario/Formulario"

import salao from "../../assets/salao.png"





export default function Corpo() {


    return (
        <StyledCorpo>
            <img src={salao} alt="imagem salão" />

            <section>
                <div id="titulos"><h1 id="titulos">Nosso Espaço</h1></div>

                <Espaços />

                <div id="titulos"><h1 id="titulos">Serviços</h1></div>

                <Serviços />
                <Formulario />
            </section>
            <Rodape />

        </StyledCorpo>
    )
}