import { StyledBlogGrande } from "./styled";

export default function BlogGrande(p) {

    return (

        <StyledBlogGrande>

            <section>
                <a className="materia" href={p.link}  >

                    <div className="foto">
                        <img src={p.img} alt="foto coworking" />
                    </div>
                    <div className="texto">
                        <h1>
                            {p.titulo}
                        </h1>
                    </div>
                    <p>
                        {p.texto}
                    </p>
                </a>
            </section>

        </StyledBlogGrande>



    )
}