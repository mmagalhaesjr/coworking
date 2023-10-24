import styled from 'styled-components';


export const StyledQuemSomos = styled.section`
width: 100%;
height:300vh;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;

span{
    font-weight: 600;
}
.titulos{
width: 700px;
height: 70%;
display: flex;
justify-content: center;
align-items: center;

}
h1{
    display: flex;
    line-height: 1.2;
    font-size: 55px;
    font-weight: 700;
    line-height: 1.3;
}

#container1{
height: 100vh;
width: 100%;
border-bottom: 350px solid black;
display: flex;
flex-direction: column;
align-items: center;
}

#imagens{
    width: 88%;
    height: 55%;
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    img{
        width: 30%;
        max-width: 500px;
        height: 100%;
    }
}

#container2{
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
position: relative;

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
#texto1, #texto2{
    height: 50%;
    max-width: 700px;
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 300;
}

#texto1{
    position: relative;
    left: 15%;
}

#texto2{
    position: relative;
    right: -40%;
    align-items: flex-start;
    padding-top: 5%;
}

#container3{
height: 100vh;
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
    font-size: 40px;
    font-weight: 300;
    justify-content: space-around;

    img{
       height: 80%;
       box-shadow: 20px 20px 0px 0 black;
    }
    ul{
        width: 30%;
        text-align: start;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10%;
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