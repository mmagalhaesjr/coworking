import { StyledTelaInicial } from "./styled";
import Cabeçalho from "../../components/Cabeçalho/Cabeçalho"
import Espaços from "../../components/Espaços/Espaços"
import Serviços from "../../components/Serviços/Serviços"
import Planos from "../../components/Planos/Planos"
import Formulario from "../../components/Formulario/Formulario"
import Rodape from "../../components/Rodape/Rodape"


import salao from "../../assets/salao.png"
import { BsWhatsapp } from 'react-icons/bs';

// import { useNavigate } from "react-router-dom";




export default function TelaInicial() {

    // const navigate = useNavigate()

    return (
        <StyledTelaInicial>
            <Cabeçalho />

            <img src={salao} alt="imagem salão" />
            <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

            <Espaços />
            <Serviços />
            <Planos />
            <Formulario />
            <Rodape />

        </StyledTelaInicial>
    )
}