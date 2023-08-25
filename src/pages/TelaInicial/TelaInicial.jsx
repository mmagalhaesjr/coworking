import { BsWhatsapp } from 'react-icons/bs';

import salao2 from "../../assets/salao5.jpg"

import Cabecalho from "../../components/Cabecalho/Cabecalho"
import Espacos from "../../components/Espacos/Espacos"
import Servicos from "../../components/Servicos/Servicos"
import Planos from "../../components/Planos/Planos"
import Formulario from "../../components/Formulario/Formulario"
import Rodape from "../../components/Rodape/Rodape"

import { StyledTelaInicial } from "./styled";







export default function TelaInicial() {

    // const navigate = useNavigate()

    return (
        <StyledTelaInicial>
            <Cabecalho />

            <img  id="salao" src={salao2} alt="imagem salão" />
            <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

            <Espacos />
            <Servicos />
            <Planos />
            <Formulario />
            <Rodape />

        </StyledTelaInicial>
    )
}