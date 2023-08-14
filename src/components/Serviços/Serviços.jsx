import { StyledServiços } from "./styled"

import { AiOutlineWifi, AiOutlineCoffee, AiFillPrinter } from 'react-icons/ai';
import {TbAirConditioning} from 'react-icons/tb';
import {GiLockers} from 'react-icons/gi';
import {RiBodyScanFill} from 'react-icons/ri';



export default function Serviços() {
    return (
        <StyledServiços>
            <div className="serviços">
                <AiOutlineWifi />
                <h2>High-Speed Wifi</h2>
                <p>Fornecemos internet sem fio de alta velocidade confiável.</p>

            </div>
            <div className="serviços">
                <AiOutlineCoffee />
                <h2>Coffee break</h2>
                <p>A copa compartilhada oferece máquina de café e água para chá.</p>

            </div>
            <div className="serviços">
                <TbAirConditioning/>
                <h2>Meeting Rooms</h2>
                <p>Salas climatizadas para reuniões e conferências, com tecnologia para receber sua equipe e convidados. </p>
            </div>
            <div className="serviços">
                <AiFillPrinter/>
                <h2>Printing</h2>
                <p>Impressão e digitalização para você ter sempre em mãos o que precisa.</p>
            </div>
            <div className="serviços">
                <GiLockers/>
                <h2>Lockers</h2>
                <p>Armários para armazenar seus pertences com segurança.</p>
                
            </div>
            <div className="serviços">
                <RiBodyScanFill/>
                <h2>Face Access</h2>
                <p>Acesso por Reconhecimento facial para todos os membros.</p>
            </div>

        </StyledServiços>
    )
}