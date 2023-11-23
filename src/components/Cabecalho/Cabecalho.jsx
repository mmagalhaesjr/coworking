
import { useState } from "react";
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import MenuMobile from '../MenuMobile/MenuMobile';
import { StyledCabecalho } from './styled';

import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo-preto.png';

import { Helmet } from 'react-helmet';



export default function Cabecalho() {
    // const navegar = useNavigate();
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



    return (

        <>

            <Helmet>
                <title>Temasek Coworking </title>
                <meta name="description" content="Bem-vindo ao Temasek Coworking JF - O melhor espaço de coworking em Juiz de Fora. Oferecemos ambientes colaborativos para trabalho, networking e eventos. Conheça nossos espaços e planos." />
            </Helmet>

            <MenuMobile
                mobileAtivado={mobileAtivado}
                setMobileAtivado={setMobileAtivado} />


            <StyledCabecalho mobile={mobileAtivado} id="header"
                className={scrollY > 100 ? 'rolagem' : ''} >
                <nav>
                    <a href="/" className="logo"><img src={logo} alt='logo' /></a>
                    <a href="/" className="logo2"><img src={logo2} alt='logo' /></a>

                    <ul className="nav-list">
                        {/* <li><a onClick={() => navegar("/quem-somos")}>Quem Somos</a></li> */}
                        <li><a href="/quem-somos"  >Quem somos</a></li>
                        <li><a href="#espacos">Espaços</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        {/* <li><a onClick={() => navegar("/planos")}>Planos</a></li> */}
                        <li><a href="/planos"  >Planos</a></li>
                        {/* <li><a onClick={() => navegar("/eventos")}>Eventos</a></li> */}
                        <li><a href="/eventos"  >Eventos</a></li>
                        <li><a href="#contato">Contato</a></li>



                        <li><a href='https://temasekcoworking.conexa.app' target="_blank" rel="noreferrer" >Área do cliente</a></li>
                        {/* <li><a onClick={() => navegar("/blog")} >Blog</a></li> */}
                        <li><a href="/blog"  >Blog</a></li>
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
