import { StyledBlog7 } from "./styled"

import foto1 from '../../../assets/blog/blog7/blog7-f1.webp'


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog7() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog7>

                <div id="container1">



                    <div id="titulo">
                        <h1>
                            Descubra o poder da comunidade:
                            Como os Coworkings estão
                            transformando a maneira como
                            trabalhamos

                        </h1>
                    </div>

                    <div id="container2">
                        <div className="subTitulo">
                            <p>


                            </p>
                        </div>

                        <div className="img">
                            <img src={foto1} alt="" />
                        </div>

                        <div className="texto">
                            <p>
                                O mundo do trabalho nunca foi tão dinâmico quanto é hoje. As transformações digitais, as
                                mudanças nas expectativas dos funcionários e os desafios após a pandemia alteraram
                                fundamentalmente a forma como abordamos nossas carreiras. E no centro dessa revolução
                                está a ascensão dos <span>coworkings</span>. Estes espaços de  <span> trabalho compartilhados </span>não são
                                apenas locais para realizar tarefas; eles são verdadeiros impulsionadores da colaboração,
                                inovação e construção de networking.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Os <apan>coworkings</apan>  são conhecidos por criar um ambiente propício à colaboração. A
                                proximidade de profissionais de diferentes setores e especializações torna mais fácil a troca
                                de ideias e a formação de parcerias. O espaço aberto e as áreas de convivência incentivam
                                discussões informais, que muitas vezes levam a projetos colaborativos surpreendentes.
                            </p>
                        </div>

                        <div className="texto">
                            <p>
                                Uma das maiores vantagens dos <span>coworkings</span>  é a oportunidade de expandir sua rede
                                profissional. Ao interagir regularmente com outros ocupantes, você pode conhecer pessoas
                                de diversas áreas, criar conexões valiosas e até mesmo encontrar oportunidades de emprego
                                ou novos clientes.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Outro fato interessante é que a maioria dos <span> espaços de trabalho compartilhado </span> se
                                preocupam com o bem-estar de seus membros. Um ambiente de trabalho saudável contribui
                                significativamente para a produtividade e a satisfação dos profissionais que o frequentam.

                            </p>
                        </div>

                        <div className="texto">
                            <p>
                                A diversidade de perspectivas e conhecimentos presentes nos <span>coworkings</span>  estimula a
                                inovação. Muitos empreendedores e startups começam em coworkings, onde encontram o
                                suporte necessário para transformar suas ideias em realidade. Projetos inovadores muitas
                                vezes têm sua origem em um <span>espaço compartilhado.</span>
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                De fato, os <span> coworkings</span> são uma antecipação do futuro do trabalho. Eles abraçam a
                                flexibilidade, a diversidade e a inovação que serão cada vez mais necessárias em nossa
                                economia globalizada e digital. Ao descobrir o poder da colaboração em um coworking,
                                você pode não apenas melhorar sua carreira, mas também fazer parte de uma revolução que
                                está moldando a maneira como trabalhamos.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Fique por dentro nas novidades sobre o mundo do <span>coworking</span>  em nosso blog e redes sociais!
                            </p>
                        </div>


                    </div>

                </div>
            </StyledBlog7>
            <Rodape />
        </>
    )
}