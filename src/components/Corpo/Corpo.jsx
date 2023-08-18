import { StyledCorpo } from "./styled"

import Espaços from "../Espaços/Espaços"
import Serviços from "../Serviços/Serviços"
import Formulario from "../Formulario/Formulario"

import salao from "../../assets/salao.png"
import {  BsWhatsapp } from 'react-icons/bs';






export default function Corpo() {
    return (
        <StyledCorpo>
            <img src={salao} alt="imagem salão" />

               <a  href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a> 

                <Espaços />
                <Serviços />
                <Formulario />
      
        </StyledCorpo>
    )
}