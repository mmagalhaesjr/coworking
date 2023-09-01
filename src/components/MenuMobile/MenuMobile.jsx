// import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5'
import { StyledMenuMobile } from "./styled";


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

    return (

        <StyledMenuMobile mobile={mobileAtivado}>
            <IoClose size={45} onClick={() => setMobileAtivado(true) }  />

            <nav className="nav-lista">
                <a href="#espacos">ESPAÇOS</a>
                <a href="#servicos">SERVIÇOS</a>
                <a href="#planos">PLANOS</a>
                <a href="#contato">CONTATO</a>
                <a onClick={blog} >BLOG</a>
                <a onClick={quemSomos}  >QUEM SOMOS</a>
            </nav>

        </StyledMenuMobile>

    )
}

//video 12:26 
// https://www.youtube.com/watch?v=sWnXUPnCjl0&t=324s