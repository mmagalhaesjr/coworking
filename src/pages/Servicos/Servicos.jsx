import img1 from '../../assets/icones/wifi.png'
import img2 from '../../assets/icones/coffee.png'
import img3 from '../../assets/icones/armarios.png'
import img4 from '../../assets/icones/impressora.png'
import img5 from '../../assets/icones/ar.png'
import img6 from '../../assets/icones/facial.png'
import img7 from '../../assets/icones/equipe.png'
import img8 from '../../assets/icones/cabine.png'
import img9 from '../../assets/icones/local.png'
import img10 from '../../assets/icones/foto.png'

import { StyledServicos } from "./styled"



export default function Servicos() {
    return (
        <StyledServicos id="servicos">

            <div id="titulos">
                <h1>O que você encontra no Temasek Coworking
                </h1>
            </div>

            <div id="container" >

                <div className="cx" >
                    <img src={img1} alt="" />
                    <h2>Wifi</h2>
                    <p>Fornecemos internet sem fio de alta velocidade.</p>
                </div>
                <div className="cx" >
                    <img src={img2} alt="" />
                    <h2>Coffee break</h2>
                    <p>A copa compartilhada oferece máquina de café e água para chá.</p>
                </div>
                <div className="cx" >
                    <img src={img3} alt="" />
                    <h2>Armários</h2>
                    <p>Armários para armazenar seus pertences com segurança.</p>
                </div>
                <div className="cx" >
                <img src={img4} alt="" />
                    <h2>impressora</h2>
                    <p>Impressão e digitalização para você ter sempre em mãos o que precisa.</p>
                </div>
                <div className="cx" >
                <img src={img5} alt="" />
                    <h2>Ambientes Climatizados</h2>
                    <p>Salas climatizadas e equipadas para acomodar sua equipe e convidados em reuniões.</p>
                </div>
                <div className="cx" >
                <img src={img6} alt="" />
                    <h2>Reconhecimento Facial</h2>
                    <p>Acesso por Reconhecimento facial para todos os membros.</p>
                </div>
                <div className="cx" >
                <img src={img7} alt="" />
                    <h2>Equipe Dedicada</h2>
                    <p>A equipe de coworking oferece suporte para otimizar o ambiente de trabalho compartilhado.</p>
                </div>
                <div className="cx" >
                <img src={img8} alt="" />
                    <h2></h2>
                    <p></p>
                </div>
                <div className="cx" >
                <img src={img9} alt="" />
                    <h2></h2>
                    <p></p>
                </div>
                <div className="cx" >
                <img src={img10} alt="" />
                    <h2></h2>
                    <p></p>
                </div>

            </div>

        </StyledServicos>
    )
}