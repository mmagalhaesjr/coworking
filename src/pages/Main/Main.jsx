import { StyledTelaInicial } from "./styled";
// import { BsWhatsapp } from 'react-icons/bs';

import Servicos from "../Servicos/Servicos"
import Espacos from '../Espacos/Espacos'
import Inicial from "../Inicial/Inicial";
import Cabecalho from "../../components/Cabecalho/Cabecalho"
import Servicos2 from "../Servicos2/Servicos2";
import Rodape from "../../components/Rodape/Rodape"
import Contato from "../Contato/Contato";


export default function TelaInicial() {

    return (
        <StyledTelaInicial>
            <Cabecalho />
            {/* <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a> */}
            <Inicial />
            <Espacos />
            <Servicos />
            <Servicos2 />
            <Contato />
            <Rodape />

        </StyledTelaInicial>
    )
}