import { StyledServiços } from "./styled"

import { AiOutlineWifi, AiOutlineCoffee, AiFillPrinter } from 'react-icons/ai';
import { TbAirConditioning } from 'react-icons/tb';
import { GiLockers } from 'react-icons/gi';
import { RiBodyScanFill, RiChatPrivateFill } from 'react-icons/ri';
import { BsMicrosoftTeams } from 'react-icons/bs';



export default function Serviços() {
    return (
        <StyledServiços  id="servicos">

            <div className="titulos">
                <h1>Serviços</h1>
            </div>

            <div id="container" >
                <div className="servicos">
                    <AiOutlineWifi />
                    <h2>Wifi</h2>
                    <p>Fornecemos internet sem fio de alta velocidade.</p>
                </div>
                <div className="servicos">
                    <AiOutlineCoffee />
                    <h2>Coffee break</h2>
                    <p>A copa compartilhada oferece máquina de café e água para chá.</p>
                </div>
                <div className="servicos">
                    <TbAirConditioning />
                    <h2>Ambientes Climatizados</h2>
                    <p>salas climatizadas e equipadas para acomodar sua equipe e convidados em reuniões e conferências.</p>
                </div>
                <div className="servicos">
                    <AiFillPrinter />
                    <h2>impressora</h2>
                    <p>Impressão e digitalização para você ter sempre em mãos o que precisa.</p>
                </div>
                <div className="servicos">
                    <GiLockers />
                    <h2>Armários</h2>
                    <p>Armários para armazenar seus pertences com segurança.</p>
                </div>
                <div className="servicos">
                    <RiBodyScanFill />
                    <h2>Reconhecimento Facial</h2>
                    <p>Acesso por Reconhecimento facial para todos os membros.</p>
                </div>
                <div className="servicos">
                    <RiChatPrivateFill />
                    <h2>Cabine Privada</h2>
                    <p>Ideais para quem busca privacidade enquanto trabalha em um espaço colaborativo.</p>
                </div>
                <div className="servicos">
                    <BsMicrosoftTeams />
                    <h2>Equipe Dedicada</h2>
                    <p>A equipe de coworking oferece suporte e diversos serviços para otimizar o ambiente de trabalho compartilhado.</p>
                </div>

            </div>

        </StyledServiços>
    )
}