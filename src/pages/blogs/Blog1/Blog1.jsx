import { StyledBlog1 } from "./styled"

import foto1 from '../../../assets/blog/foto1.png'
import foto2 from '../../../assets/blog/foto2.png'
import foto3 from '../../../assets/blog/foto3.png'

export default function Blog1() {
    return (
        <StyledBlog1>
            <div id="titulo">
                <h1>
                    Por que o coworking é uma escolha
                    inteligente?
                </h1>
            </div>

            <div id="container">
                <div className="texto">
                    <p>
                        O coworking abrange um espaço de trabalho compartilhado por profissionais
                        independentes, empreendedores e empresas de diferentes ramos. É uma alternativa aos
                        ambientes de trabalho tradicionais e possibilita formar redes de relacionamentos e
                        parcerias. O networking acontece diariamente.
                    </p>
                </div>
                <div className="img">
                    <img src={foto1} alt="" />
                </div>
                <div className="texto">
                    <p>
                        Um dos pontos fortes do coworking é a forma dinâmica de trabalho. Permitir o contato com
                        outros profissionais e empresas cria um ambiente propício para troca de ideias, parcerias e
                        colaboração.
                    </p>
                </div>
                <div className="texto">
                    <p>
                        A flexibilidade também é uma vantagem do coworking, onde os membros podem alugar
                        espaços de trabalho individuais, salas privadas ou escritórios compartilhados, como salas
                        de reunião e cozinha compartilhada.

                    </p>
                </div>
                <div className="img">
                    <img src={foto2} alt="" />
                </div>
                <div className="texto">
                    <p>
                        Ambiente Inspirador: Os espaços de coworking são projetados para serem criativos e
                        motivadores, além de ser uma escolha até mais vantajosa financeiramente, comparando com
                        um escritório tradicional. Isso é especialmente benéfico para startups e empreendedores
                        individuais.
                    </p>
                </div>
                <div className="texto">
                    <p>
                        Para freelancers e autônomos, o espaço de trabalho compartilhado oferece um ambiente
                        que compensa a solidão associada ao trabalho independente, proporcionando uma
                        comunidade de colegas.
                    </p>
                </div>
                <div className="texto">
                    <p>
                        A maioria dos escritórios compartilhados oferece planos flexíveis de aluguel, permitindo que
                        você escolha a quantidade de tempo que deseja usar o espaço, seja por horas, dias ou
                        meses.
                    </p>
                </div>
                <div className="texto">
                    <p>
                        Em resumo, a comunidade de coworking apresenta uma ampla variedade de vantagens que
                        têm o potencial de aprimorar significativamente a vivência no ambiente de trabalho.

                    </p>
                </div>
                <div className="texto">
                    <p>
                        Esses aspectos convergem para elevar os níveis de produtividade e criatividade, abrindo
                        portas para um panorama profissional mais enriquecedor e dinâmico.

                    </p>
                </div>
                <div className="img">
                    <img src={foto3} alt="" />
                </div>
                <div className="texto">
                    <p>
                        Otimizar o seu tempo e local de trabalho se tornou uma escolha valiosa em um mundo
                        cada vez mais adaptável e interconectado.
                    </p>
                </div>
                <div className="texto" >
                    <p>
                        No Temasek Coworking, a inovação, sofisticação e flexibilidade, irão te proporcionar
                        uma nova experiência de trabalho, potencializando o networking.
                    </p>
                </div>


            </div>
        </StyledBlog1>
    )
}