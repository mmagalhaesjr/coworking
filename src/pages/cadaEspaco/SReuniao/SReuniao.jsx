import { StyledSReuniao } from "./styled";

import foto from '../../../assets/xicara.jpeg'

export default function SReuniao() {
    return (
        <StyledSReuniao>

            <div id="titulo">



            </div>

            <div id="container">

                <div id="containerTexto">
                    <div id="texto">
                        <h1>Sala de Reunião</h1>
                        <h2>
                            As Salas Nova York, Londres e Roma são preparadas para realizar
                            qualquer tipo de reunião ou workshop. Ideal para trabalhar e organizar reuniões e treinamentos.
                        </h2>
                        <h3>
                            Reserve o dia que deseja trabalhar, sem compromisso mensal
                            Trabalhe em um espaço compartilhado com a comunidade Temasek
                            Endereço fiscal e comercial, serviço de recepção e correio
                            Wifi de alta velocidade e serviços de impressão
                        </h3>
                    </div>
                </div>

                <div id="cor" >

                    <img className="foto" src={foto} alt="" />

                </div>


            </div>


        </StyledSReuniao>
    )
}