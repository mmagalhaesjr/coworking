import styled from 'styled-components';

import foto from '../../assets/sobreNos/logo.png';

const fotoCaminho = `url(${foto})`;

export const StyledQuemSomos = styled.section`
width: 100%;
display: flex;
flex-direction: column;


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
    width: 100%;
    margin-top: 3%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    position: relative;

   

    /* background-image: ${fotoCaminho};
    background-repeat:no-repeat ;
    background-size: 50%;
    background-position: center; */
}

    #container img {
        position: absolute;
        top: 5%;
        transition: transform 5s linear ; 
        z-index: 2;
        width: 40%;
       
    }

  &.paginaCarregada{
   #container img{
    transform: rotatey(360deg); 
   }
}



#texto1, #texto2{
    width: 100%;
    position: relative;
    display: flex;
    font-weight: 300;
    z-index: 3;
}
#texto1{
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 5%;
}
#texto2{
   margin-top: 10%;

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

//responsivo container


@media (max-width:900px){
    #container{
        height: 30%;
    }
    #container img{
        width: 30%;
        position: relative;
        margin-top: 5%;
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
    font-weight: 300;

}

}
@media (max-width:670px){
    #container{
        height: 25%;
    }
}

@media (max-width:500px){
    #container{
        margin-top: 10%;
        justify-content: space-evenly;
    }
   
    
}












#container2{
margin-bottom: 5%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5%;
z-index: 3;

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
       width: 100%;
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
//responsivo container2
@media (max-width:1200px){
#container2 .titulos h1{
    font-size: 1.5rem;
}
}

@media (max-width:990px){
   
   #container2{
       display: flex;
       flex-direction: column;
   }
   .titulos{
       margin-top: 10%;
       width: 90%;
   }
   
   #lista{
       display: flex;
       flex-direction: column; 
   }
  
   #lista img{
       margin-top: 20%;
   }
   #lista ul{
       margin-top: 10%;  
       padding-left: 0%;
   }
   
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
    #lista ul {
        flex-wrap: wrap;
        width:100%;
        height: 90px;
        margin-left: 70px;

        display: flex;
    }
    
    #lista ul li{
        font-size: 1.2rem;
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

