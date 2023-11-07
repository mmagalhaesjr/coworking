import { StyledQuemSomos } from "./styled"
import foto from '../../assets/sala2.png'

import icone1 from '../../assets/icones/qs1.png'
import icone2 from '../../assets/icones/qs2.png'





export default function QuemSomos() {



    return (

        <StyledQuemSomos id="#quem-somos">

            <div id="container1">

                <div className="titulos">

                    <h1>Conheça o Temasek Coworking</h1>
                </div>

                {/* <div id='video'>

                </div> */}

            </div>

            <div id="container2">

                <div id="texto1">

                    <div className="texto2">
                        <h2>
                            Temos como objetivo oferecer espaços <br></br>onde
                            todos possam se sentir mais <br></br>
                            <span>motivados</span> e <span>produtivos</span>.
                        </h2>
                    </div>
                    <img src={icone2} alt="" />

                </div>

                <div id="texto2">
                    <img src={icone1} alt="" />
                    <div className="texto1">
                        <h2>
                            Proporcionar uma nova experiência de trabalho
                            com ambiente inspirador e colaborativo que potencializa as conexões
                            e aprimora a qualidade dos negócios.
                        </h2>
                    </div>
                </div>
            </div>

            <div id="container3">
                <div className="titulos">

                    <h1>Nossos valores guiam nossa maneira
                        de trabalhar para proporcionar a
                        melhor experiência de trabalho a você.</h1>
                </div>

                <div id='lista'>
                    <img src={foto}></img>
                    <ul>
                        <li>Ética</li>
                        <li>Qualidade</li>
                        <li>Produtividade</li>
                        <li>Sofisticação</li>
                        <li>Inovação</li>
                        <li>Flexibilidade</li>
                    </ul>
                </div>

            </div>


        </StyledQuemSomos>



    )
}