import { useState, useEffect, lazy, Suspense } from "react";
import { StyledCabecalho } from './styled';
import { Helmet } from 'react-helmet';

import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo-preto.png';

const MenuMobile = lazy(() => import('../MenuMobile/MenuMobile'));

export default function Cabecalho() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileAtivado, setMobileAtivado] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
  }, [mobileAtivado]);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const mobile = () => {
    setMobileAtivado(!mobileAtivado);
  };

  return (
    <>
      <Helmet>
        <title>Temasek Coworking </title>
        <meta name="description" content="Bem-vindo ao Temasek Coworking JF - O melhor espaço de coworking em Juiz de Fora. Oferecemos ambientes colaborativos para trabalho, networking e eventos. Conheça nossos espaços e planos." />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <MenuMobile mobileAtivado={mobileAtivado} setMobileAtivado={setMobileAtivado} />
      </Suspense>

      <StyledCabecalho mobile={mobileAtivado} id="header" className={scrollY > 100 ? 'rolagem' : ''}>
        <nav>
          <a href="/" className="logo"><img src={logo} alt='logo' /></a>
          <a href="/" className="logo2"><img src={logo2} alt='logo' /></a>

          <ul className="nav-list">
            <li><a href="/quem-somos">Quem somos</a></li>
            <li><a href="#espacos">Espaços</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="/planos">Planos</a></li>
            <li><a href="/eventos">Eventos</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href='https://temasekcoworking.conexa.app' target="_blank" rel="noreferrer">Área do cliente</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>

          <button onClick={mobile}>
            <span className='linha'></span>
            <span className='linha'></span>
            <span className='linha'></span>
          </button>
        </nav>
      </StyledCabecalho>
    </>
  );
}
