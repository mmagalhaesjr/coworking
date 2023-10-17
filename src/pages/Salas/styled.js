import styled from 'styled-components';

export const StyledSalas = styled.section`
  width:100%;
  height: 100vh;
  
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #F4F3F0;
  background-color: blue;
 

  #titulos {
    width: 50%;
    height: 300px;
    position: relative;
    top: -400px;
    
  }
  #titulos h1{
    font-size: 40px;
  }
s
  #container {
    height: 400px;
    display: flex;
    gap: 30px;
    border: solid 2px red;

   
  }

  .salas{
    width: 100px;
    height: 100%;
    background-color: #092a02;
  }
`;