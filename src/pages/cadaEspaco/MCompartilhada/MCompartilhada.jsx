import { StyledMCompartilhada } from "./styled";

import foto from '../../../assets/xicara.jpeg'

export default function MCompartilhada() {
    return (
        <StyledMCompartilhada>

            <div id="titulo">



            </div>

            <div id="container">

                <div id="containerTexto">
                    <div id="texto">
                        <h1>Mesas compartilhada</h1>
                        <h2>
                            Acesso diário a uma mesa compartilhada em um espaço comum com toda a 
                            estrutura da nossa comunidade. Ideal para uma pessoa e equipes reduzidas.
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


        </StyledMCompartilhada>
    )
}