import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';
import foto1 from '../../../assets/blog/blog14/1.webp'


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog14() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Zé das Flores: 35 Anos na Mesma Avenida de Juiz de Fora
                        </h1>
                    </div>

                    <div id="container2">

                        <div className="subTitulo">
                            <p>
                                Mais de Três Décadas de Cores e Aromas na Avenida Central da cidade
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="texto">
                            <p>
                                No coração de Juiz de Fora, há mais de três décadas, um homem carismático e apaixonado
                                por flores tem conquistado os corações dos moradores locais. Conhecido como Zé das
                                Flores, o Sr. José Abjald de Souza não é apenas um florista, mas uma figura que se tornou
                                parte integrante da história da cidade.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Nascido em Ubá em 19 de novembro de 1954, Zé das Flores mudou-se para Juiz de Fora há
                                mais de 50 anos, trazendo consigo uma história de vida repleta de reviravoltas e escolhas
                                corajosas. Inicialmente formado em CTU de metalurgia, ele dedicou três anos de sua vida
                                trabalhando na ferrovia de aço, apenas para perceber que sua verdadeira paixão estava
                                florescendo em outro campo.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Após uma breve passagem pela Bahia, Zé retornou a Juiz de Fora e decidiu seguir um
                                caminho inusitado: tornou-se florista. Optando por uma alternativa financeira que, ao
                                contrário de sua formação técnica, estava profundamente enraizada na beleza das rosas,
                                Zé das Flores iniciou sua jornada em 1986.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Desde então, ele tem sido uma presença constante na mesma avenida, construindo uma
                                tradição que transcende gerações. A cada mês, cerca de 320 dúzias de flores são vendidas
                                pelas mãos experientes de Zé, sendo as rosas vermelhas as preferidas pelos clientes. Nos
                                dias especiais, como o Dia da Mulher e o Dia das Mães, suas vendas atingem picos
                                significativos, transformando-o em uma referência para presentes que celebram o amor e a
                                gratidão.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Zé das Flores conquistou o seu lugar no mercado e na cidade. Quando perguntado sobre
                                sua trajetória, ele modestamente compartilha: &ldquo;Muitas pessoas me conhecem na cidade, e é
                                por meio das flores que eu encontrei meu caminho e construí uma vida que amo&ldquo;.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Em novembro deste ano, a abertura do Temasek Coworking proporcionou ao Sr. Zé das
                                Flores uma maior visibilidade ao seu negócio; uma vez que, por iniciativa do Temasek
                                Coworking, foi realizada uma revitalização e modernização no seu local de trabalho, com a
                                criação de uma identidade visual, pintura de um lindo mural e uma reforma de sua bancada
                                de trabalho.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                “Depois que o Temasek abriu, a imagem aqui mudou. Recebo muitos elogios do pessoal,
                                meu movimento também melhorou. Foi muito bom pra mim, pra todo mundo!” Disse Zé das
                                Flores.
                            </p>
                        </div>
                        <div id="ultimoTexto" className="texto">
                            <p>
                                Flor, amor e carinho.”
                            </p>
                        </div>
                       

                    </div>

                </div>

            </StyledBlog >
            <Rodape />
        </>
    )
}