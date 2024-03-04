import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';

import foto1 from '../../../assets/blog/blog28/1.png'
import foto2 from '../../../assets/blog/blog28/1.png'






export default function Blog28() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Como ser produtivo no home office?
                        </h1>
                    </div>
                    <div id="container2">

                        <div className="subTitulo" >
                            <p>
                                Se você está em busca de dicas práticas e insights para
                                otimizar seu desempenho no home office, este blog é para
                                você
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Trabalhar de casa oferece a flexibilidade que muitos desejam, mas também apresenta
                                desafios quando se trata de manter a produtividade. A seguir, vamos explorar algumas
                                estratégias para transformar seu ambiente doméstico em um espaço altamente produtivo.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="subTitulo">
                            <p>
                                Crie um espaço de trabalho em sua casa
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O primeiro passo é estabelecer uma área específica para o trabalho. Isso ajuda a separar os
                                limites entre vida profissional e pessoal e cria um ambiente propício à concentração. Mantenha
                                esse espaço organizado e livre de distrações.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Defina uma rotina clara
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Estabeleça horários regulares para começar e encerrar o trabalho. Manter uma rotina
                                consistente ajuda a treinar seu cérebro para focar nas tarefas durante o horário de expediente,
                                aumentando a eficiência ao longo do tempo.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Vista-se como se estivesse no escritório
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Trocar o pijama por roupas mais formais pode ter um impacto psicológico significativo. Vestir-
                                se para o trabalho ajuda a criar uma mentalidade profissional e prepara você para enfrentar as
                                demandas do dia.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Estabeleça metas diárias
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Defina metas realistas para cada dia de trabalho. Isso proporciona clareza sobre as
                                prioridades e mantém você focado nas tarefas mais importantes. Ao atingir metas menores
                                diariamente, você se sentirá mais realizado e motivado.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Faça pausas estratégicas
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Divida o dia com pausas curtas e estratégicas. Intervalos regulares podem melhorar a
                                concentração e evitar o cansaço. Utilize técnicas como a Técnica Pomodoro (trabalho intenso
                                por 25 minutos, seguido de uma pausa de 5 minutos) para otimizar a produtividade.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto2} alt="foto coworking" />
                        </div>
                        <div className="subTitulo">
                            <p>
                                Utilize ferramentas de gestão do tempo
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Aproveite aplicativos e ferramentas de gestão do tempo para acompanhar suas atividades
                                diárias. Essas ferramentas podem ajudar a identificar onde seu tempo está sendo mais
                                eficientemente empregado e onde melhorias podem ser feitas.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Estabeleça limites de comunicação
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Comunique-se de forma eficaz, mas também estabeleça limites. Defina horários específicos
                                para reuniões e respostas a e-mails. Isso evita a sobrecarga e permite que você se concentre
                                em suas tarefas principais.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Equilíbrio entre produtividade e bem-estar
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Trabalhar de casa pode ser uma jornada produtiva e gratificante quando se adota uma
                                abordagem equilibrada. Ao implementar essas estratégias, você não apenas maximiza sua
                                produtividade, mas também cria um ambiente propício ao bem-estar e ao sucesso a longo
                                prazo no home office. Caso queira intercalar o home office com o trabalho em escritório, o
                                Temasek Coworking oferece diferentes planos de Estação de Trabalho Dedicada, que permite
                                utilizar o espaço de acordo com os dias de semana escolhidos.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Venha conhecer o nosso espaço e todos os benefícios que oferecemos!
                            </p>
                        </div>




                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 04/03/2024
                            </p>
                        </div>

                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}