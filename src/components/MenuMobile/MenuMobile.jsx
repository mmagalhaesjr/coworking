import { StyledMenuMobile } from "./styled";




export default function MenuMobile() {
    return (
        <StyledMenuMobile>
            <ul className="nav-mobile">
                <li><a href="#">QUEM SOMOS</a></li>
                <li><a href="#servicos">SERVIÇOS</a></li>
                <li><a href="#planos">PLANOS</a></li>
                <li><a href="#espacos">ESPAÇOS</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#contato">CONTATO</a></li>
            </ul>
        </StyledMenuMobile>

    )
}