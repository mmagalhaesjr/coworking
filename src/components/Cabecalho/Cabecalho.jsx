import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo-preto.png';
import { useState } from "react";
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import MenuMobile from '../MenuMobile/MenuMobile';
import { StyledCabecalho } from './styled';


export default function Cabecalho() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };


    const [mobileAtivado, setMobileAtivado] = useState(false);
    const mobile = () => {
        setMobileAtivado(!mobileAtivado)
    }

    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado])

    // const navegar = useNavigate();
    const blog = () => {
        window.open('/blog', "_blank");
        // navegar('/blog');
    };

    const quemSomos = () => {
        window.open('/quem-somos', "_blank");
        // navegar('/blog');
    };
   

    return (

        <>
            <MenuMobile
                mobileAtivado={mobileAtivado}
                setMobileAtivado={setMobileAtivado} />
          

            <StyledCabecalho mobile={mobileAtivado} id="header"
                className={scrollY > 100 ? 'rolagem' : ''} >
                <nav>
                    <a href="/" className="logo"><img src={logo} alt='logo' /></a>
                    <a href="/" className="logo2"><img src={logo2} alt='logo' /></a>

                    <ul className="nav-list">
                        <li><a onClick={quemSomos}>Sobre nós</a></li>
                        <li><a href="#espacos">Espaços</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#planos">Planos</a></li>
                        <li><a href="http://#">Eventos</a></li>
                        <li><a href="#contato">Contato</a></li>
                        <li><a onClick={blog} >Blog</a></li>
                        
                    </ul>

                    <button onClick={mobile}  >
                        <span className='linha'></span>
                        <span className='linha'></span>
                        <span className='linha'></span>
                    </button>

                </nav>

            </StyledCabecalho>
        </>

    );
}
