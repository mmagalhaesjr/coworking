import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import img from '../../assets/foto-capa.jpg'

import { StyledInicial } from "./styled";



export default function Inicial() {


    return (
        <StyledInicial>

            <img src={img} alt="" />

            <div id="titulo">
                <h1 >
                    O mais novo espaço de trabalho
                </h1>

            </div>

            <div id='setas'>
                <BsFillArrowLeftCircleFill />
                <BsFillArrowRightCircleFill />
            </div>



        </StyledInicial>
    )
}