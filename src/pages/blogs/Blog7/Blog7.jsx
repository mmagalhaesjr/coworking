import { StyledBlog7 } from "./styled"

import foto1 from '../../../assets/blog/blog2-f1.png'
import foto2 from '../../../assets/blog/blog2-f2.png'
import Cabecalho2 from '../../../components/Cabecalho2/Cabecalho2';
import Rodape from '../../../components/Rodape/Rodape';


export default function Blog7() {
    return (
        <>
            <Cabecalho2 />
            <StyledBlog7>

            <div id="container1">



<div id="titulo">
    <h1>
       
    </h1>
</div>

<div id="container2">


    <div className="texto">
        <p>
           

        </p>
    </div>
    <div className="texto">
        <p>
           

        </p>
    </div>


    <div className="img">
        <img src={foto1} alt="" />
    </div>
    <div className="texto">
        <p>
           

        </p>
    </div>
    <div className="texto">
        <p>
            

        </p>
    </div>
    <div className="img">
        <img src={foto2} alt="" />
    </div>
    <div className="texto">
        <p>
         
        </p>
    </div>
    <div className="texto">
        <p>
           

        </p>
    </div>
    <div className="texto">
        <p>
           
        </p>
    </div>
    <div className="img">
        <img src={foto2} alt="" />
    </div>
    <div className="texto">
        <p>
          


        </p>
    </div>
    <div className="texto">
        <p>
           
        </p>
    </div>
    <div className="texto" >
        <p>
            
        </p>
    </div>
</div>

</div>
            </StyledBlog7>
            <Rodape />
        </>
    )
}