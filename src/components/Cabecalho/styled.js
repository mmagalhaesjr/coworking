import styled from 'styled-components';

export const StyledCabecalho = styled.header`
  nav {
    width: 100%;
    height: 100px;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }

  ul {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  ul li a {
    color: #000000;
    cursor: pointer;
    &:hover {
      color: #307a69;
      transition: 0.3s;
    }
  }

  img {
    width: 300px;
    height: 70px;
    margin-top: 15px;
    background: none;
  }

  .hamburger {
    display: none;
    border: none;
    background: none;
    cursor: pointer;
    border-top: 3px solid #ffffff;
  }
  .hamburger::before,
  .hamburger::after {
    content: ' ';
    display: block;
    width: 30px;
    height: 3px;
    background: #ffffff;
    margin-top: 5px;
  }

  @media (max-width: 940px) {
    ul {
      display: none;
    }

    .hamburger {
      display: block;
      position: absolute;
      top: 40px;
      right: 40px;
    }
  }
`;