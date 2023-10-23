import styled from 'styled-components';


export const StyledEspacos = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #F4F3F0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
padding-top: 35px;
  #titulos {
    width: 50%;
    margin-top: 3%;
    margin-left: 5%;
  }
  
  #titulos h1 {
    font-size: 30px;
  }
  
  #container {
    width: 95%;
    height: 90%;
    display: flex;
    align-items: center;
    margin: auto;
  }
  
 
  .salas {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: solid 25px #F4F3F0;
  }
  
  .salas img {
    width: 100%;
    height: 100%;
    transition: filter 0.3s ease, transform 1s ease;
    cursor: pointer;
  }
  
  .salas img:hover {
    filter: brightness(.4);
    transform: scale(1.1);
  }
  
  .salas:hover h3 {
    opacity: 1;
  }
  
  h3 {
    color: #F4F3F0;
    font-size: 50px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 1s ease;
    cursor: pointer;
  }
  
  
`;
