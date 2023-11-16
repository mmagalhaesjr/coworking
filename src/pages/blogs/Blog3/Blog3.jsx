import { StyledBlog3 } from "./styled"

import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';

import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blog/blog3-f1.webp'




export default function Blog3() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog3>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            O que você ainda não sabe sobre os <span>escritórios
                                compartilhados</span>
                        </h1>
                    </div>

                    <div id="container2">


                        <div className="texto">
                            <p>
                                <span>Coworkings ou escritórios </span> compartilhados são, sem sombra de dúvida, uma das principais
                                revoluções do mundo dos negócios das últimas décadas.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Graças à internet, e a possibilidade de se comunicar com qualquer pessoa em qualquer lugar,
                                os <span>coworkings</span> se transformaram numa alternativa para aquelas empresas que cuidam de
                                vários tipos de negócios, como uma forma de intercâmbio de novas ideias.
                            </p>
                        </div>

                        <div className="texto">
                            <p>
                                Devido à disponibilidade da internet e à capacidade de se comunicar com pessoas em
                                qualquer lugar, os espaços de <span>coworking</span> se tornaram uma alternativa para empresas
                                envolvidas em diversos setores, proporcionando o <span>networking.</span>
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="" />
                        </div>
                        <div className="subTitulo">
                            <p>
                                Aprovação
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                As pioneiras a adotar e abraçar o modelo de <span>espaço de trabalho compartilhado</span> foram as
                                empresas atuantes nos campos do empreendedorismo digital, tecnologia, indústrias criativas
                                e novas mídias. Esses setores, constantemente em busca de inovações em suas respectivas
                                áreas, perceberam no coworking uma oportunidade adicional de promover a inovação em
                                seus ambientes corporativos ao compartilhar ideias com outras empresas.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Hoje, testemunhamos a presença de empresas dos mais diversos setores operando nesse
                                modelo colaborativo. Em momentos de crise, como os que vivenciamos nos últimos anos, o
                                <span> coworking</span> assume um papel duplo. Por um lado, ele se mostra como uma maneira eficaz de
                                reduzir despesas relacionadas à infraestrutura. Ao mesmo tempo, serve como um veículo para
                                disseminar inovação em suas respectivas áreas de atuação.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Quem criou o coworking
                            </p>
                        </div>

                        <div className="texto">
                            <p>
                                A pessoa por trás do termo <span>“coworking” </span>é o designer e escritor americano Bernie De Koven.
                                Koven chamava de coworking o trabalho corporativo e as reuniões que aconteciam com uso
                                do computador.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Brad Neuberg é o nome do jovem americano ao qual imputam a responsabilidade de autoria
                                do primeiro <span>coworking.</span>

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O home-office sempre foi um modo de trabalho muito popular nos Estados Unidos, porém as
                                empresas sentiam falta de algo mais dinâmico no dia a dia de trabalho.
                                Era necessário algo que impulsionasse a produtividade dos empregados ao mesmo tempo
                                que favorecesse a troca de contatos e experiências.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Pensando nisso, Neuberg teve a ideia, em 2005, de hospedar uma empresa cooperativa, sem
                                fins lucrativos, na Spiral Muse, na cidade de São Francisco, na Califórnia.
                            </p>
                        </div>
                        <div className="subTitulo">
                            <p>
                                Algumas características dos coworkers
                            </p>
                        </div>

                        <div className="texto">
                            <p>
                                Os <span>coworkers</span> são aqueles que utilizam os espaços de coworking. Na sua maioria, estão na
                                faixa dos 20 a 30 anos, com média de idade de 34 anos. A maioria dos coworkers são do
                                sexo masculino, o que representa dois terços de todos os espaços compartilhados.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Cerca de 80% dos <span>coworkers</span> começaram na área após a conclusão de um curso
                                universitário e mais da metade desses trabalhadores são profissionais independentes.
                                Ainda, segundo uma pesquisa sobre as condições de trabalho dos coworkers nos Estados
                                Unidos, cerca de 35% dos profissionais que estão alocados em escritórios compartilhados
                                são empregados assalariados.
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Gostou de saber sobre algumas curiosidades do mundo do Coworking?
                                Os escritórios compartilhados estão sempre em evolução,
                                confira nossas redes sociais e fique atento aos nossos
                                conteúdos em blog para ficar por dentro das atualidades!
                            </p>
                        </div>

                    </div>

                </div>
            </StyledBlog3>
            <Rodape />
        </>
    )
}