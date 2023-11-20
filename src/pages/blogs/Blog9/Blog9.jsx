import { StyledBlog9 } from "./styled"

import foto1 from '../../../assets/blog/blog9-f1.webp'

import { BsWhatsapp } from 'react-icons/bs';


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog9() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog9>

                <div id="container1">

                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Coworking e Bem-Estar: Como
                            criar um espaço de trabalho saudável
                        </h1>
                    </div>

                    <div id="container2">
                        <div className="subTitulo">
                            <p>
                                Neste blog, exploraremos como criar um espaço de
                                <span>coworking</span> que priorize o bem-estar dos membros e promova
                                um ambiente de trabalho saudável e produtivo.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                No mundo moderno, onde a linha entre trabalho e vida pessoal muitas vezes é tênue, o
                                bemestar no local de trabalho é mais importante do que nunca. Os espaços de <span>coworking</span>, que se
                                tornaram um refúgio para profissionais independentes, startups e empresas, estão liderando o
                                caminho na promoção de ambientes de trabalho saudáveis. Conheça alguns aspectos que
                                fazem a diferença em um ambiente que tem o bem-estar como foco:
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Design Inteligente
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O design do<span>espaço de trabalho compartilhado </span> desempenha um papel fundamental no
                                bem-estar dos membros. Por exemplo, optar por móveis ergonômicos que ofereçem suporte
                                adequado à postura evita tensões musculares. Além disso, é importante criar um layout que
                                promova a circulação e a interação, evitando espaços apertados e desconfortáveis
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                luminação e Ventilação Adequadas
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A iluminação natural e a ventilação adequada são essenciais para a saúde e o bem-estar.
                                Escolha um espaço com grandes janelas que permitam a entrada de luz natural e o acesso
                                ao ar fresco. Lâmpadas com luz branca e ajustável podem ajudar a criar um ambiente de
                                trabalho bem iluminado.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Áreas de Relaxamento e Descompressão
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Inclua áreas de relaxamento e descompressão em seu espaço de coworking. Sofás
                                confortáveis, poltronas e áreas de lounge criam espaços onde os membros podem relaxar,
                                socializar e recarregar as energias. Um ambiente descontraído ajuda a reduzir o estresse e
                                melhora o bem-estar geral.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Programas de bem-estar
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Considere a inclusão de programas de bem-estar no local, como por exemplo sessões de
                                exercícios em grupo ou palestras sobre o tema. Essas atividades incentivam um estilo de vida
                                ativo e saudável entre os membros, ao mesmo tempo que promovem a socialização e a
                                construção de relacionamentos
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Dicas para o equilíbrio trabalho-vida pessoal
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Fornecer orientações sobre o equilíbrio entre trabalho e vida pessoal é fundamental. Incentive
                                os membros a estabelecer limites, a criar horários de trabalho saudáveis e a tirar pausas
                                regulares para recarregar. Um espaço de <span>coworking</span>  que valoriza o bem-estar deve ser um
                                local onde as pessoas possam prosperar tanto profissional quanto pessoalmente.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Seu espaço de coworking pode se tornar um ambiente onde os membros prosperam não
                                apenas em suas carreiras, mas também em suas vidas pessoais. Investir no bem-estar é uma
                                estratégia inteligente que beneficiará tanto seus membros quanto seu negócio a longo prazo.
                            </p>
                        </div>


                        <div className="img">
                            <img src={foto1} alt="" />
                        </div>

                        <div className="texto">
                            <p>
                                Conte conosco do <span>Temasek Coworking</span> para tornar seus dias de trabalho mais agradáveis e
                                produtivos. Possuímos infraestrutura inovadora que promove a colaboração e a
                                flexibidade que você precisa para alavancar o seu negócio!
                            </p>
                        </div>


                    </div>

                </div>
            </StyledBlog9>
            <Rodape />
        </>
    )
}