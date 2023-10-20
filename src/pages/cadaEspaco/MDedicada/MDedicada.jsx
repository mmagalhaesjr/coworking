


import { StyledMDedicada } from "./styled";

import foto from '../../../assets/xicara.jpeg'

export default function MDedicada() {
    return (
        <StyledMDedicada>

            <div id="titulo">



            </div>

            <div id="container">

                <div id="containerTexto">
                    <div id="texto">
                        <h1>Mesas dedicada</h1>
                        <h2>
                            Acesso exclusivo à sua posição fixa de trabalho, em um ambiente compartilhado.
                            Ideal para uma pessoa e equipes reduzidas.
                        </h2>
                        <h3>
                            Reserve o dia que deseja trabalhar, sem compromisso mensal
                            Acesso a salas de reunião, com pagamento pelo uso
                            Trabalhe em um espaço compartilhado com a comunidade Temasek
                            Wifi de alta velocidade e serviços de impressão
                        </h3>
                    </div>
                </div>

                <div id="cor" >

                    <img className="foto" src={foto} alt="" />

                </div>


            </div>


        </StyledMDedicada>
    )
}