import styled from 'styled-components';





export const StyledEspacos = styled.section`
  width: 100%;
  height: 90vh;
  max-height: 100vh;
  background-color: #F4F3F0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  #titulos{
    margin-top: 150px;
  }
  #bloco1{
    width: 100px;
    height: 900px;
    position: absolute;
    top: 0;
    background-color: #101010;
  }
  #bloco2{
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0%;
    top: 35rem;
    background-color: #ac7b40;
   
    
  }
  @media(max-width:800px) {
    #bloco1, #bloco2{
        display: none;
    }
  }

  
.swiper-button-prev,
.swiper-button-next{

color: #fff;
 width: 30px;
 height: 50px;
 padding: 20px;
 border-radius: 10px;
 }

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  display: none;
}

.swiper-wrapper{
}
.swiper-initialized{
  height: 70%;
}
.swiper-clickable{
    color: #fff;
}
.swiper-pagination-bullet {
  background-color: #F4F3F0;
}



#titulos {
    width: 100%;
    width: 85%;
    font-size: 30px;
    color: #ac7b40;
    color:#000000;
  }
  #titulos h1{
    margin-left: 2%;
  }
  
  
  #container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto;
  }
  
  .salas {
    border-right: 15px solid  transparent;
    border-left: 15px solid  transparent;
    overflow:hidden;    
  }
  
  .salas img {
    width: 100%;
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
    font-size: 40px;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 1s ease;
    cursor: pointer;
  }
  
  @media (max-width:940px){

#titulos{
    width: 60%;
}
}

@media (max-width:700px){

    h3{
        opacity: 1;
        font-size: 30px;
    }
    
  height: 450px;
  #titulos {
    width: 80%;
    margin-top: 30px;


    h1{
      font-size: 25px;
    }
  }
  #container {
    width: 90%;
    height: 70%;

  }
}
  
`;
