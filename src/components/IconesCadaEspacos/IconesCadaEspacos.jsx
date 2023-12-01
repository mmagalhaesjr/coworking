import {StyledIconesCadaEspacos} from './styled'

import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../contexts/HomeContext"
import { useContext } from "react";

import ico1 from '../../assets/icones/concierge.png'
import ico2 from '../../assets/icones/tel.png'
import ico3 from '../../assets/icones/ar.png'
import ico4 from '../../assets/icones/cozinha.png'
import ico5 from '../../assets/icones/facial.png'
import ico6 from '../../assets/icones/correspondencia.png'
import ico7 from '../../assets/icones/local.png'
import ico8 from '../../assets/icones/contas.png'
import ico9 from '../../assets/icones/limpeza.png'
import ico10 from '../../assets/icones/seguranca.png'
import ico11 from '../../assets/icones/recepcao.png'
import ico12 from '../../assets/icones/armarios.png'

import icone1 from '../../assets/icones2/empresas.png'
import icone2 from '../../assets/icones2/freelancer.png'
import icone3 from '../../assets/icones2/startup.png'
import icone4 from '../../assets/icones2/remotas.png'

export default function IconesCadaEspacos() {

    const navegar = useNavigate()
    const { setHomeComponent } = useContext(HomeContext)
    const contato = () => {
        setHomeComponent('contato')
        navegar('/');
    };


    return (
        <StyledIconesCadaEspacos>

            <div id="container">
                <div id="container1">
                    <div className="cxImg">
                        <img src={ico1} alt="icone" />
                        <p>Serviço de Concierge</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico2} alt="icone" />
                        <p>Linha telefônica privativa</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico3} alt="icone" />
                        <p>Ambiente climatizado</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico4} alt="icone" />
                        <p>Cozinha compartilhada</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico5} alt="icone" />
                        <p>Acesso com leitor facial</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico6} alt="icone" />
                        <p>Gerenciamento de correspondência</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico7} alt="icone" />
                        <p>Endereço fiscal e comercial</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico8} alt="icone" />
                        <p>Contas essenciais inclusas</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico9} alt="icone" />
                        <p>Limpeza e manutenção</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico10} alt="icone" />
                        <p>Segurança 24h</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico11} alt="icone" />
                        <p>Recepção</p>
                    </div>
                    <div className="cxImg">
                        <img src={ico12} alt="icone" />
                        <p>Armários</p>
                    </div>
                </div>

                <div id="container2">
                    <h2>
                        Encontre a solução ideal para seu negócio
                    </h2>

                    <div className="box">

                        <div className="cxIcone">
                            <img src={icone1} alt="icone" />
                            <p>Empresas</p>
                        </div>
                        <div className="cxIcone">
                            <img src={icone2} alt="icone" />
                            <p>Autônomos</p>
                        </div>

                        <div className="cxIcone">
                            <img src={icone3} alt="icone" />
                            <p>Startups</p>
                        </div>

                        <div className="cxIcone">
                            <img src={icone4} alt="icone" />
                            <p>Empresas remotas</p>
                        </div>

                        <div id="texto">

                            <p>
                                Entre em contato
                                conosco e agende uma visita
                                para conhecer nosso espaço e serviços!
                            </p>
                            <button onClick={contato}>
                                Agende uma visita
                            </button>

                        </div>

                    </div>
                </div>
            </div>



        </StyledIconesCadaEspacos>
    )
}