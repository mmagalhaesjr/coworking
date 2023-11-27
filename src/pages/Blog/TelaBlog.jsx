import { StyledBlog } from "./styled";

// import { useNavigate } from 'react-router-dom';

import { BsWhatsapp } from 'react-icons/bs';

import foto1 from "../../assets/blog/blog1/foto1.webp"
import foto2 from "../../assets/blog/blog2/foto1.webp"
import foto3 from "../../assets/blog/blog3/foto1.webp"
import foto4 from "../../assets/blog/blog4/blog4-f1.webp"
import foto5 from "../../assets/blog/blog5/foto1.webp"
import foto6 from "../../assets/blog/blog6/blog6-f1.webp"
import foto7 from "../../assets/blog/blog7/blog7-f1.webp"
import foto8 from "../../assets/blog/blog8/blog8-capa.webp"
import foto9 from "../../assets/blog/blog9/blog9-f2.webp"
import foto10 from "../../assets/blog/blog10/blog10-f1.webp"
import foto11 from "../../assets/blog/blog11/foto1.png"
import foto12 from "../../assets/blog/blog12/foto1.jpg"


import Cabecalho2 from '../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../components/Rodape/Rodape';


import { Helmet } from 'react-helmet';

export default function Blog() {

    // const navegar = useNavigate()


    return (


        <>

            <Helmet>
                <title>Temasek Coworking Blog</title>
                <meta name="description" content="Bem-vindo ao Temasek Coworking JF - O melhor espaço de coworking em Juiz de Fora. Oferecemos ambientes colaborativos para trabalho, networking e eventos. Conheça nossos espaços e planos. confira nosso conteudo em blog" />
            </Helmet>

            <Cabecalho2 />

            <StyledBlog>

                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>


                <div id="titulo">
                    <h1>
                        Confira nosso conteúdo em Blog
                    </h1>
                </div>

                <div id="container">

                    {/* <a href="/eventos"  >Eventos</a> */}

                    <a className="materia" href="/blog12">
                        <div className="foto">
                            <img src={foto12} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Mark Zuckerberg - Como construir o
                                futuro
                            </h1>
                        </div>
                        <p>
                            Confira a entrevista com Mark Zuckerberg, co-fundador do
                            Facebook e sua empresa-mãe Meta

                        </p>
                    </a>


                    <a className="materia" href="/blog11">
                        <div className="foto">
                            <img src={foto11} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Construindo uma carreira de sucesso:
                                princípios e comportamentos essenciais
                            </h1>
                        </div>
                        <p>
                            Neste blog, vamos explorar alguns princípios básicos que podem
                            ajudar você a alcançar o sucesso profissional que deseja.

                        </p>
                    </a>

                    <a className="materia" href="/blog10">
                        <div className="foto">
                            <img src={foto10} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Quanto deveria investir em um
                                espaço de coworking?
                            </h1>
                        </div>
                        <p>
                            A pergunta que muitos profissionais se fazem é: &quot;Quanto eu
                            devo gastar em um coworking	&quot;...
                        </p>
                    </a>

                    <a className="materia" href="/blog9">
                        <div className="foto">
                            <img src={foto9} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Coworking e Bem-Estar: Como
                                criar um espaço de trabalho saudável
                            </h1>
                        </div>
                        <p>
                            Neste blog, exploraremos como criar um espaço de
                            coworking que priorize o bem-estar dos membros e promova...
                        </p>
                    </a>

                    <a className="materia" href="/blog8">
                        <div className="foto">
                            <img src={foto8} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Descubra o cenário ideal: Como
                                encontrar o espaço de coworking
                                perfeito
                            </h1>
                        </div>
                        <p>
                            Vamos explorar as características que definem os melhores
                            espaços...
                        </p>
                    </a>

                    <a className="materia" href="/blog7">
                        <div className="foto">
                            <img src={foto7} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Descubra o poder da comunidade:
                                Como os Coworkings estão
                                transformando a maneira como
                                trabalhamos
                            </h1>
                        </div>
                        <p>
                            Neste blog, exploraremos como os coworkings estão
                            revolucionando a maneira como trabalhamos...
                        </p>
                    </a>

                    <a className="materia" href="/blog6">
                        <div className="foto">
                            <img src={foto6} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Desbloqueando o Potencial:
                                Estratégias para Maximizar sua Experiência em um Coworking
                            </h1>
                        </div>
                        <p>
                            Para tirar o máximo proveito de seu espaço de coworking ,
                            é importante adotar uma abordagem estratégica, confira a seguir:...
                        </p>
                    </a>

                    <a className="materia" href="/blog5">
                        <div className="foto">
                            <img src={foto5} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Trabalho Flexível: Desvendando os
                                Benefícios do Coworking
                            </h1>
                        </div>
                        <p>
                            Descubra neste blog como esses espaços de trabalho
                            compartilhados podem revolucionar...
                        </p>
                    </a>


                    <a className="materia" href="/blog4">
                        <div className="foto">
                            <img src={foto4} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                É possível ter privacidade em um
                                escritório compartilhado?

                            </h1>
                        </div>
                        <p>
                            Confira abaixo algumas maneiras de garantir a privacidade
                            em um espaço de coworking...
                        </p>
                    </a>

                    <a className="materia" href="/blog3">
                        <div className="foto">
                            <img src={foto3} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Curiosidades sobre o Coworking
                            </h1>
                        </div>
                        <p>
                            O que você ainda não sabe sobre os escritórios
                            compartilhados

                        </p>
                    </a>

                    <a className="materia" href="/blog2">
                        <div className="foto">
                            <img src={foto2} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Como economizar para investir?
                            </h1>
                        </div>
                        <p>
                            Conheça algumas estratégias que podem aumentar suas
                            oportunidades de negócio...
                        </p>
                    </a>

                    <a className="materia" href="/blog1" >
                        <div className="foto">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <h1>
                                Por que o coworking é uma escolha
                                inteligente?
                            </h1>
                        </div>
                        <p>
                            O coworking abrange um espaço de trabalho compartilhado por profissionais
                            independentes...
                        </p>
                    </a>

                </div>
            </StyledBlog>

            <Rodape />
        </>
    )
}