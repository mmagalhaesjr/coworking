import { StyledBlog } from "./styled";

import { useNavigate } from 'react-router-dom';

import foto1 from "../../assets/blog/foto1.png"
import foto2 from "../../assets/blog/blog2-f1.png"
import foto3 from "../../assets/blog/blog3-f1.png"

import Cabecalho2 from '../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../components/Rodape/Rodape';




export default function Blog() {

    const navegar = useNavigate()


    return (
        <>
            <Cabecalho2 />

            <StyledBlog>


                <div id="titulo">
                    <h1>
                        Confira nosso conteúdo em Blog
                    </h1>
                </div>

                <div id="container">

                    <div className="materia" onClick={() => navegar('/blog1')}>
                        <div className="foto">
                            <img src={foto1} alt="" />
                        </div>
                        <div className="texto">
                            <h1>
                                Por que o coworking é uma escolha
                                inteligente?
                            </h1>
                        </div>
                        <p>
                            O coworking abrange um espaço de trabalho compartilhado por profissionais
                            independentes...
                        </p>
                    </div>

                    <div className="materia" onClick={() => navegar('/blog2')}>
                        <div className="foto">
                            <img src={foto2} alt="" />
                        </div>
                        <div className="texto">
                            <h1>
                                Como economizar para investir?
                            </h1>
                        </div>
                        <p>
                            Conheça algumas estratégias que podem aumentar suas
                            oportunidades de negócio...
                        </p>
                    </div>

                    <div className="materia" onClick={() => navegar('/blog3')}>
                        <div className="foto">
                            <img src={foto3} alt="" />
                        </div>
                        <div className="texto">
                            <h1>
                                Curiosidades sobre o Coworking
                            </h1>
                        </div>
                        <p>
                            O que você ainda não sabe sobre os escritórios
                            compartilhados

                        </p>
                    </div>

                </div>
            </StyledBlog>

            <Rodape />
        </>
    )
}