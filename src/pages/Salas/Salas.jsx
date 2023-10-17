import foto from '../../assets/foto-capa.jpg'

import { StyledSalas } from "./styled"




export default function Salas() {

   

    return (

        <StyledSalas id="salas" >

            <div id="titulos">
                <h1 >
                    Um espaço de trabalho compartilhado
                    que valoriza a simplicidade e a elegância
                    em seu design e funcionalidade.
                </h1>
            </div>


            <div id="container">
                <div className="salas">

                    <img src={foto} alt="" />
                    <h3>Mesas Dedicadas</h3>

                </div>
                <div className="salas">

                    <img src={foto} alt="" />
                    <h3>Mesas Dedicadas</h3>

                </div>
                <div className="salas">

                    <img src={foto} alt="" />
                    <h3>Mesas Dedicadas</h3>

                </div>
               
            </div>



        </StyledSalas>

    )
}