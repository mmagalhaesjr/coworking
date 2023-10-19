import { StyledTelaInicial } from "./styled";
// import { BsWhatsapp } from 'react-icons/bs';

import Servicos from "../Servicos/Servicos"

import Espacos from '../Espacos/Espacos'
import Inicial from "../Inicial/Inicial";

import Cabecalho from "../../components/Cabecalho/Cabecalho"
import Formulario from "../../components/Formulario/Formulario"
import Rodape from "../../components/Rodape/Rodape"
import Servicos2 from "../Servicos2/Servicos2";



export default function TelaInicial() {
       

    return (
        <StyledTelaInicial>
            <Cabecalho />
            {/* <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a> */}
            <Inicial />
            <Espacos />
            <Servicos />
            <Servicos2 />
            <Formulario />
            <Rodape />

        </StyledTelaInicial>
    )
}