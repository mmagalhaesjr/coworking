// import { useNavigate } from 'react-router-dom';
import { StyledMenuMobile } from "./styled";
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContext } from '../../contexts/HomeContext';

export default function MenuMobile({ mobileAtivado, setMobileAtivado }) {
  const navegar = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
  }, [mobileAtivado]);

  const { setHomeComponent } = useContext(HomeContext);

  const component = (componentName) => {
    setMobileAtivado(false);
    setHomeComponent(componentName);
    navegar('/');
  };

  return (
    <StyledMenuMobile mobile={mobileAtivado}>
      <nav className="nav-lista">
        <a onClick={() => navegar("/quem-somos")}>QUEM SOMOS</a>
        <a href="#espacos" onClick={() => component('espacos')}>ESPAÇOS</a>
        <a href="#servicos" onClick={() => component('servicos')}>SERVIÇOS</a>
        <a onClick={() => navegar("/planos")}>PLANOS</a>
        <a onClick={() => navegar("/eventos")}>EVENTOS</a>
        <a href="#contato" onClick={() => component('contato')}>CONTATO</a>
        <a onClick={() => navegar("/blog")}>BLOG</a>
        <a href='https://temasekcoworking.conexa.app'>ÁREA DO CLIENTE</a>
      </nav>
    </StyledMenuMobile>
  );
}
