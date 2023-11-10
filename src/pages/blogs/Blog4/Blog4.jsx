import { StyledBlog4 } from "./styled"

import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blog/blog4-f1.png'



export default function Blog4() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog4>

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
                        <h1>
                            Salas privadas
                        </h1>
                        <div className="texto">
                            <p>
                                Geralmente, os coworkings oferecem salas ou escritórios privados que podem ser
                                alugados por empresas ou indivíduos. Isso proporciona um ambiente mais isolado para
                                reuniões, chamadas telefônicas ou trabalho concentrado.
                            </p>
                        </div>
                        <h1>
                            Divisórias e estações de trabalho designadas:
                        </h1>
                        <div className="texto">
                            <p>
                                Alguns espaços de escritório compartilhado têm divisórias ou estações de trabalho
                                designadas que oferecem um certo grau de separação visual e acústica entre os ocupantes.
                            </p>
                        </div>
                        <h1>
                            Salas de reunião privadas
                        </h1>
                        <div className="texto">
                            <p>
                                A maioria dos espaços de coworking oferece salas de reunião que podem ser reservadas
                                para reuniões privadas ou chamadas telefônicas importantes.
                            </p>
                        </div>
                        <h1>
                            Uso de fones de ouvido
                        </h1>
                        <div className="texto">
                            <p>
                                Para tarefas que requerem concentração, como programação ou redação, o uso de fones de
                                ouvido pode ajudar a bloquear ruídos e criar uma sensação de privacidade.
                            </p>
                        </div>
                        <h1>
                            Horários flexíveis
                        </h1>
                        <div className="texto" >
                            <p>
                                Escolher horários de trabalho mais flexíveis pode permitir que você aproveite momentos em
                                que o espaço de coworking está menos movimentado, proporcionando mais privacidade.
                            </p>
                        </div>

                        <h1>
                            Escolha do local de trabalho
                        </h1>

                        <div className="texto" >
                            <p>
                                Alguns espaços de trabalho compartilhado oferecem áreas mais tranquilas e isoladas,
                                enquanto outros têm áreas mais movimentadas e sociais. Escolher um local de trabalho que
                                atenda às suas necessidades de privacidade faz total diferença. Aqui no Temasek Coworking
                                possuímos tanto as salas privativas, quanto as mesas compartilhadas que possibilitam o
                                networking. Um espaço completo que atende às suas necessidades! Para saber mais sobre o
                                universo do coworking, fique atento às nossas redes sociais e aos nossos Blogs.

                            </p>
                        </div>

                        <div className="img">
                            <img src={foto1} alt="" />
                        </div>

                    </div>


                </div>
            </StyledBlog4>
            <Rodape />
        </>
    )
}