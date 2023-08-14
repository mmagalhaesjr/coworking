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
                <div className="titulos"><h1>Nosso Espaço</h1></div>

                <Espaços />

                <div className="titulos"><h1>Serviços</h1></div>

                <Serviços />
                <div id="titulos" className="titulos">
                    <h3>CONTATO</h3>
                    <p> Interessado em saber mais sobre nossos serviços?  Entre em contato com a gente!</p>
                </div>
                <Formulario />
            </section>
            <Rodape />

        </StyledCorpo>
    )
}