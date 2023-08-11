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

            <h1></h1>
            <section>
                <div id="divTextoConheçaNossaSoluçoes">
                    <h1 id="textoConheçaNossaSoluçoes">Nosso Espaço</h1>
                </div>
                
                <Espaços />
                <Serviços />

                <Formulario/>




            </section>
            <Rodape />

        </StyledCorpo>
    )
}