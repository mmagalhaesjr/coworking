import { StyledBlogPagina } from "./styled";
import { Helmet } from 'react-helmet';

import TelaBlog from "../../components/Blog/TelaBlog";

import Cabecalho2 from '../../components/Cabecalho2/Cabecalho2';

import Rodape from '../../components/Rodape/Rodape';

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


export default function BlogPagina() {
    return (


        <>
         <Helmet>
                <title>Temasek Coworking Blog</title>
                <meta name="description" content="Bem-vindo ao Temasek Coworking JF - O melhor espaço de coworking em Juiz de Fora. Oferecemos ambientes colaborativos para trabalho, networking e eventos. Conheça nossos espaços e planos. confira nosso conteudo em blog" />
            </Helmet>


            <Cabecalho2 />



            <StyledBlogPagina>

            <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                <div id="titulo">
                    <h1>
                        Confira nosso conteúdo em Blog
                    </h1>
                </div>

                <div id="container">

                    <TelaBlog
                        link='/blog12'
                        img={foto12}
                        titulo=' Mark Zuckerberg - Como construir o futuro'
                        texto='Confira a entrevista com Mark Zuckerberg, co-fundador do
                        Facebook e sua empresa-mãe Meta'
                    />
                    <TelaBlog
                        link='/blog11'
                        img={foto11}
                        titulo=' Construindo uma carreira de sucesso:princípios e comportamentos essenciais'
                        texto=' Neste blog, vamos explorar alguns princípios básicos que podem
                    ajudar você a alcançar o sucesso profissional que deseja.'
                    />
                    <TelaBlog
                        link='/blog10'
                        img={foto10}
                        titulo=' Quanto deveria investir em um espaço de coworking?'
                        texto=' A pergunta que muitos profissionais se fazem é: &quot;Quanto eu
                    devo gastar em um coworking	&quot;...'
                    />
                    <TelaBlog
                        link='/blog9'
                        img={foto9}
                        titulo='Coworking e Bem-Estar: Como criar um espaço de trabalho saudável'
                        texto='Neste blog, exploraremos como criar um espaço de
                    coworking que priorize o bem-estar dos membros e promova...'
                    />
                    <TelaBlog
                        link='/blog8'
                        img={foto8}
                        titulo='  Descubra o cenário ideal: Como encontrar o espaço de coworking perfeito'
                        texto='Vamos explorar as características que definem os melhores
                    espaços...'
                    />
                    <TelaBlog
                        link='/blog7'
                        img={foto7}
                        titulo=' Descubra o poder da comunidade: Como os Coworkings estão transformando a maneira como trabalhamos'
                        texto='Neste blog, exploraremos como os coworkings estão
                    revolucionando a maneira como trabalhamos...'
                    />
                    <TelaBlog
                        link='/blog6'
                        img={foto6}
                        titulo=' Desbloqueando o Potencial: Estratégias para Maximizar sua Experiência em um Coworking'
                        texto=' Para tirar o máximo proveito de seu espaço de coworking ,
                    é importante adotar uma abordagem estratégica, confira a seguir:...'
                    />
                    <TelaBlog
                        link='/blog5'
                        img={foto5}
                        titulo=' Trabalho Flexível: Desvendando os Benefícios do Coworking'
                        texto='Descubra neste blog como esses espaços de trabalho
                    compartilhados podem revolucionar...'
                    />
                    <TelaBlog
                        link='/blog4'
                        img={foto4}
                        titulo=' É possível ter privacidade em um escritório compartilhado?'
                        texto='Confira abaixo algumas maneiras de garantir a privacidade
                    em um espaço de coworking...'
                    />
                    <TelaBlog
                        link='/blog3'
                        img={foto3}
                        titulo='Curiosidades sobre o Coworking'
                        texto=' O que você ainda não sabe sobre os escritórios
                    compartilhados'
                    />
                    <TelaBlog
                        link='/blog2'
                        img={foto2}
                        titulo=' Como economizar para investir?'
                        texto='Conheça algumas estratégias que podem aumentar suas
                    oportunidades de negócio...'
                    />
                    <TelaBlog
                        link='/blog1'
                        img={foto1}
                        titulo='Por que o coworking é uma escolha inteligente?'
                        texto=' O coworking abrange um espaço de trabalho compartilhado por profissionais
                    independentes...'
                    />
                </div>

            </StyledBlogPagina>

            <Rodape />


        </>
    )
}