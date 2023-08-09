import { StyledCorpo } from "./styled"

import Espaços from "../Espaços/Espaços"
import Formulario from "../Formulario/Formulario"

import salao from "../../assets/salao.png"
import whatsapp from "../../assets/whatsapp.png"



export default function Corpo() {


    return (
        <StyledCorpo>
            <img src={salao} alt="imagem salão" />
            <img id="whatsapp" src={whatsapp} alt="logo Whatsapp" />
            <h1></h1>
            <section>
                <h1 id="textoConheçaNossaSoluçoes">Conheça nossas soluções.</h1>

                <Espaços />
                {/* <Formulario/> */}


            </section>

            <div id="rodape">

            </div>
        </StyledCorpo>
    )
}