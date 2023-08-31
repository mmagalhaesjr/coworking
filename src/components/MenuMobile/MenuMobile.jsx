// import { useNavigate } from 'react-router-dom';
import { StyledMenuMobile } from "./styled";


export default function MenuMobile({mobileAtivado, setMobileAtivado}) {

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
        <StyledMenuMobile>

            <ul className="nav-lista">
                <li><a href="#espacos">ESPAÇOS</a></li>
                <li><a href="#servicos">SERVIÇOS</a></li>
                <li><a href="#planos">PLANOS</a></li>
                <li><a href="#contato">CONTATO</a></li>
                <li><a onClick={blog} >BLOG</a></li>
                <li><a onClick={quemSomos}  >QUEM SOMOS</a></li>
            </ul>

        </StyledMenuMobile>

    )
}