import { useNavigate } from 'react-router-dom';

import espaço1 from "../../assets/individual.jpg"
import espaço2 from "../../assets/privado.jpg"
import espaço3 from "../../assets/reuniao.jpg"

import {StyledEspacos} from "./styled"

export default function Espacos() {

    const navegar = useNavigate();

    const individual = () => {
        navegar('/individual');
      };
      const privativo = () => {
        navegar('/privativo');
      };
      const reuniao = () => {
        navegar('/reuniao');
      };
    
    return (
        
        <StyledEspacos id="espacos" >
            <div className="titulos">
               <h1>ESPAÇO DE TRABALHO</h1>
            </div>
            <div id="container">
                <div className="espacoDiv" onClick={individual}>
                    <img className="espaco" src={espaço1} alt="imagem salão" />
                    <h2>Mesas Dedicadas</h2>
                    <p>Ideal para autônomos e profissionais liberais que buscam uma estrutura profissional para trabalhar e receber clientes.</p>
                </div>
                <div className="espacoDiv" onClick={privativo}>
                    <img className="espaco" src={espaço2} alt="imagem salão" />
                    <h2>Mesas Compartilhadas</h2>
                    <p>Escritórios mobiliados com estrutura completa independentemente do tamanho da sua equipe. Oferece privacidade e possibilidade de personalização de acordo com as demandas de sua equipe</p>
                </div>
                <div  className="espacoDiv" onClick={reuniao}> 
                    <img  className="espaco" src={espaço3}  alt="imagem salão"/>
                    <h2>Salas Privativas</h2> 
                    <p>Receba seus clientes em um ambiente profissional e equipado. Disponível nos planos ou aluguel sob demanda.</p>
                </div>  

                <div className="espacoDiv" onClick={individual}>
                    <img className="espaco" src={espaço1} alt="imagem salão" />
                    <h2>Salas Atendimento</h2>
                    <p>Ideal para autônomos e profissionais liberais que buscam uma estrutura profissional para trabalhar e receber clientes.</p>
                </div>
                <div  className="espacoDiv" onClick={reuniao}> 
                    <img  className="espaco" src={espaço3}  alt="imagem salão"/>
                    <h2>Endereço Comercial</h2>
                    <p>Receba seus clientes em um ambiente profissional e equipado. Disponível nos planos ou aluguel sob demanda.</p>
                </div>  
                <div className="espacoDiv" onClick={privativo}>
                    <img className="espaco" src={espaço2} alt="imagem salão" />
                    <h2>Endereço Fiscal</h2>
                    <p>Escritórios mobiliados com estrutura completa independentemente do tamanho da sua equipe. Oferece privacidade e possibilidade de personalização de acordo com as demandas de sua equipe</p>
                </div>
                <div  className="espacoDiv" onClick={reuniao}> 
                    <img  className="espaco" src={espaço3}  alt="imagem salão"/>
                    <h2>Endereço Comercial</h2>
                    <p>Receba seus clientes em um ambiente profissional e equipado. Disponível nos planos ou aluguel sob demanda.</p>
                </div>  

            </div>
        </StyledEspacos>
    )
}