import { StyledBlog6 } from "./styled"

import foto1 from '../../../assets/blog/blog6/blog6-f1.webp'
import foto2 from '../../../assets/blog/blog6/blog6-f2.webp'

import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog6() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog6>

                <div id="container1">



                    <div id="titulo">
                        <h1>
                            Desbloqueando o Potencial:
                            Estratégias para Maximizar sua
                            Experiência em um <span>Coworking</span>
                        </h1>
                    </div>

                    <div id="container2">


                        <div className="subTitulo">
                            <p>
                                Para tirar o máximo proveito de seu espaço de <span>coworking</span> , é
                                importante adotar uma abordagem estratégica, confira a
                                seguir:
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                <span>Coworkings</span> estão rapidamente se tornando o local de trabalho preferido para profissionais
                                independentes, freelancers e até mesmo empresas. Esses espaços compartilhados oferecem
                                uma série de benefícios, como flexibilidade, networking e uma atmosfera produtiva. Neste
                                blog, vamos explorar dicas e estratégias para aproveitar ao máximo os <span>espaços de trabalho
                                    compartilhado </span> e garantir que ele se torne um trampolim para o seu sucesso profissional.

                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="" />
                        </div>
                        <div className="subTitulo">
                            <p>
                                Escolha o Coworking Certo:
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Antes de mais nada, escolha um <span>coworking</span>  que atenda às suas necessidades específicas.
                                Considere a localização, as comodidades, o preço e a comunidade de profissionais que o
                                espaço atrai.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Estabeleça uma Rotina Produtiva
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Mantenha uma rotina consistente. Defina metas diárias e horários de trabalho para manter a
                                disciplina e a produtividade.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Faça Networking Ativo
                            </p>
                        </div>

                        <div className="texto">
                            <p>
                                Aproveite as oportunidades de networking oferecidas pelo seu <span>coworking</span>. Participe de
                                eventos, seminários e happy hours para conhecer outros profissionais e potenciais clientes ou
                                parceiros de negócios.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Mantenha-se Organizado
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Mantenha sua estação de trabalho organizada para evitar distrações e aumentar a eficiência.
                                Use ferramentas de gerenciamento de tarefas e mantenha seus documentos digitais em
                                ordem.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto2} alt="" />
                        </div>
                    <div className="subTitulo">
                        <p>
                            Esteja Consciente do Ambiente
                        </p>
                    </div>
                    <div className="texto" >
                        <p>
                            Respeite as normas e regras do <span>coworking</span>. Mantenha o ambiente limpo e evite fazer barulho
                            excessivo, garantindo um espaço de trabalho agradável para todos.
                        </p>
                    </div>
                    <div className="subTitulo">
                        <p>
                            Esteja Aberto a Novas Experiências
                        </p>
                    </div>
                    <div className="texto" >
                        <p>
                            Esteja disposto a sair da sua zona de conforto e interagir com pessoas diferentes. Às vezes,
                            as melhores oportunidades surgem de lugares inesperados.
                        </p>
                    </div>
                    <div className="subTitulo">
                        <p>
                            Dê Feedback Construtivo
                        </p>
                    </div>
                    <div className="texto" >
                        <p>
                            Compartilhe feedback construtivo com a administração do <span>coworking</span> . Isso pode contribuir
                            para melhorias no espaço e na experiência geral dos ocupantes.
                        </p>
                    </div>
                    <div className="texto" >
                        <p>
                            Um espaço de <span>coworking</span> pode ser muito mais do que apenas um local de trabalho, pode ser
                            um ambiente de crescimento profissional e pessoal.
                        </p>
                    </div>
                    <div className="texto" >
                        <p>
                            Ao seguir essas dicas e adotar uma abordagem proativa, você pode aproveitar ao máximo seu
                            espaço de trabalho compartilhado. Lembre-se de que a chave está em fazer uso eficiente de
                            todas as oportunidades e recursos disponíveis em seu <span>coworking</span> escolhido.
                        </p>
                    </div>
                    <div className="texto" >
                        <p>
                            Nós, do <span>Temasek Coworking</span>, estamos de portar abertas para receber você e sua empresa,
                            com o objetivo de alavancar seu desempenho por meio de nossas instalações e atendimento!
                            Venha conhecer o nosso espaço localizado na Av. Rio Branco, número 1899, Centro, Juiz de
                            Fora.
                        </p>
                    </div>

                    </div>
                </div>
            </StyledBlog6>
            <Rodape />
        </>
    )
}