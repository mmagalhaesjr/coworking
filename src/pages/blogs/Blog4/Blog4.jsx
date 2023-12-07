import { StyledBlog } from "../styledBlogs/styled"

import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blog/blog4/blog4-f1.webp'



export default function Blog4() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Confira abaixo algumas maneiras de garantir a privacidade
                            em um espaço de coworking
                        </h1>
                    </div>

                    <div id="container2">


                        <div className="texto">
                            <p>

                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Salas privadas
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Geralmente, os coworkings oferecem salas ou escritórios privados que podem ser
                                alugados por empresas ou indivíduos. Isso proporciona um ambiente mais isolado para
                                reuniões, chamadas telefônicas ou trabalho concentrado.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                SDivisórias e estações de trabalho designadas:
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Alguns espaços de escritório compartilhado têm divisórias ou estações de trabalho
                                designadas que oferecem um certo grau de separação visual e acústica entre os ocupantes.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Salas de reunião privadas
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A maioria dos espaços de coworking oferece salas de reunião que podem ser reservadas
                                para reuniões privadas ou chamadas telefônicas importantes.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Uso de fones de ouvido
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Para tarefas que requerem concentração, como programação ou redação, o uso de fones de
                                ouvido pode ajudar a bloquear ruídos e criar uma sensação de privacidade.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                UHorários flexíveis
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Escolher horários de trabalho mais flexíveis pode permitir que você aproveite momentos em
                                que o espaço de coworking está menos movimentado, proporcionando mais privacidade.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Escolha do local de trabalho
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Alguns espaços de trabalho compartilhado oferecem áreas mais tranquilas e isoladas,
                                enquanto outros têm áreas mais movimentadas e sociais. Escolher um local de trabalho que
                                atenda às suas necessidades de privacidade faz total diferença. Aqui no Temasek Coworking
                                possuímos tanto as salas privativas, quanto as mesas compartilhadas que possibilitam o
                                networking. Um espaço completo que atende às suas necessidades!

                            </p>
                        </div>

                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="texto" id="ultimoTexto" >
                            <p>
                                Para saber mais sobre o
                                universo do coworking, fique atento às nossas redes sociais e aos nossos Blogs.
                            </p>
                        </div>

                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 13/11/2023
                            </p>
                        </div>

                    </div>


                </div>
            </StyledBlog>
            <Rodape />
        </>
    )
}