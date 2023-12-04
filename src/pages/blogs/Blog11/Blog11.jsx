import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blog/blog11/foto1.png'
import foto2 from '../../../assets/blog/blog11/foto2.png'


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog11() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Construindo uma carreira de sucesso:
                            princípios e comportamentos essenciais
                        </h1>
                    </div>

                    <div id="container2">


                        <div className="subTitulo">
                            <p>
                                Neste blog, vamos explorar alguns princípios básicos que podem
                                ajudar você a alcançar o sucesso profissional que deseja.
                            </p>
                        </div>

                        <div className="texto">
                            <p>
                                Ter sucesso no âmbito profissional é um objetivo desejado por muitos, mas alcançá-lo não é
                                só uma questão de sorte, é resultado de princípios sólidos e comportamentos consistentes
                                que moldam sua jornada no mundo do trabalho.
                            </p>
                        </div>

                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>

                        <div className="texto">
                            <p>
                                A seguir, confira algumas sugestões que podem te tornar mais produtivo e aumentar os seus
                                resultados:
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Defina metas claras
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Ter metas definidas é fundamental para o sucesso profissional. Saiba onde você quer chegar
                                e estabeleça metas específicas, mensuráveis, alcançáveis, relevantes e com prazo. Isso dará
                                direção ao seu trabalho e o manterá focado.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Aprenda continuamente

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O aprendizado não tem fim. Esteja disposto a aprender e se adaptar às mudanças em seu
                                campo de atuação. Isso o manterá relevante e capacitado para enfrentar os desafios do
                                mercado de trabalho em constante evolução
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Desenvolva habilidades de comunicação
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A comunicação eficaz é crucial para o sucesso profissional. Aprimore suas habilidades de
                                comunicação verbal e escrita, saiba ouvir atentamente e aprenda a se expressar de forma
                                clara e concisa
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Seja organizado
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A organização é a chave para a produtividade. Utilize ferramentas de gestão do tempo,
                                mantenha uma agenda atualizada e priorize suas tarefas para evitar a sobrecarga de trabalho
                                e o estresse desnecessário
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Cultive relacionamentos profissionais

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Nenhum profissional alcança o sucesso sozinho. Invista tempo em construir e manter
                                relacionamentos profissionais sólidos. Isso pode levar a oportunidades de colaboração que
                                podem impulsionar sua carreira. Uma excelente alternativa para a colaboração são os
                                espaços de <span>coworking</span>. No  <a href="https://www.temasekjf.com.br"><span>Temasek Coworking </span></a> o
                                networking acontece diariamente
                            </p>
                        </div>

                        <div className="img">
                            <img src={foto2} alt="foto coworking" />
                        </div>

                        <div className="subTitulo">
                            <p>
                                Demonstre ética profissional

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A ética é um pilar do sucesso duradouro. Mantenha a integridade em todas as suas ações,
                                seja honesto, cumpra prazos e compromissos, e trate os outros com respeito.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Tenha Iniciativa
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Profissionais de sucesso não esperam que as oportunidades batam à porta; eles as criam.
                                Assuma a iniciativa, seja proativo e esteja disposto a assumir responsabilidades adicionais
                                quando apropriado.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Gerencie o estresse

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O sucesso não deve comprometer sua saúde ou bem-estar. Aprenda a gerenciar o estresse,
                                mantenha um equilíbrio entre trabalho e vida pessoal e cuide de sua saúde física e mental.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O sucesso profissional é uma jornada contínua que requer dedicação, paciência e o cultivo de
                                princípios e comportamentos sólidos.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Ao se dispor a seguir essas sugestões que você acabou de ler, você estará abrindo o
                                caminho para uma carreira bem-sucedida. Lembre-se de que o sucesso não acontece da
                                noite para o dia, mas com esforço e determinação, você pode alcançar seus objetivos
                                profissionais e prosperar em sua carreira.

                            </p>
                        </div>
                        <div className="texto" id="ultimoTexto">
                            <p>
                            Fique ligado nas nossas redes sociais para estar estar sempre atento às novidades queenvolvem o mundo do trabalho.
                            </p>
                        </div>


                    </div>

                </div>
            </StyledBlog>
            <Rodape />
        </>
    )
}