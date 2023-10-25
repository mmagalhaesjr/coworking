import { StyledQuemSomos } from "./styled"
import foto from '../../assets/sala2.png'


export default function QuemSomos() {
    return (
        <StyledQuemSomos id="#quem-somos">

            <div id="container1">

                <div className="titulos">

                    <h1>Nossos espaços se ajustam às suas necessidades e ao seu negócio</h1>
                </div>

                <div id='imagens'>
                    <img src={foto}></img>
                    <img src={foto}></img>
                    <img src={foto}></img>
                </div>

            </div>

            <div id="container2">
                <div id="texto1">

                    <h2>Nossa missão é proporcionar uma nova
                        experiência de trabalho com <span>ambiente inspirador </span>
                        e <span>colaborativo</span> que potencializa
                        o <span>networking</span> e se adapta ao seu negócio.</h2>
                </div>
                <div id="texto2">

                    <h2>Temos como objetivo oferecer espaços <br></br>onde
                        todos possam se sentir mais <br></br>
                        <span>motivados</span> e <span>produtivos</span>.</h2>
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


            <div id="container4">

                <div id="titulo4">
                    <h1>Conheça nossos espaços e planos e entenda
                        o que se encaixa melhor para você</h1>
                </div>

                <div id="cx4">

                    <div className="imgCx4">
                        <img src={foto} alt="" />
                        <h3>Descubra nosso espaço</h3>
                    </div>
                    <div className="imgCx4">
                        <img src={foto} alt="" />
                        <h3>Conheça nossos planos</h3>
                    </div>

                </div>

            </div>


        </StyledQuemSomos>
    )
}