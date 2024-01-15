import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';
import foto1 from '../../../assets/blog/blog17/foto1.png'

import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog17() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Os 5 principais serviços de um
                            coworking
                        </h1>
                    </div>

                    <div id="container2">

                        <div className="subTitulo" id="subTitulo1">
                            <p>
                                Neste blog, exploraremos os principais serviços que tornam
                                os espaços de coworking uma escolha inteligente
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="subTitulo">
                            <p>
                                Espaços flexíveis de trabalho
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A flexibilidade é a essência do coworking. Profissionais têm acesso a uma variedade de
                                ambientes, desde estações de trabalho compartilhadas até escritórios privativos. Isso permite
                                que indivíduos e equipes escolham o ambiente que melhor se adapte às suas necessidades
                                diárias.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Infraestrutura de primeira linha
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Os coworkings oferecem uma infraestrutura de alta qualidade que inclui internet de alta
                                velocidade, salas de reunião equipadas, áreas de descanso, serviços de impressão e muito
                                mais. Essa infraestrutura compartilhada elimina preocupações logísticas, permitindo que os
                                profissionais se concentrem no que realmente importa: seu trabalho.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Serviços administrativos e de recepção

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Profissionais que utilizam ambientes de trabalho compartilhados muitas vezes contam com
                                serviços administrativos, como recepcionistas treinados, serviços de correspondência e
                                atendimento telefônico personalizado. Esses recursos aliviam as tarefas administrativas e
                                oferecem um toque profissional ao ambiente de trabalho.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Eventos e networking
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Os escritórios compartilhados costumam ser centros de networking e aprendizado contínuo. A
                                organização de eventos, workshops e palestras cria oportunidades para os membros
                                ampliarem sua rede profissional, compartilharem conhecimentos e explorarem colaborações
                                potenciais.

                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Acessibilidade global

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A expansão dos coworkings em diversas cidades e países oferece aos profissionais a
                                possibilidade de trabalhar em diferentes localidades. Isso não só facilita viagens a negócios,
                                mas também amplia as oportunidades de networking em uma escala global.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Por fim, os coworkings não são apenas espaços físicos para trabalhar; são ecossistemas
                                completos que integram serviços essenciais para impulsionar o sucesso profissional. Ao
                                abraçar a flexibilidade, oferecer infraestrutura de alta qualidade, serviços administrativos,
                                oportunidades de networking e acessibilidade global, os coworkings criam um ambiente onde
                                os profissionais podem prosperar, colaborar e inovar. Se você está buscando mais do que
                                apenas um local de trabalho, mas uma experiência profissional holística, os espaços de
                                coworking estão prontos para recebê-lo.

                            </p>
                        </div>
                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 26/12/2023
                            </p>
                        </div>
                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}