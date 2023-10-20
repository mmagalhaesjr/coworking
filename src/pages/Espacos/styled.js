import styled from 'styled-components';


export const StyledEspacos = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #F4F3F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  #titulos {
    width: 50%;
    height: 300px;
    position: relative;
    top: -120px;
    left: -300px;
  }
  
  #titulos h1 {
    font-size: 30px;
  }
  
  #container {
    width: 95%;
    display: flex;
    align-items: center;
    position: relative;
    top: -60px;
    overflow: hidden;
  }
  
 
  .salas {
    width: 100%;
    height: 700px;
    overflow: hidden;
    position: relative;
   

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
