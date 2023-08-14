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
                <Espaços />
                <Serviços />
                <Formulario />
                <Rodape />
        </StyledCorpo>
    )
}