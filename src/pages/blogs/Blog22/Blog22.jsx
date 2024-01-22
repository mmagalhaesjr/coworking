import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blog/blog22/1.png'



import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog22() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Redefinindo o trabalho: Inovações
                            pós-pandemia
                        </h1>
                    </div>

                    <div id="container2">

                        <div className="subTitulo" id="subTitulo1">
                            <p>
                                A seguir, exploraremos as inovações ocorridas durante e após
                                a pandemia, ressaltando as mudanças que estão
                                reconfigurando a maneira como encaramos o trabalho.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A pandemia redefiniu o trabalho, estimulando a busca por alternativas inovadoras.
                                Essa crise global não apenas exigiu respostas imediatas para a continuidade dos negócios, mas
                                também inspirou uma busca por métodos mais ágeis e colaborativos. O trabalho remoto,
                                inicialmente adotado como uma medida de emergência, desencadeou uma mudança cultural
                                duradoura, destacando a necessidade de flexibilidade.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="subTitulo">
                            <p>
                                Trabalho remoto como norma
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O trabalho remoto, antes uma exceção, tornou-se a norma durante a pandemia. Exploramos
                                como essa mudança significativa proporcionou flexibilidade aos profissionais, permitindo que
                                equilibrassem as demandas profissionais com as necessidades pessoais.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Tecnologia como facilitadora da mudança
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A inovação tecnológica desempenhou um papel crucial na adaptação pós-pandemia. Desde
                                plataformas de colaboração até ferramentas de gerenciamento remoto, a tecnologia capacitou
                                equipes a permanecerem conectadas e produtivas em ambientes virtuais.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Novas dinâmicas colaborativas
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Com as pessoas dispersas geograficamente, as dinâmicas de colaboração evoluíram. A ênfase
                                na comunicação clara, no uso eficaz do virtual e na gestão de projetos tornou-se a regra.
                                Ferramentas de colaboração em tempo real e metodologias ágeis estão sendo adotadas para
                                superar as barreiras virtuais e fortalecer a união da equipe.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Cultura empresarial de valorização da saúde e bem-estar
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A pandemia destacou a importância do bem-estar e da saúde mental dos funcionários.
                                Organizações estão repensando suas culturas empresariais para incluir programas de suporte
                                emocional, flexibilidade de horários e iniciativas que promovam um equilíbrio saudável entre vida
                                profissional e pessoal. A construção de uma cultura centrada nas pessoas é essencial para o
                                sucesso a longo prazo.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Adaptação e flexibilidade no ambiente profissional
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Os escritórios compartilhados surgiram como uma solução para os profissionais que buscam
                                modos de trabalho mais flexíveis e uma rede de networking. Além de fornecer uma infraestrutura
                                de trabalho adaptável, os coworkings promovem a interação profissional, estimulam a criatividade
                                e oferecem uma alternativa eficaz para aqueles que desejam escapar do isolamento do home
                                office. Conte conosco do Temasek Coworking para aprimorar a qualidade do seu negócio, com
                                ambiente inspirador e colaborativo! Marque sua visita e conheça nossa primeira unidade em Juiz
                                de Fora!
                            </p>
                        </div>









                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 22/01/2024
                            </p>
                        </div>

                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}