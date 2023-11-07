import styled from 'styled-components';


export const StyledQuemSomos = styled.section`
width: 100%;
height:120vh;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;

#container1{
/* height: 100vh; */
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
}
span{
    font-weight: 600;
}
.titulos{
width: 70%;

display: flex;
justify-content: center;
align-items: center;
}
h1{
    display: flex;
    line-height: 1.2;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom:5%;
    margin-top: 15%;
}

#video{
    width: 90%;
    height: 80%;
    background-color: #000000;
}

#container2{
height: 50vh;
width: 100%;
display: flex;
flex-direction: column;
position: relative;

border: solid 1px blue;

&::before {
        content: ''; 
        position: absolute;
        left: 0;
        top: 0%; 
        height: 50%;
        width: 6%; 
        background-color:#101010;
    }

    &::after {
        content: ''; /* Conteúdo vazio do pseudo-elemento */
        position: absolute;
        top: 50%;
        right: 0; /* Alinha à esquerda da div */
        bottom: 0%; /* Começa do meio da div */
        height: 90%; /* Metade da altura da div */
        width: 6%; /* Largura da borda esquerda */
        background-color: black;
    }

}
#container2 img{
    width: 70px;
}
.texto1, .texto2{
    max-width: 700px;
    display: flex;
    border: solid 1px red;
}
.texto1{
position: relative;
left: 10%;
}
.texto2{
    position: relative; 
    left: -10%;
}
#texto1, #texto2{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 300;
    gap: 5%;

    border: solid 1px black;
}
#texto1{
    margin-bottom: 5%;
}



#container3{
height: 80vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

.titulos{
    height: 40%;
}
h1{
    font-weight: 300;
    font-size: 40px;
}
}

#lista{
    width: 70%;
    height: 60%;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 300;
    justify-content: space-around;

    img{
       height: 80%;
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

@media (max-width:1083px){
  height: fit-content;

    #container1{
        height: 50vh;
        border-bottom: 160px solid;
    }
  
    h1{
        font-size: 35px;
    }

    .titulos{
        width: 90%;
    }
    #imagens{
        height: 27%;
        bottom: 0;
        position: absolute;
        top:23%;
        background-color: blue;
    }

    #container3{
        height: 60vh;
        width: 90%;

        .titulos{
            width: 90%;
        }
        h1{
            font-size: 30px;
        }
        img{
            width: 60%;
            height: 70%;
        }
    }
    #lista{
        margin-top: 6%;
        height: 100%;
    }
    ul{
        margin-left: 5%;
        font-size: 30px;
    }

}

@media (max-width:600px){

    #container1{
        height: 500px;
        border-bottom: 200px solid;
        .titulos{
        width: 80%;

    }
    }

    #container1{
        height: 350px;
        border-bottom: 170px solid;

        .titulos{
        width: 80%;

    }
    }
    
    h1{
        font-size: 20px;
    }

    #imagens{
        height: 200px;
        bottom: 0;
        position: absolute;
        top:150px;
    }
    #container2{
        height: 50vh;
        justify-content: center;
       h2{
        font-size: 20px;
       }
        #texto1, #texto2{

        width: 70%;
        height: 30%;
        left: 10%;
     

    }

    #texto2{
        margin-top: 10%;
width: 60%;
left: 30%;
}

&::before {
        content: ''; 
        position: absolute;
        left: 0;
        top: 0%; 
        height: 60%;
        width: 6%; 
        background-color:black;
    }

    &::after {
        content: ''; /* Conteúdo vazio do pseudo-elemento */
        position: absolute;
        right: 0; /* Alinha à esquerda da div */
        bottom: 0%; /* Começa do meio da div */
        height: 60%; /* Metade da altura da div */
        width: 6%; /* Largura da borda esquerda */
        background-color: black;
    }

    
    }
    #container3{
        height: 60vh;
        h1{
            font-size: 20px;
        }
        .titulos{
            width: 90%;
        }
        img{
            width: 90%;
            height: 50%;
        }
    }
    #lista{
        margin-top: 6%;
        height: 100%;
        flex-direction: column;
    }
    ul{
        margin-top: 20%;
        font-size: 20px;
        margin-bottom: 20%;
    }


}
`

export const StyledQuemsomos4 = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
   

#titulo4{
width: 50%;
height: fit-content;
margin-top:5%;
display: flex;
justify-content: center;
align-items: center;

border: solid 2px #fff;
}
#titulo4 h1{
    text-align: center;
    font-size: 35px;
}


#container4{
width: 80%;
display: flex;
margin-top: 5%;
display: flex;
align-items: center;
justify-content: center;
gap: 10%;
z-index: 3;
}

  .imgCx4 img {
    width: 100%;
    height: 300px;
    transition: filter 0.3s ease, transform 1s ease;
    cursor: pointer;
  }
  
  .imgCx4 img:hover {
    filter: brightness(.4);
    transform: scale(1.1);
  }
  
  
  h3 {
    color: #F4F3F0;
    font-size: 30px;
    text-align: center;
    position: relative;
    top: -160px;
    opacity: 0;
    
    transition: opacity 1s ease;
    cursor: pointer;
  }
  .imgCx4:hover h3 {
    opacity: 1;
  }


.faixa{
    background-color: #101010;
    width: 40%;
    height: 100px;
    position: relative;
    top: -100px;
    left: -300px;
    z-index: 1;
}
`