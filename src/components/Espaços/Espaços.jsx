import { StyledEspaços } from "./styled"

import espaço1 from "../../assets/espaço1.jpg"
import espaço2 from "../../assets/espaço2.jpg"
import espaço3 from "../../assets/espaço3.jpeg"

export default function Espaços() {
    return (
        
        <StyledEspaços id="espacos">
            <div className="titulos">
               <h1>Espaços de Tabalho</h1>
            </div>
            <div id="container">
                <div className="espacoDiv">
                    <img className="espaco" src={espaço1} alt="imagem salão" />
                    <h2>Estações Individuais</h2>
                    <p>Ideal para autônomos e profissionais liberais que buscam uma estrutura profissional para trabalhar e receber clientes.</p>
                </div>
                <div className="espacoDiv">
                    <img className="espaco" src={espaço2} alt="imagem salão" />
                    <h2>Escritórios Privativos</h2>
                    <p>Escritórios mobiliados com estrutura completa independentemente do tamanho da sua equipe. Oferece privacidade e possibilidade de personalização de acordo com as demandas de sua equipe</p>
                </div>
                <div className="espacoDiv">
                    <img className="espaco" src={espaço3} alt="imagem salão" />
                    <h2>Salas de Reuniões</h2>
                    <p>Receba seus clientes em um ambiente profissional e equipado, oferecemos ainda água e café. Disponível nos planos de residentes ou aluguel sob demanda.</p>
                </div>
            </div>
        </StyledEspaços>
    )
}