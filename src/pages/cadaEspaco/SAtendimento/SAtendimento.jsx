import { StyledSAtendimento } from "./styled";

import foto from '../../../assets/xicara.jpeg'

export default function SAtendimento() {
    return (
        <StyledSAtendimento>

            <div id="titulo">



            </div>

            <div id="container">

                <div id="containerTexto">
                    <div id="texto">
                        <h1>Sala de atendimento</h1>
                        <h2>
                            A Sala Paris é ideal para atendimentos. Ideal para trabalhar e organizar reuniões e treinamentos.
                        </h2>
                        <h3>
                            Reserve o dia que deseja trabalhar, sem compromisso mensal
                            Endereço fiscal e comercial, serviço de recepção e correio
                            Wifi de alta velocidade e serviços de impressão
                        </h3>
                    </div>
                </div>

                <div id="cor" >

                    <img className="foto" src={foto} alt="" />

                </div>


            </div>


        </StyledSAtendimento>
    )
}