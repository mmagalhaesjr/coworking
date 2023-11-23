import { useState, useEffect, lazy, Suspense } from "react";
import { StyledCabecalho2 } from './styled';
import { useNavigate } from 'react-router-dom';

const MenuMobile = lazy(() => import('../MenuMobile/MenuMobile'));
import logo from '../../assets/logo-preto.png';

export default function Cabecalho2() {
  const navegar = useNavigate();
  const [mobileAtivado, setMobileAtivado] = useState(false);

  const mobile = () => {
    setMobileAtivado(!mobileAtivado);
  }

  useEffect(() => {
    document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
  }, [mobileAtivado]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MenuMobile mobileAtivado={mobileAtivado} setMobileAtivado={setMobileAtivado} />
      </Suspense>
      <StyledCabecalho2 mobile={mobileAtivado} id="header">
        <nav>
          <a href="/" className="logo"><img src={logo} alt='logo' /></a>
          <ul className="nav-list">
            <li><a onClick={() => navegar("/")}>Home</a></li>
            <li><a href="/quem-somos">Quem somos</a></li>
            <li><a href="/planos">Planos</a></li>
            <li><a href="/eventos">Eventos</a></li>
            <li><a href='https://temasekcoworking.conexa.app' target="_blank" rel="noreferrer">Área do cliente</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
          <button onClick={mobile}>
            <span className='linha'></span>
            <span className='linha'></span>
            <span className='linha'></span>
          </button>
        </nav>
      </StyledCabecalho2>
    </>
  );
}
