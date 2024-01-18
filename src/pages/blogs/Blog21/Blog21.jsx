import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blog/blog21/foto1.png'



import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog21() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            A ascensão de espaços
                            compartilhados no Brasil
                        </h1>
                    </div>

                    <div id="container2">

                        <div className="subTitulo" id="subTitulo1">
                            <p>
                                O conceito de coworking chegou ao Brasil na virada do século.
                                Confira a seguir como ocorreu essa revolução
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Os coworking chegaram ao Brasil trazendo uma proposta inovadora para profissionais que
                                buscavam alternativas aos escritórios convencionais. A ideia de espaços compartilhados, onde
                                freelancers, empreendedores e empresas podiam compartilhar não apenas o espaço, mas
                                também ideias e experiências, rapidamente ganhou adeptos.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Nos últimos dez anos, testemunhamos um crescimento exponencial de espaços de coworking
                                no Brasil. De grandes metrópoles a cidades menores, esses locais tornaram-se uma presença
                                notável, oferecendo uma gama diversificada de opções para profissionais de todas as áreas
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <p>
                                O que começou como uma escolha principalmente para freelancers e startups evoluiu.
                                Grandes corporações e empresas estabelecidas estão reconhecendo os benefícios do
                                coworking. A flexibilidade, a economia de custos e a atmosfera inovadora têm atraído até
                                mesmo organizações tradicionais
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Os coworkings no Brasil não são apenas espaços de trabalho compartilhados. Eles são
                                ecossistemas completos, oferecendo desde salas privativas e estações de trabalho
                                compartilhadas até salas de reunião e áreas de convivência. Muitos espaços também
                                fornecem serviços adicionais, como recepção, café, e programas de eventos e networking
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A ascensão dos coworkings no Brasil também está intrinsecamente ligada ao estímulo ao
                                empreendedorismo. Esses espaços oferecem mais do que apenas um local para trabalhar;
                                eles fornecem uma comunidade que apoia o crescimento, oferecendo oportunidades de
                                networking.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                À medida que o Brasil avança na era digital, os escritórios compartilhados têm desempenhado
                                um papel vital na transformação digital do país. Esses espaços oferecem a infraestrutura
                                tecnológica necessária, permitindo que profissionais estejam na vanguarda das tendências
                                digitais
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A pandemia de Covid-19 trouxe desafios, mas os coworkings mostraram resiliência e
                                capacidade de adaptação. Muitos implementaram medidas de segurança, espaços mais
                                espaçados e soluções híbridas para atender às novas demandas dos profissionais que agora
                                valorizam ainda mais a flexibilidade
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                O futuro colaborativo do trabalho no Brasil
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A ascensão dos coworkings no Brasil é uma narrativa de transformação e progresso no
                                cenário profissional. Esses espaços estão moldando o futuro do trabalho, promovendo uma
                                mentalidade colaborativa, inovação e flexibilidade que ressoa com as demandas dos
                                profissionais modernos. À medida em que continuamos a abraçar essa revolução, trilhamos
                                um caminho para um futuro de trabalho mais dinâmico e inspirador no Brasil. Conte com o
                                Temasek Coworking para alavancar a sua carreira
                            </p>
                        </div>







                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 19/01/2024
                            </p>
                        </div>

                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}