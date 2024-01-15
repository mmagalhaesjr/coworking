import { StyledBlogPagina } from "./styled";
import { Helmet } from 'react-helmet';

import TelaBlog from "../../components/Blog/TelaBlog";
import {arrayBlogs} from '../../components/BlogsLista/BlogsLista'

import { BsWhatsapp } from 'react-icons/bs';
import Cabecalho2 from '../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../components/Rodape/Rodape';




export default function BlogPagina() {
    
    return (

        <>
            <Helmet>
                <title>Temasek Coworking Blog</title>
                <meta name="description" content="Bem-vindo ao Temasek Coworking JF - O melhor espaço de coworking em Juiz de Fora. Oferecemos ambientes colaborativos para trabalho, networking e eventos. Conheça nossos espaços e planos. confira nosso conteudo em blog" />
            </Helmet>


            <Cabecalho2 />


            <StyledBlogPagina>

                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                <div id="titulo">
                    <h1>
                        Confira nosso conteúdo em Blog
                    </h1>
                </div>

                <div id="container">
                    {arrayBlogs.map((blog) => (
                        <TelaBlog
                            key={blog.id}
                            link={`/blog/${blog.id}`}
                            img={blog.img}
                            titulo={blog.titulo}
                            texto={blog.texto}
                        />
                    ))}
                </div>

            </StyledBlogPagina>

            <Rodape />


        </>
    )
}