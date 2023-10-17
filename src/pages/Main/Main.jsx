import { StyledTelaInicial } from "./styled";
// import { BsWhatsapp } from 'react-icons/bs';

import QuemSomos from "../QuemSomos/QuemSomos"
import Servicos from "../Servicos/Servicos"
import Planos from "../Planos/Planos"
import Salas from '../Salas/Salas'
import Inicial from "../Inicial/Inicial";

import Cabecalho from "../../components/Cabecalho/Cabecalho"
import Formulario from "../../components/Formulario/Formulario"
import Rodape from "../../components/Rodape/Rodape"



export default function TelaInicial() {
       

    return (
        <StyledTelaInicial>
            <Cabecalho />
            {/* <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a> */}
            <Inicial />
            <Salas />
            <Servicos />
            <QuemSomos/>
            <Planos />
            <Formulario />
            <Rodape />

        </StyledTelaInicial>
    )
}