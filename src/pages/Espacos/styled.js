import styled from 'styled-components';



export const StyledEspacos = styled.section`
  width: 100%;
  height: 90vh;
  max-height: 100vh;
  background-color: #F4F3F0;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

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
    margin-top: 3%;
    margin-left: 5%;
    width: 30%;
    font-size: 30px;
  }
  
  
  #container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto;
  }
  
  .salas {
    border-right: 15px solid  #F4F3F0;
    border-left: 15px solid  #F4F3F0;
    overflow:hidden;    
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

@media (max-width:600px){
  height: 450px;
  #titulos {
    width: 80%;

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
