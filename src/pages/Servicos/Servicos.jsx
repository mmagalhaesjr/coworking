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
                    <h2>Wifi</h2>
                    <img src={img1} alt="" />
                    <p>Fornecemos internet sem fio de alta velocidade.</p>
                </div>
                <div className="cx" >
                    <h2>Coffee break</h2>
                    <img src={img2} alt="" />
                    <p>A copa compartilhada oferece máquina de café e água para chá.</p>
                </div>
                <div className="cx" >
                    <h2>Armários</h2>
                    <img src={img3} alt="" />
                    <p>Armários para armazenar seus pertences com segurança.</p>
                </div>
                <div className="cx" >
                    <h2>impressora</h2>
                    <img src={img4} alt="" />
                    <p>Impressão e digitalização para você ter sempre em mãos o que precisa.</p>
                </div>
                <div className="cx" >
                    <h2>Ambientes Climatizados</h2>
                    <img src={img5} alt="" />
                    <p>Salas climatizadas e equipadas para acomodar sua equipe e convidados em reuniões.</p>
                </div>
                <div className="cx" >
                    <h2>Reconhecimento Facial</h2>
                    <img src={img6} alt="" />
                    <p>Acesso por Reconhecimento facial para todos os membros.</p>
                </div>
                <div className="cx" >
                    <h2>Equipe Dedicada</h2>
                    <img src={img7} alt="" />
                    <p>A equipe de coworking oferece suporte para otimizar o ambiente de trabalho compartilhado.</p>
                </div>
                <div className="cx" >
                    <h2></h2>
                    <img src={img8} alt="" />
                    <p></p>
                </div>
                <div className="cx" >
                    <h2></h2>
                    <img src={img9} alt="" />
                    <p></p>
                </div>
                <div className="cx" >
                    <h2></h2>
                    <img src={img10} alt="" />
                    <p></p>
                </div>

            </div>

        </StyledServicos>
    )
}