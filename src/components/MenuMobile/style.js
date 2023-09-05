import styled from 'styled-components';

const Background = styled.div`
  z-index: 1;
  width: 0;
  height: 0;
  margin: 30px 0 20px 20px;
  background: radial-gradient(circle, #e94498, #b81568);
  border-radius: 50%;
  transition: 0.3s ease;
`;

const MenuBackground = ({ isMenuOpen }) => {
  return <Background className={isMenuOpen ? 'change-bg' : ''} />;
};

export default MenuBackground;