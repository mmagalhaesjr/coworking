// import { useNavigate } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { StyledMenuMobile } from "./styled";
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContext } from '../../contexts/HomeContext';




export default function MenuMobile({ mobileAtivado, setMobileAtivado }) {
    // const navegar = useNavigate();
    const navegar = useNavigate();

    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado])

    
    const { setHomeComponent} = useContext(HomeContext)

    return (

        <StyledMenuMobile mobile={mobileAtivado}>

            <nav className="nav-lista" >
                <a onClick={() => navegar("/quem-somos")}  >QUEM SOMOS</a>
                <a onClick={() => {setMobileAtivado(false),setHomeComponent('espacos'), navegar("/")} }>ESPAÇOS</a>
                <a onClick={() => {setMobileAtivado(false),setHomeComponent('servicos'), navegar("/")} }>SERVIÇOS</a>
                <a onClick={() => {setMobileAtivado(false),navegar("/planos")}}>PLANOS</a>
                <a onClick={() => navegar("/eventos")}>EVENTOS</a>
                <a onClick={() => {setMobileAtivado(false),setHomeComponent('contato'), navegar("/")} }>CONTATO</a>
                <a onClick={() => navegar("/blog")} >BLOG</a>
                <a href='https://temasekcoworking.conexa.app' >ÁREA DO CLIENTE</a>
                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp /> - WHATSAPP</a>
            </nav>

            <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

        </StyledMenuMobile>

    )
}

