import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';

import foto1 from '../../../assets/blog/blog29/1.png'







export default function Blog29() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Elevando sua presença profissional:
                            A importância de um coworking bem
                            equipado e sofisticado
                        </h1>
                    </div>
                    <div id="container2">

                        <div className="subTitulo" >
                            <p>
                                Neste blog, vamos clarear a sua mente sobre o porque que
                                escolher um local moderno e bem equipado não é apenas uma
                                questão de estética
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                A primeira impressão conta - e muito!
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Um ambiente sofisticado transmite imediatamente uma imagem de profissionalismo e
                                comprometimento. Seja para receber clientes, parceiros ou realizar reuniões importantes,
                                contar com um espaço moderno e elegante cria uma impressão duradoura. É a oportunidade
                                de mostrar que a sua empresa valoriza a qualidade em todos os aspectos.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Ambientes tecnológicos impulsionam a produtividade
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Com a realidade cada vez mais digital, a presença de tecnologia de ponta é crucial. No
                                Temasek Coworking, investimos em infraestrutura tecnológica de última geração. Desde
                                conexões de alta velocidade até equipamentos modernos, proporcionamos um ambiente que
                                favorece a produtividade e mantém você conectado.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="subTitulo">
                            <p>
                                Networking em ambientes modernos
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A sofisticação de um espaço colaborativo não está apenas na estética, mas também na
                                qualidade da comunidade que ele atrai. Em ambientes modernos, você tem a oportunidade de
                                interagir com profissionais que compartilham o mesmo comprometimento com a excelência. O
                                networking em um ambiente tão propício pode resultar em colaborações valiosas e
                                oportunidades de negócios
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Ambientes para todas as necessidades
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Além da estética moderna, o Temasek Coworking oferece ambientes versáteis que se
                                adaptam às diferentes necessidades do seu dia de trabalho. Salas de reunião equipadas,
                                Salas privativas, áreas de trabalho compartilhadas e espaços de foco individual, tudo
                                projetado para proporcionar uma experiência completa e flexível.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Imagem profissional para o sucesso contínuo
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A imagem que você projeta é um reflexo direto do seu profissionalismo e compromisso.
                                Escolher um espaço de coworking que ofereça sofisticação e tecnologia é uma estratégia para
                                garantir que sua imagem profissional esteja alinhada com seus objetivos de sucesso.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Construa sua trajetória profissional com destreza
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Trabalhar em um local inspirador e sofisticado é uma estratégia consciente para elevar a sua
                                imagem profissional e estimular a produtividade. Em nosso espaço de coworking,
                                comprometemo-nos a oferecer mais do que um local corporativo; O Temasek Coworking
                                oferece uma experiência de trabalho que potencializa as conexões e aprimora a qualidade dos
                                negócios. Escolha trabalhar com excelência, escolha trabalhar conosco!
                            </p>
                        </div>



                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 11/03/2024
                            </p>
                        </div>

                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}