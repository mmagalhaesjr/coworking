import { useNavigate } from 'react-router-dom';

import compartilhadas from "../../../assets/compartilhadas.jpg"
import vidro from "../../../assets/vidro.jpg"
import dedicada from "../../../assets/dedicada.jpg"

import { AiFillHome } from 'react-icons/ai';

import { StyledEspacos } from "./styled";





export default function TelaEspacosIndividual() {
    const navegar = useNavigate();

    const inicio = () => {
        navegar('/');
        
      };

      
    // const navigate = useNavigate()

    return (

        
        <StyledEspacos>



            <div className="s" id="s1">
            <AiFillHome className="icone" onClick={inicio} />
 
            <div className="texto">
                    <h1>Nome da Sala</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio</p>
                </div>
                <img src={compartilhadas} alt="imagem salão" />
            </div>
            <div className="s" id="s2">
                <img src={vidro} alt="imagem salão" />
                <div className="texto">
                <h1>Nome da Sala</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio</p>
                </div>
            </div>
            <div className="s" id="s3">
            <div className="texto">
            <h1>Nome da Sala</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio</p>
                </div>
                <img src={dedicada} alt="imagem salão" />
            </div>
        </StyledEspacos>
    )
}