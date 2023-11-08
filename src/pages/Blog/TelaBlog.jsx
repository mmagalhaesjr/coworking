import { StyledBlog } from "./styled";

import { useNavigate } from 'react-router-dom';

import foto1 from "../../assets/blog/foto1.png"
import Cabecalho2 from '../../components/Cabecalho2/Cabecalho2';




export default function Blog() {

    const navegar = useNavigate()


    return (
        <>
        <Cabecalho2/>
        
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

            </div>
        </StyledBlog>
        </>
    )
}