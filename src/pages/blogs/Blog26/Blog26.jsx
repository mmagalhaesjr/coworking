import { StyledBlog } from "../styledBlogs/styled"

import { BsWhatsapp } from 'react-icons/bs';


import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';

import foto1 from '../../../assets/blog/blog25/1.png'
import foto2 from '../../../assets/blog/blog25/2.png'





export default function Blog26() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog>

                <div id="container1">

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                         
                        </h1>
                    </div>
                    <div id="container2">

                        <div className="subTitulo" >
                            <p>
                                
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto coworking" />
                        </div>
                        <div className="subTitulo">
                            <p>
                           
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto2} alt="foto coworking" />
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