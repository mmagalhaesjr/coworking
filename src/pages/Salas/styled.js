import styled from 'styled-components';


export const StyledSalas = styled.section`
  width:100%;
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
    top: -100px;
    left: -300px;
  }
  #titulos h1{
    font-size: 40px;
  }

  #container{
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;
    top:-80px ;

    overflow: hidden; 
}

.salas {
    width: 500px;
    height: 500px;
    overflow: hidden;
    position: relative;
    transition: 0.3s ease;

   
}

.salas img {
    height: 100%;
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(.4);
    }
}

.salas:hover h3 {
    opacity: 1;
}

h3 {
    color: #F4F3F0;;
    font-size: 50px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}



`;