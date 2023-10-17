import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import { StyledInicial } from "./styled";



export default function Inicial() {


    return (
        <StyledInicial>

            <div id="titulo">
                <h1 >
                    O mais novo modelo de trabalho
                </h1>

            </div>

            <div id='setas'>
                <BsFillArrowLeftCircleFill />
                <BsFillArrowRightCircleFill />
            </div>



        </StyledInicial>
    )
}