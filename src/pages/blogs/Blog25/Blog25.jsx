import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';

import foto1 from '../../../assets/blog/blog25/1.png'
import foto2 from '../../../assets/blog/blog25/2.png'





export default function Blog25() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Os benefícios do coworking para
                            empresas iniciantes
                        </h1>
                    </div>
                    <div id="container2">

                        <div className="subTitulo" >
                            <p>
                                Descubra como o espaço de coworking age como facilitador
                                para profissionais recentes no mercado
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Começar um negócio é como entrar em uma jornada cheia de emoções, mas repleta de desafios
                                práticos. Para empresas iniciantes, encontrar um ambiente que impulsione o crescimento e
                                ofereça suporte é fundamental. É nesse contexto que o coworking se destaca, proporcionando
                                benefícios que podem ser decisivos para o sucesso inicial e contínuo de uma empresa.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="subTitulo">
                            <p>
                                Flexibilidade financeira
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O coworking oferece uma alternativa financeiramente viável para empresas iniciantes. Com a
                                possibilidade mais maleável de contrato e diminuição de gastos com aluguel e infraestrutura - em
                                comparação com um escritório tradicional -, os empreendedores podem direcionar seus recursos
                                para o desenvolvimento do próprio negócio.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Networking e colaboração
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Os espaços de trabalho compartilhado são terrenos férteis para networking. Empresas iniciantes
                                têm a oportunidade de interagir com profissionais de diversas áreas, promovendo parcerias,
                                trocas de ideias e até mesmo a conquista de novos clientes. As conexões que ocorrem dentro do
                                coworking podem ser o catalisador para oportunidades inesperadas.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Infraestrutura profissional acessível
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Ter uma imagem profissional desde o início é crucial. A atmosfera dinâmica e diversificada do
                                coworking estimula a criatividade e inovação. Empresas iniciantes se beneficiam de um ambiente
                                que inspira e propicia um crescimento constante.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O Temasek Coworking oferece uma infraestrutura de alta qualidade, incluindo sala de reunião,
                                áreas de trabalho compartilhadas e recepção, proporcionando à você e sua empresa uma
                                presença profissional desde o primeiro dia.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Serviços compartilhados e economia de custos
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Ao invés de lidar com a logística e os custos associados a serviços como limpeza, luz, água,
                                internet, manutenção e gestão de correspondências, empresas iniciantes podem aproveitar os
                                benefícios dos serviços compartilhados oferecidos pelo coworking, economizando tempo e
                                dinheiro.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto2} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <p>
                                Para empresas iniciantes, o coworking não se resume a um espaço físico; é um local de
                                oportunidades. Ao unir flexibilidade, networking, infraestrutura profissional e inspiração, as
                                empresas podem trilhar seu caminho para o sucesso de maneira mais eficaz e resiliente.
                            </p>
                        </div>




                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 05/02/2024
                            </p>
                        </div>

                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}