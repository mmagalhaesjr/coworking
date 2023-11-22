import { StyledBlog5 } from "./styled"

import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';

import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blog/blog5/foto1.webp'
import video from '../../../assets/blog/blog5/blog5-video.mp4'



export default function Blog5() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog5>

                <div id="container1">

                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Descubra neste blog como esses espaços de trabalho
                            compartilhados podem revolucionar a maneira como você
                            trabalha.
                        </h1>
                    </div>

                    <div id="container2">


                        <div className="texto">
                            <p>
                                À medida que o cenário de trabalho evolui, os <span> coworkings</span> têm se tornado uma escolha
                                popular para aqueles que buscam flexibilidade e produtividade.
                            </p>
                        </div>

                        <div className="img">
                            <img src={foto1} alt="" />
                        </div>
                        <div className="texto">
                            <p>
                                Mas, o que mais muda de um ambiente de trabalho tradicional para um
                                <span> escritório compartilhado? </span>
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Em primeiro lugar, os <span> coworkings </span> geralmente oferecem contratos flexíveis de locação, que
                                podem variar de horas ou dias a meses. Isso é muito mais flexível do que os compromissos de
                                locação de longo prazo associados a espaços de escritório tradicionais.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Um segundo ponto de importante relevância é o networking que o <span>coworking</span>  proporciona.
                                Você compartilha o espaço com uma variedade de profissionais de diferentes setores e pode
                                facilmente fazer conexões valiosas. Em contrapartida, em um escritório tradicional, você está
                                normalmente cercado por colegas da mesma empresa, limitando as oportunidades de
                                networking externo.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Os <span>coworkings</span> costumam ser projetados para criar ambientes de trabalho agradáveis e
                                inspiradores, com decoração moderna, iluminação adequada e espaços abertos que
                                incentivam a sua criatividade e produtividade.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Os custos de locação em um <span>coworking</span>  são mais baixos do que alugar um espaço de
                                escritório mais tradicional, especialmente quando se considera o custo total, incluindo serviços
                                e comodidades compartilhadas. Em um espaço de trabalho compartilhado, você compartilha
                                recursos como impressoras, scanners, salas de reunião, áreas de descanso, cozinhas e até
                                mesmo serviços administrativos com outras empresas e profissionais.


                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Essas diferenças destacam por que os <span>coworkings</span>  são uma escolha atraente para muitos
                                profissionais e empresas que buscam flexibilidade, economia e uma experiência de trabalho
                                mais dinâmica.


                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Confira abaixo 5 benefícios que você encontra no <span>Temasek Coworking:</span> 
                            </p>
                        </div>

                        <div className="img">
                            <video controls>
                                <source src={video} type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                            </video>
                        </div>


                    </div>

                </div>
            </StyledBlog5>
            <Rodape />
        </>
    )
}