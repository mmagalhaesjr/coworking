import styled from 'styled-components';


export const StyledServicos2 = styled.section`
width: 100%;
height:100vh;
min-height: 200px;

#container{
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    background-color:  #F4F3F0;
}

#containerTxt{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 10%;
}

#titulo{
    width: 70%;
    display: flex;
    text-align: start;
    line-height: 1.2;
    font-size: 40px;
    color:#ac7b40;
    color:#101010;
}

ul{
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.5;
    font-weight: 400;
}


#containerFoto{
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    #cor{
    /* background-color: #101010; */
    /* background-color: #ac7b40; */
    width: 90%;
    height: 70%;

    display: flex;
    align-items: center;
    justify-content: center;

  
}
.foto{
    width: 100%;
    height:100%;
    position: relative;
   
    /* left: -5%;  */
}


.swiper-button-prev,
.swiper-button-next{

 color: #ffffff;

 
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  display: none;
}

.swiper {
  margin: 100px auto;
  width: 320px;
  height: 240px; 
  
}

.swiper-slide {
   width: 100%;
   height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  position: relative;
  /* left: -5%; */



  
}




@media (max-width:1200px){
#titulo{
    font-size: 30px;
}
ul{
    font-size: 1.5rem;
}
#containerImg{
    height: 65%;
    width: 30%;
  
}
img{
        width: 30%;
    }
  
}

@media (max-width:940px){
height:500px;
#titulo{
    font-size: 30px;
    margin-bottom: 5%;
}
ul{
    font-size: 18px;
}
#containerImg{
    height: 400px;
  
}
}

@media (max-width:600px){
    height: fit-content;

#container{
    height: 90%;
    justify-content: center;
}
#containerTxt{
    width: 80%;
    margin-top: 44px;
    margin-bottom: 44px;
   
}

#titulo{
    width: 100%;
    margin-bottom: 20px;

    h1{
        font-size: 25px;
    }
}
#containerImg{
  display: none;
}
img{
   display: none;
}

#containerFoto {
 display: none;

  
}

}

`