import {  Styled2 } from "./styled";

import MCompartilhada from "../../pages/cadaEspaco/MCompartilhada/MCompartilhada";

import ico1 from '../../../assets/icones/concierge.png'
import ico2 from '../../../assets/icones/tel.png'
import ico3 from '../../../assets/icones/ar.png'
import ico4 from '../../../assets/icones/cozinha.png'
import ico5 from '../../../assets/icones/facial.png'
import ico6 from '../../../assets/icones/correspondencia.png'
import ico7 from '../../../assets/icones/local.png'
import ico8 from '../../../assets/icones/contas.png'
import ico9 from '../../../assets/icones/limpeza.png'
import ico10 from '../../../assets/icones/seguranca.png'
import ico11 from '../../../assets/icones/recepcao.png'
import ico12 from '../../../assets/icones/armarios.png'

export default function IconesEspacos() {
   const icones1 = [
        { img: { ico1 }, texto: 'Serviço de Concierge' },
        { img: { ico2 }, texto: 'Linha telefônica privativa' },
        { img: { ico3 }, texto: 'Ambiente climatizado' },
        { img: { ico4 }, texto: 'Cozinha compartilhada' },
        { img: { ico5 }, texto: 'Acesso com leitor facial' },
        { img: { ico6 }, texto: 'Gerenciamento de correspondência' },
        { img: { ico7 }, texto: 'Endereço fiscal e comercial' },
        { img: { ico8 }, texto: 'Contas essenciais inclusas' },
        { img: { ico9 }, texto: 'Limpeza e manutenção' },
        { img: { ico10 }, texto: 'Segurança 24h' },
        { img: { ico11 }, texto: 'Recepção' },
        { img: { ico12 }, texto: 'Armários' }
    ]

    return (
        <Styled2>
            <div id="container1">
                {icones1.map((i) => (<MCompartilhada props={i} key='void'/>))}

                {<MCompartilhada
                 img={ico12}
                 texto='texto de teste'
                />}
                 {<MCompartilhada
                 img={ico11}
                 texto='texto de teste'
                />}
                 {<MCompartilhada
                 img={ico10}
                 texto='texto de teste'
                />}
            </div>
        </Styled2>

    )
}