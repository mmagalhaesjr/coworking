import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blog/blog20/1.png'


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog20() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            É possível receber clientes em um
                            coworking?
                        </h1>
                    </div>

                    <div id="container2">

                        <div className="subTitulo" id="subTitulo1">
                            <p>
                                Confira a seguir se é possível receber um cliente em um
                                espaço de trabalho compartilhado
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Você provavelmente está ciente das inúmeras vantagens que o coworking oferece para
                                impulsionar um negócio próprio. Com infraestrutura moderna, internet de alta velocidade,
                                localização privilegiada e diminuição de custos, os escritórios compartilhados proporcionam
                                diversas oportunidades de networking.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                No entanto, diante de tantos benefícios, surge uma dúvida comum: como receber os clientes
                                em um espaço compartilhado como o coworking? Como assegurar a privacidade e a
                                produtividade durante as reuniões nesse contexto? É por isso que existem as salas de
                                reunião.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Salas de Reunião: Seu espaço privado em um mundo compartilhado
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Felizmente, a maioria dos coworkings oferece salas de reuniões aos seus membros, seja
                                como parte do pacote mensal ou como serviço avulso. Normalmente, o agendamento é
                                simples e pode ser feito online ou por telefone. As salas de reunião permitem um encontro
                                particular e intimista, além de não atrapalhar os outros profissionais que utilizam o espaço
                                compartilhado.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Vale a pena ensaiar, já que cada hora na sala de reunião tem seu
                                valor
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Tempo é dinheiro, portanto, se a reunião é de prospecção, é válido ensaiar antes. Estude o
                                texto, tenha o ritmo de sua fala e os objetivos prontos e ensaiados. Com o assunto na ponta
                                da língua, você poderá resumi-lo para qualquer um, aumentando as chances de ficar na
                                memória de um futuro cliente.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="subTitulo">
                            <p>
                                Teste tudo antes
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Por mais que a infraestrutura do coworking seja de primeira, imprevistos acontecem. Chegue
                                antes para testar projetor, arquivo, pendrive e outros itens tecnológicos. Isso vale também
                                para os itens que serão oferecidos ao cliente, como máquina de café e senha diferenciada de
                                Wifi para visitantes. Backup nunca é demais!
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Tranquilidade em meio ao movimento
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Coworkings podem ser agitados, afinal, são diversos profissionais compartilhando um mesmo
                                espaço. Entretanto, uma das regras de comportamento dos membros de um coworking é
                                manter o volume de ligações e reuniões baixo, priorizando o silêncio. Caso seja necessário, as
                                salas de reunião são os locais adequados para não se preocupar com o barulho.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                O escritório não é seu, mas você pode deixar sua marca nele
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Ao se envolver ativamente com outros profissionais do coworking, você não apenas fortalece
                                suas relações no presente, mas também estabelece uma base para futuras colaborações e
                                oportunidades de negócios. O escritório pode não ser exclusivamente seu, mas a marca que
                                você constrói por meio do networking certamente será única e impactante. Portanto, não
                                hesite em explorar as possibilidades de crescimento mútuo que um ambiente de coworking
                                oferece! Aqui no Temasek Coworking você encontra salas de reunião e privativas prontas para
                                receber você e seus clientes! Entre em contato conosco e saiba mais sobre os nossos
                                serviços
                            </p>
                        </div>

                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 15/01/2024
                            </p>
                        </div>

                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}