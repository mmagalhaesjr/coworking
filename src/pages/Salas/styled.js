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
    top: -120px;
    left: -300px;
  }
  #titulos h1{
    font-size: 30px;
  }
  #container{
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;
    top:-60px ;
}
.carousel-container {
    display: flex;
    transition: transform 0.5s ease-in-out; /* Efeito de transição suave durante 0.5 segundos */
}
.salas {
    width: 500px;
    height:30rem;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease;
}
.salas img {
    width: 100%;
    height: 100%;
    transition: filter 0.3s ease, transform 0.3s ease;
    cursor: pointer;
   

    &:hover {
        filter: brightness(.4);
        transform: scale(1.1);
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
    cursor: pointer;
}

#seta{
    position: absolute;
    left:92%;
    font-size: 100px;
    color: #000000;
    cursor: pointer;
    &:hover {
        color: #737373;
    } 
   
}
`;