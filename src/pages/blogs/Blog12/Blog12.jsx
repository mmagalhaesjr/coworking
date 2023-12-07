import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';



import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog12() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Mark Zuckerberg - Como construir o
                            futuro

                        </h1>
                    </div>

                    <div id="container2">


                        <div className="subTitulo" id="subTitulo1">
                            <p>
                                Confira a entrevista com Mark Zuckerberg, co-fundador do
                                Facebook e sua empresa-mãe Meta

                            </p>
                        </div>

                        <div className="texto">
                            <p>
                                Sam Altman, President do Y Combinator, que é uma das maiores plataformas de
                                financiamento inicial para startups, entrevista Mark Zuckerberg, Fundador do Facebook.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A discussão aborda a criação de empresas, sua missão, visão, foco, intuição, contratação e
                                treinamento. A principal conclusão é que o maior risco que podemos enfrentar é evitar
                                qualquer tipo de risco.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Podemos extrair lições preciosas dessa conversa, confira abaixo o vídeo completo, retirado do
                                Youtube:
                            </p>
                        </div>

                        <div id="cxVideo">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Lb4IcGF5iTQ?si=ID9c00QaH2rTT586" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>



                    </div>

                </div>
            </StyledBlog>
            <Rodape />
        </>
    )
}