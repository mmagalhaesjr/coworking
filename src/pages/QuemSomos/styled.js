import styled from 'styled-components';


export const StyledQuemSomos = styled.section`
width: 100%;
display: flex;

flex-direction: column;

.titulos{
width: 100%;
margin-top: 7%;

display: flex;
align-items: center;
justify-content: center;
}
h1{
    font-size: 3rem;
    font-weight: 700;
}

#container {
    /* background-image: url(src/assets/sobreNos/logo.png);
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: center; */
    width: 100%;
    height: 600px;
    margin-top: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    img {
        position: absolute;
        width: 40%;
        transition: transform 5s linear ; 
    }
  }

  &:hover #container img {
    transform: rotatey(360deg); 
  }



#texto1, #texto2{
    width: 100%;
    position: relative;
}
#texto1{
    top: -10%;
    display: flex;
    font-weight: 300;
    
    align-items: flex-start;
    justify-content: flex-start;
    
}
#texto2{
    top: 10%;
    display: flex;
    font-weight: 300;

    align-items: flex-end;
    justify-content: flex-end;

}
.texto1, .texto2{
    font-size: 2.5rem;
    max-width: 750px;
    display: flex ;   
}
.texto1{
text-align: left;
margin-left: 10%;

}
.texto2{
    text-align: left;
    margin-right: 5%;
}


#container2{
margin-bottom: 5%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5%;

.titulos{
    width: 70%;
    display: flex;
    text-align: center;
    margin-bottom: 4%;
}
h1{
    font-weight: 100;
    font-size: 2.5rem;
    }
}
#lista{
    width: 70%;
    height: 60%;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 100;
    justify-content: space-around;

    img{
       width: 80%;
       box-shadow: 20px 20px 0px 0 #101010;
    }
    ul{
        width: 30%;
        height: 100%;
        text-align: start;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10%;
        line-height: 1.3;
    }

    
}
//responsivo-------------------------------
@media (max-width:1200px){
#container2 .titulos h1{
    font-size: 1.5rem;
}
}

@media (max-width:990px){
    .titulos{
        margin-top: 10%;
    }
    #container2{
        display: flex;
        flex-direction: column;
    }
    #container2 .titulos {
    width: 90%;
    }
    
    #lista{
        display: flex;
        flex-direction: column; 
    }
    .lista{
        
    }
    /* #lista .titulos{
        margin-bottom: 10%;
    } */
    #lista img{
        margin-top: 20%;
    }
    #lista ul{
        margin-top: 10%;  
        padding-left: 0%;
    }
    
}
@media (max-width:890px){
    #container{
        height: 30%;
    }
    #container img{
        margin-top: 30%;
        width: 55%;
    }
    #texto1, #texto2{
        align-items: center;
        justify-content: center;
    }
    #texto2{
        margin-top: 5%;
    }
.texto1,.texto2{
    width: 90%;
    text-align: left;
    margin-left: 0%;
    margin-right: 0%;
    font-size: 1.5rem;
}

}

@media (max-width:670px){
    #container{
        height: 25%;
    }
}
#container img{
        margin-top: 15%;
        width: 45%;
    }
   
@media (max-width:667px){
    .titulos{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:15%;
    }
    .titulos h1{
        text-align: center;
        font-size: 2rem;
        
    }
}
@media (max-width:500px){
    #container img{
        margin-top: 15%;
        width: 70%;
    }
}
@media (max-width:437px){
    .titulos{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:20%;
    }
    .titulos h1{
        text-align: center;
        font-size: 1.7rem;
        
    }
}
`

