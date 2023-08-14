import { StyledServiços } from "./styled"

import { AiOutlineWifi, AiOutlineCoffee, AiFillPrinter } from 'react-icons/ai';
import {TbAirConditioning} from 'react-icons/tb';
import {GiLockers} from 'react-icons/gi';
import {RiBodyScanFill,RiChatPrivateFill} from 'react-icons/ri';
import {BsMicrosoftTeams} from 'react-icons/bs';



export default function Serviços() {
    return (
        <StyledServiços>
            <div className="serviços">
                <AiOutlineWifi />
                <h2>Wifi</h2>
                <p>Fornecemos internet sem fio de alta velocidade confiável.</p>

            </div>
            <div className="serviços">
                <AiOutlineCoffee />
                <h2>Coffee break</h2>
                <p>A copa compartilhada oferece máquina de café e água para chá.</p>

            </div>
            <div className="serviços">
                <TbAirConditioning/>
                <h2>Ambientes Climatizados</h2>
                <p>Salas climatizadas para reuniões e conferências, com tecnologia para receber sua equipe e convidados. </p>
            </div>
            <div className="serviços">
                <AiFillPrinter/>
                <h2>impressora</h2>
                <p>Impressão e digitalização para você ter sempre em mãos o que precisa.</p>
            </div>
            <div className="serviços">
                <GiLockers/>
                <h2>Armários</h2>
                <p>Armários para armazenar seus pertences com segurança.</p>
                
            </div>
            <div className="serviços">
                <RiBodyScanFill/>
                <h2>Reconhecimento Facial</h2>
                <p>Acesso por Reconhecimento facial para todos os membros.</p>
            </div>
            <div className="serviços">
                <RiChatPrivateFill/>
                <h2>Cabine Privada</h2>
                <p>Ideais para quem busca privacidade enquanto trabalha em um espaço colaborativo.</p>
            </div>
            <div className="serviços">
                <BsMicrosoftTeams/>
                <h2>Equipe Dedicada</h2>
                <p>A equipe de coworking oferece suporte e diversos serviços para otimizar o ambiente de trabalho compartilhado.</p>
            </div>

        </StyledServiços>
    )
}