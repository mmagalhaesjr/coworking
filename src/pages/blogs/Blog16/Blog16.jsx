import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';
import foto1 from '../../../assets/blog/blog16/1.png'
import foto2 from '../../../assets/blog/blog16/2.png'

import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog16() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Advocacia em Movimento: Como os
                            espaços de coworking transformam
                            a rotina dos escritórios jurídicos
                        </h1>
                    </div>

                    <div id="container2">

                        <div className="subTitulo" id="subTitulo1">
                            <p>
                                Exploraremos como os espaços de coworking atendem às
                                demandas específicas dos escritórios de advocacia
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <p>
                                Os escritórios de advocacia são centros de atividade intensa, onde cada caso traz consigo
                                demandas únicas. Desafios como a necessidade de flexibilidade, networking eficiente,
                                segurança de dados e infraestrutura tecnológica estão no cerne da prática jurídica
                                contemporânea.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Flexibilidade sob medida
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A flexibilidade é a chave para enfrentar as oscilações inerentes à advocacia. Os espaços de
                                coworking oferecem uma variedade de opções, permitindo que os escritórios ajustem seu
                                espaço conforme as demandas de cada projeto, seja uma reunião confidencial, um trabalho
                                colaborativo ou um período de concentração total.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Networking amplificado
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A advocacia não é apenas sobre o que você sabe, mas também sobre quem você conhece.
                                Os espaços de coworking proporcionam um ambiente propício para a formação de redes
                                profissionais sólidas. A proximidade com outros profissionais do direito cria oportunidades
                                espontâneas para compartilhar experiências, ideias e até mesmo oportunidades de negócios.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Tecnologia como aliada
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A prática jurídica contemporânea exige uma abordagem tecnológica. Espaços de coworking
                                oferecem infraestrutura tecnológica avançada, permitindo que escritórios de advocacia adotem
                                facilmente soluções digitais, desde videoconferências até sistemas de gerenciamento de
                                processos judiciais.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Segurança e Confidencialidade
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A proteção de informações sensíveis é um imperativo para escritórios de advocacia. Nos
                                escritórios compartilhados, ambientes privativos e seguros são projetados para garantir que
                                dados confidenciais estejam resguardados, proporcionando a tranquilidade necessária para a
                                prática do direito.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                OAB e espaços de coworking
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Nos dias atuais, onde a inovação e a tradição se encontram, destacamos a parceria
                                estratégica entre a OAB e os escritórios compartilhados, e o Temasek Coworking é um deles.
                                Esta aliança não apenas atende às demandas específicas dos escritórios de advocacia, mas
                                também fortalece os alicerces da excelência jurídica, oferecendo benefícios exclusivos,
                                eventos especializados e uma rede robusta para aprimorar a prática dos advogados.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto2} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <p>
                                Conte conosco para proporcionar um ambiente sofisticado e com localização privilegiada que
                                vai impulsionar o seu negócio!
                            </p>
                        </div>
                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 18/12/2023
                            </p>
                        </div>
                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}