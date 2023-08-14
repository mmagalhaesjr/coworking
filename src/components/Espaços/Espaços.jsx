import { StyledEspaços } from "./styled"

import espaço1 from "../../assets/espaço1.jpg"
import espaço2 from "../../assets/espaço2.jpg"
import espaço3 from "../../assets/espaço3.jpg"

export default function Espaços() {
    return (
        <StyledEspaços id="espaços">
            <div className="espaçoDiv">
                <img className="espaço" src={espaço1} alt="imagem salão" />
                <h2>Estação de Trabalho Individual</h2>
                <p>Ideal para autônomos e profissionais liberais que buscam uma estrutura profissional para trabalhar e receber clientes.</p>
            </div>
            <div className="espaçoDiv">
                <img className="espaço" src={espaço2} alt="imagem salão" />
                <h2>Escritórios Privativos</h2>
                <p>Escritórios mobiliados com estrutura completa independentemente do tamanho da sua equipe. Oferece privacidade e possibilidade de personalização de acordo com as demandas de sua equipe</p>
            </div>
            <div className="espaçoDiv">
                <img className="espaço" src={espaço3} alt="imagem salão" />
                <h2>Sala de Reunião</h2>
                <p>Receba seus clientes em um ambiente profissional e equipado, oferecemos ainda água e café. Disponível nos planos de residentes ou aluguel sob demanda.</p>
            </div>
        </StyledEspaços>
    )
}