import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blog/blog19/1.png'


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog19() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Home office: A importância de
                            encontros presenciais no modelo
                            de trabalho híbrido
                        </h1>
                    </div>

                    <div id="container2">

                        <div className="subTitulo" id="subTitulo1">
                            <p>
                                Entenda os 5 motivos pelos quais a interação face a face é
                                crucial na eficácia do trabalho não presencial
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <p>
                                De acordo com pesquisas, o trabalho híbrido produz um impacto positivo real no equilíbrio
                                entre a vida profissional e pessoal das pessoas. Uma delas é uma pesquisa da WeWork, com
                                a Page Outsourcing, na qual 76% dos brasileiros dizem que a produtividade aumentou sob
                                esse regime e 73% certificaram melhora na saúde mental.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A flexibilidade proporcionada pela combinação de trabalho remoto e presencial oferece
                                inúmeras vantagens, mas é fundamental reconhecer a importância dos encontros presenciais
                                nesse contexto.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                1. Construção de relacionamentos pessoais
                            </p>
                        </div>
                        <div className="texto">
                            <p>

                                O aspecto humano é fundamental em qualquer ambiente de trabalho. Enquanto o encontro
                                virtual facilita a comunicação, os presenciais permitem construir relacionamentos mais
                                profundos e significativos.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                2. Estímulo à criatividade e inovação
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A criatividade muitas vezes prospera em ambientes informais e descontraídos. Os encontros
                                presenciais proporcionam oportunidades para sessões de brainstorming, discussões
                                espontâneas e interações casuais que podem resultar em ideias inovadoras. A dinâmica do
                                contato pessoal é difícil de replicar totalmente virtualmente, e essas experiências presenciais
                                podem desencadear insights valiosos.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                3. Melhoria na comunicação
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Embora a tecnologia tenha avançado consideravelmente, a comunicação virtual ainda possui
                                limitações. A interpretação de mensagens de texto ou até mesmo de videochamadas pode ser
                                desafiadora em comparação com a comunicação presencial. Os encontros face a face ajudam
                                a reduzir mal-entendidos, facilitando uma comunicação mais clara e eficaz.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                4. Fomento da cultura organizacional
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A cultura de uma empresa é moldada pela interação constante entre seus membros. Os
                                encontros presenciais permitem reforçar os valores da organização, alinhar objetivos e
                                compartilhar a visão de forma mais tangível. Isso contribui para a construção de uma cultura
                                organizacional sólida e coesa.

                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                5. Aceleração do processo de tomada de decisão

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O encontro presencial no ambiente de trabalho desempenha um papel crucial na aceleração
                                do processo de tomada de decisão. Reuniões presenciais possibilitam discussões mais
                                dinâmicas, permitindo que as equipes se envolvam em debates mais rápidos e decisões
                                assertivas. A agilidade na resolução de questões complexas é potencializada quando os
                                membros da equipe podem compartilhar ideias de forma direta e imediata, otimizando o fluxo
                                de trabalho e impulsionando a eficiência operacional.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Embora o trabalho híbrido proporcione flexibilidade e eficiência, não se pode subestimar a
                                importância dos encontros presenciais. A combinação equilibrada de interações virtuais e
                                presenciais é a chave para um modelo de trabalho híbrido bem-sucedido. Ao reconhecer e
                                priorizar a dimensão humana, as organizações podem colher os benefícios de uma equipe
                                coesa, criativa e produtiva, moldando o futuro do trabalho de maneira sustentável e inovadora.
                                Conte com o Temasek Coworking para otimizar o seu trabaho!

                            </p>
                        </div>

                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 08/01/2024
                            </p>
                        </div>

                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}