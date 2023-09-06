// import { useNavigate } from 'react-router-dom';
import salao from "../../../assets/salao.png"
import salao2 from "../../../assets/salao2.jpg"
import salao4 from "../../../assets/salao4.jpg"

import { StyledEspacos } from "./styled";





export default function TelaEspacosIndividual() {
    // const navegar = useNavigate();

    // const inicio = () => {
    //     navegar('/');
    //   };
    // const navigate = useNavigate()

    return (


        <StyledEspacos>

            <section className="image-section" style={{ backgroundImage: `url(${salao})` }}>

            </section>

            <section className="info">
                <div className="texto">
                    <h1>Nome da Sala</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio</p>
                </div>
            </section>

            <section className="image-section" style={{ backgroundImage: `url(${salao2})` }}>
                
            </section>

            <section className="info">
                <div className="texto">
                    <h1>Nome da Sala</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio</p>
                </div>
            </section>

            <section className="image-section" style={{ backgroundImage: `url(${salao4})` }}>

            </section>

            <section className="info">
                <div className="texto">
                    <h1>Nome da Sala</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora tempore facilis incidunt enim accusantium, dolores atque expedita nulla explicabo quasi omnis aut,
                        neque deleniti voluptas, laudantium autem debitis cumque odio</p>
                </div>
            </section>


        </StyledEspacos>
    )
}