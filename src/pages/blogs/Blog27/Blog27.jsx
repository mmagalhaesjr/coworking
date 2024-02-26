import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';

import foto1 from '../../../assets/blog/blog27/1.png'






export default function Blog27() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            FAQ: Respostas para as perguntas
                            mais frequentes sobre coworking
                        </h1>
                    </div>
                    <div id="container2">

                        <div className="subTitulo" >
                            <p>
                                Este blog tem as informações que você procura para aproveitar
                                ao máximo seu espaço de trabalho compartilhado
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Seja você um empreendedor iniciante, freelancer ou uma equipe estabelecida, o Temasek
                                Coworking está aqui para oferecer a você um ambiente inovador e colaborativo. Para garantir que
                                você tenha todas as informações necessárias, compilamos uma lista de perguntas frequentes
                                para esclarecer suas dúvidas sobre como aproveitar o coworking ao máximo!
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="subTitulo">
                            <p>
                                O que é coworking e como funciona?
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O coworking é um modelo de trabalho que ocorre em um espaço compartilhado, onde
                                profissionais independentes e empresas compartilham um ambiente de escritório. Oferecemos
                                uma variedade de opções, desde Estações de Trabalho compartilhadas até Salas Privativas,
                                promovendo um ambiente menos burocrático e facilitando o networking.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Quais serviços e instalações estão incluídos nos planos?
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Oferecemos uma gama de planos distintos, mas todos os serviços presenciais incluem acesso a
                                internet de alta velocidade, coffee break, recepção, serviço de concierge, acesso por
                                reconhecimento facial, armário locker e impressão. Confira os detalhes do seu serviço contratado
                                para saber todos os benefícios inclusos.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Posso usar o endereço do coworking como endereço comercial?
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Sim, muitos de nossos planos incluem a opção de usar nosso endereço como seu endereço
                                comercial. Ao escolher um endereço comercial em um coworking, você está optando por uma
                                imagem mais profissional, transmitindo confiança aos seus clientes e parceiros. Além disso, a
                                possibilidade de escolher um local estratégico acrescenta um toque de prestígio ao seu negócio.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Existem descontos para contratos de longo prazo?
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Sim, oferecemos descontos atrativos para contratos mais longos. Entendemos a importância de
                                manter uma relação duradoura com os membros do Temasek Coworking. Entre em contato com
                                nossa equipe para discutir opções personalizadas que atendam às suas necessidades.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Como é a segurança no espaço de coworking?
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A segurança é uma prioridade. Contamos com sistema de controle de acesso por
                                reconhecimento facial, câmeras de segurança 24h e uma equipe de recepção para garantir um
                                ambiente seguro e tranquilo para todos os nossos membros.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Como funciona o agendamento de Salas de Reunião?
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A locação da Sala de Reunião é feita por hora. O agendamento deve ser prévio, com
                                antecedência mínima de 1 dia para verificação da disponibilidade do espaço para a sua reunião,
                                workshop ou apresentação. A reserva pode ser feita de forma online ou com algum de nossos
                                recepcionistas.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                É possível passar o dia no coworking?
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Claro! Oferecemos a opção de Day Use, para que você experimente um dia de trabalho no
                                Temasek Coworking e vivencie o que nosso espaço e equipe oferecem.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Posso fazer um evento no espaço?
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Sim, depois do horário comercial nosso espaço está disponível para locação de eventos. Nos
                                finais de semana o Temasek Coworking está à disposição para você e sua equipe. Nosso
                                ambiente de 270m² conta com wifi de alta velocidade, recepção, coffee break, ar condicionado
                                em todos os ambientes, além de serviço de concierge. Fazemos um orçamento personalizado
                                dependendo da necessidade de cada cliente.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Junte-se à comunidade Temasek e aproveite ao máximo os benefícios que oferecemos!
                            </p>
                        </div>




                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 26/02/2024
                            </p>
                        </div>

                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}