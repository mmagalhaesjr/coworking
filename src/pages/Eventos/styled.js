import styled from 'styled-components';







export const StyledEventos = styled.section`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;



#container{
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin-top: 5%;


}
 #cxTexto{
    width: 40%;
    margin-top: 70px;
    margin-bottom: 50px;
    text-align: center;
 }
#cxTexto h2{
    font-size: 25px;
    line-height: 1.5;
}
#cxTexto h2 span{
    font-weight: 700;
    color:#ac7b40;
    color: #000000;
}
#cxVideo{
    width: 90%;
    height: 700px;
    margin-top: 20px;
    background-color: #000;
}
@media (max-width:940px){
#cxTexto{
    width: 90%;
}
#cxVideo{
    height: 500px;
}
}
@media (max-width:600px){
        
    
#cxTexto{
    width: 90%;
    h2{
        font-size: 20px;
        margin-top: 10px;
    }
    
}
#cxVideo{
    height: 400px;
}
}

`

export const StyledEventos2 = styled.section`
width: 100%;
height:130vh;
display: flex;
align-items: center;
flex-direction: column;

#cxTexto{
    width: 40%;
    margin-top: 70px;
    margin-bottom: 50px;
    text-align: center;
 }
#cxTexto h2{
    font-size: 25px;
    line-height: 1.5;
}

#container{
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
#container section{
    width: 95%;
    height: 80vh;
    display: flex;
    gap:2%;
    align-items: center;
    justify-content: center;
}
#cx{
    width: 30%;
    height: 70%;
    margin-top: 20px;
   
    -webkit-backdrop-filter: blur(10px);
    -webkit-background-color: rgba(18, 18, 18, 0.2);
    backdrop-filter: blur(10px);
    background-color: rgba(18, 18, 18, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; 
}
.horarios{
    width: 90%;
    height: 90%;
    border: solid 2px #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
}
.hora{
    color: #ffffff;
    font-size: .92rem; 
    line-height: 4;
}


.fotos{
    width: 70%;
    height: 95%;
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




@media (max-width:1500px){
    #container section{
        display: flex;
        flex-direction: column-reverse;
    }
    .fotos{
        width: 95%;
    }

    #cx{
        width: 100%;
    }
    .horarios{
        width: 97%;
        display: flex;
        align-items: center;
        justify-content: center;
      
    }
    .hora{
        display: flex;
        justify-content: center;
        gap: 3%;
        flex-wrap: wrap;
        color: #000; 
        line-height: 2.5;
        font-size: 1rem;
    }
   
}

@media (max-width:940px){
    height: fit-content;
    p{
        font-size: 20px;
    }
    .faixa{
        top: 40px;
    left: -10px;
    z-index: 3;

    }

#cxTexto{
    width: 90%;
}
.hora{
        display: flex;
       
        flex-wrap: wrap;
        color: #000; 
        line-height:3;
        font-size: .80rem;
        height: 100%;
    }

}
@media (max-width:700px){
    .fotos{
        height: 60%;
    }
}
@media (max-width:600px){

    .faixa p{
        font-size: 15px;
        margin-left: 6%;
    }
    #cxImg{
        height: fit-content;
    }

    .faixa {
        width:80% ;
    }
}
@media (max-width:420px){
    #cx{
        width: 100%;
    }
    .horarios{
        width: 97%;
        display: flex;
        align-items: center;
        justify-content: center;
      
    }
    .hora{
        display: flex;
       
        flex-wrap: wrap;
        color: #000; 
        line-height:3;
        font-size: .80rem;
       
    }
    
}
`

export const StyledEventos3 = styled.section`
width: 100%;
min-height: 650px;
display: flex;
align-items: center;
flex-direction: column;

#container{
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
 #cxTexto{
    width: 60%;
    margin-top: 70px;
    margin-bottom: 50px;
    text-align: center;
 }
#cxTexto h2{
    font-size: 2rem;
    line-height: 1.5;
}
#cxForm{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;

}

.cxForm{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: transparent;
}

.texto{
    width: 90%;
    height: 90%;
}

.texto h2{
    font-size: 2.7rem;
}

.texto  p{
    font-size: 1.5rem;
    margin-top: 20px;
}

.botao{
    width: 100%;
    height: 80px;
    margin-top: 20px; 
    background-color: #101010;
    background-color: #000000;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    margin-top: 50px;
    color: #ffffff;
    font-size: 2.5rem;

    &:hover{
        background-color: #504f4fd2; 
        transition:0.7s;
    }

}
@media (max-width:940px){
#cxTexto{
    width: 90%;
}
#cxForm{
    flex-direction: column;

    form{
        width: 100%;
    }
}

.cxForm{
    width: 80%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    .botao{
        margin: 0;
        font-size: 25px;
    }
  h2{
    display: none;

  }
  p{
    text-align: center;
    margin-bottom: 10px;
  }
}
}

@media (max-width:600px){
    .cxForm form{
        width: 80%;
    }
}


`