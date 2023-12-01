import styled from 'styled-components';




export const StyledSReuniao = styled.section`

width: 100%;
background-color: #F4F3F0 ;
padding-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


#whattsapp{
    z-index: 8;
    position: fixed;
    font-size: 3rem;
    right: 25px;
    top:90%;
    cursor: pointer;
    color: #15da0e;
    text-decoration: none;
}
#whattsapp:hover{
    color: #398462;
    transition:0.3s;
}

#container{
    width: 100%;
    display: flex;
    margin-top: 10%;   
}

#containerTexto{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#texto{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
#texto h1{
font-size: 2.5rem;

}
#texto h2{
    font-size:1.5rem;
    margin-top: 50px;
    font-weight: 100;
}

#texto div{
    width: 300px;
    font-size: 1.5rem;
    display: flex;
    margin-top: 10px;
    font-weight: 500;
}
#texto div {
margin-top: 20px;
}
#texto div h4{

margin-right: 10px;
}

h3{
    font-size: 2rem;
    margin-top: 50px;
}
#texto ul{
    margin-top: 20px;
}
#texto ul li{
    font-size: 1.5rem;
    margin-top: 20px;
    margin-left: 40px;
    font-weight: 100;
}//fim do container texto

#containerFoto{
    width: 40%;
    max-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}
    #cor{
    width: 100%;
    height: 100%;
}
.swiper-button-prev,
.swiper-button-next{

 color: #fff;
 margin: 1%;
 
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  display: none;
}

.swiper {
  
    /* background-color: #101010; */
}

.swiper-slide {
    width: 100%;
    height: 100%;
    color: #fff;

    display: flex;
   align-items: center;
   justify-content: center;
}

.foto{
    width: 100%;
    height: 100%; 
}

@media (max-width:1300px){

#container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#containerTexto{
    width: 95%;
}

#containerFoto{
    width: 90%;
    margin-top: 10%;
}
}

@media (max-width:500px){
#texto{
    margin-top: 10%;
}

}

`




