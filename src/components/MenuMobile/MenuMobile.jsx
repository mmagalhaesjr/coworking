// import { useNavigate } from 'react-router-dom';
import { StyledMenuMobile } from "./styled";
import { useEffect } from 'react';


export default function MenuMobile({ mobileAtivado, setMobileAtivado }) {
    // const navegar = useNavigate();
    const blog = () => {
        window.open('/blog', "_blank");
        // navegar('/blog');
    };
    const quemSomos = () => {
        window.open('/quemSomos', "_blank");
        // navegar('/quemSomos');
    };

    useEffect(()=> {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado])

    return (

        <StyledMenuMobile mobile={mobileAtivado}>
            
            <nav className="nav-lista">
                <a onClick={() => setMobileAtivado(false) } href="#espacos">ESPAÇOS</a>
                <a onClick={() => setMobileAtivado(false) } href="#servicos">SERVIÇOS</a>
                <a onClick={() => setMobileAtivado(false) } href="#planos">PLANOS</a>
                <a onClick={() => setMobileAtivado(false) } href="#contato">CONTATO</a>
                <a onClick={blog} >BLOG</a>
                <a onClick={quemSomos}  >QUEM SOMOS</a>
            </nav>

        </StyledMenuMobile>

    )
}

