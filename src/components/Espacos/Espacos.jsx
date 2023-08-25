import { useNavigate } from 'react-router-dom';

import dedicada from "../../assets/dedicada.jpg"
import reuniao2 from "../../assets/reuniao2.jpg"
import vidro from "../../assets/vidro.jpg"
import compartilhadas from "../../assets/compartilhadas.jpg"
import atendimento from "../../assets/atendimento.jpg"
// import espaço1 from "../../assets/reuniao.jpg"
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
                    <img className="espaco" src={dedicada} alt="imagem salão" />
                    <div className='divTexto'><h2>Mesas Dedicadas</h2></div>
                    <p>Ideal para autônomos e profissionais liberais que buscam uma estrutura profissional para trabalhar e receber clientes.</p>
                </div>
                <div className="espacoDiv" onClick={privativo}>
                    <img className="espaco" src={compartilhadas} alt="imagem salão" />
                    <div className='divTexto'><h2>Mesas Compartilhadas</h2></div>
                    <p>Escritórios mobiliados com estrutura completa, Oferece privacidade e possibilidade de personalização de acordo com as demandas de sua equipe</p>
                </div>
                <div  className="espacoDiv" onClick={reuniao}> 
                    <img  className="espaco" src={vidro}  alt="imagem salão"/>
                    <div className='divTexto'><h2>Salas Privativas</h2></div>
                    <p>Receba seus clientes em um ambiente profissional e equipado. Disponível nos planos ou aluguel sob demanda.</p>
                </div>  

                <div className="espacoDiv" onClick={individual}>
                    <img className="espaco" src={atendimento} alt="imagem salão" />
                    <div className='divTexto'><h2>Salas de Atendimento</h2></div>
                    <p>Ideal para autônomos e profissionais liberais que buscam uma estrutura profissional para trabalhar e receber clientes.</p>
                </div>
                <div  className="espacoDiv" onClick={reuniao}> 
                    <img  className="espaco" src={reuniao2}  alt="imagem salão"/>
                    <div className='divTexto'><h2>Sala de reunião</h2></div>
                    <p>Receba seus clientes em um ambiente profissional e equipado. Disponível nos planos ou aluguel sob demanda.</p>
                </div>  
                <div className="espacoDiv" onClick={privativo}>
                    <img className="espaco" src={espaço2} alt="imagem salão" />
                    <div className='divTexto'><h2>Endereço Fiscal</h2></div>
                    <p>Escritórios mobiliados com estrutura completa, Oferece privacidade e possibilidade de personalização de acordo com as demandas de sua equipe</p>
                </div>
                <div  className="espacoDiv" onClick={reuniao}> 
                    <img  className="espaco" src={espaço3}  alt="imagem salão"/>
                    <div className='divTexto'><h2>Endereço Comercial</h2></div>
                    <p>Receba seus clientes em um ambiente profissional e equipado. Disponível nos planos ou aluguel sob demanda.</p>
                </div>  

            </div>
        </StyledEspacos>
    )
}