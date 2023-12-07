import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';
import foto1 from '../../../assets/blog/blog13/foto1.png'


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog13() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            3 Dicas para se tornar um empreendedor
                            de sucesso
                        </h1>
                    </div>

                    <div id="container2">

                        <div className="subTitulo" id="subTitulo1">
                            <p>
                                Vamos explorar três dicas fundamentais para ajudar você a trilhar
                                o caminho do empreendedorismo de forma bem-sucedida.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O mundo do empreendedorismo é desafiador e recompensador, e muitos aspirantes a
                                empreendedores desejam alcançar o sucesso. No entanto, a jornada para se tornar um
                                empreendedor de sucesso exige mais do que apenas uma ideia brilhante.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Abaixo, listamos 3 estratégias para você que deseja ser bem-sucedido nos negócios!
                            </p>
                        </div>

                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>

                        <div className="subTitulo">
                            <p>
                                Encontre a Sua Paixão e Propósito

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O primeiro passo para se tornar um empreendedor de sucesso é encontrar algo que você seja
                                apaixonado e que o motive profundamente. Identificar sua paixão e propósito é crucial, pois
                                será essa paixão que o impulsionará nos momentos difíceis.
                            </p>
                        </div>
                        <ul className="lista">
                            <li>
                                Autoconhecimento: Faça uma reflexão profunda sobre suas paixões, interesses e valores
                                pessoais. O que o inspira? O que você gostaria de mudar no mundo?
                            </li>
                        </ul>
                        <ul className="lista">
                            <li>
                                Identificação de Oportunidades: Procure oportunidades de negócios que estejam
                                alinhadas com sua paixão e propósito. Empreender em algo que você ama tornará o
                                trabalho mais gratificante.
                            </li>
                        </ul>
                        <div className="subTitulo">
                            <p>
                                Aprenda Continuamente
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A aprendizagem contínua é essencial no mundo dos negócios. Esteja disposto a adquirir
                                novas habilidades, aprimorar seu conhecimento e se adaptar às mudanças em seu setor.

                            </p>
                        </div>
                        <ul className="lista">
                            <li>
                                Mentoria: Busque orientação de mentores experientes que possam compartilhar suas
                                experiências e insights
                            </li>
                        </ul>
                        <ul className="lista">
                            <li>
                                Mentoria: Busque orientação de mentores experientes que possam compartilhar suas
                                experiências e insights
                            </li>
                        </ul>
                        <div className="subTitulo">
                            <p>
                                Desenvolva Habilidades de Resiliência
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O empreendedorismo é repleto de desafios e fracassos. A resiliência é a capacidade de
                                superar obstáculos e continuar avançando, mesmo quando as coisas ficam difíceis.
                            </p>
                        </div>
                        <ul className="lista">
                            <li>
                                Aceitação do Fracasso: Entenda que o fracasso faz parte do processo empreendedor. Useo como uma oportunidade de aprendizado e crescimento.
                            </li>
                        </ul>
                        <ul className="lista">
                            <li>
                                Mentalidade Positiva: Cultive uma mentalidade positiva, focando nas soluções em vez dos
                                problemas. Isso o ajudará a enfrentar desafios com confiança.
                            </li>
                        </ul>
                        <div className="texto">
                            <p>
                                Tornar-se um empreendedor de sucesso não é uma jornada fácil, mas é incrivelmente
                                gratificante. Encontrar sua paixão e propósito, aprender continuamente e desenvolver
                                habilidades de resiliência são passos fundamentais para construir um negócio sólido e
                                duradouro
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Lembre-se de que o sucesso não acontece da noite para o dia, mas com dedicação e
                                perseverança, você pode transformar sua visão em realidade e alcançar seus objetivos como
                                empreendedor. Portanto, comece hoje mesmo e dê os primeiros passos em direção ao
                                sucesso empreendedor!

                            </p>
                        </div>

                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 04/12/2023
                            </p>
                        </div>





                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}