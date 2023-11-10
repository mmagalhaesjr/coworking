import styled from 'styled-components';





export const StyledPlanos = styled.section`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
overflow: hidden;


#container{
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.inicio{
    width: 100%;
    height: 300px;

    background-color: #F4F3F0;
}

.imgTemasek{
    position: relative;
    left:18%;
    width: 50%;
    margin-top: 10rem;
}
.imgCoworking{
    margin-top: 10px;
    position: relative;
    left:-29%;
    width: 25%;
}


&.paginaCarregada{
    .imgTemasek{
        transform: translatex(-40%);
        z-index: 1;
        transition: 2s ;
    }
    .imgCoworking{
        transform: translatex(155%);
        z-index: 1;
        transition: 2s;
    }
}

#container #texto{
    width: 60%;
    height: 130px;
    position: relative;
    top:-120px;
    display:flex;
    flex-direction: column;
    color: #000000;
    text-align: center;
    background-color:  #F4F3F0;

    border: solid 2px #F4F3F0;
}

#container #texto h2{
    margin-top: 20px;
    font-size: 30px;
}
#container #texto p{
    /* margin-top: 20px; */
    font-size: 2rem;
}


#cxDayUse{
    width:760px;
    max-width:760px;
    height:200px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #ac7b40;
    background-color: rgba(18, 18, 18, 0.2);
    
    border-radius: 200px;

    #circuloMobile{
    display: none;
}
}

#dayUseTexto{
   position: relative;
   left: 0%;
   width: 50%;
   opacity: 0;
   transition: opacity 5s ease;
}
&.rolagem {
    #dayUseTexto{
    opacity: 1;
    transition: opacity 5s ease;
   }
}

#dayUseTexto h1{
font-size: 50px;
font-weight: 700;
color: #ffffff;
}

#dayUseTexto p{
font-size: 20px;
font-weight: 700;
margin-top: 20px;
line-height: 1.2;
}

#circulo{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:  #F4F3F0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    left: -600px;
    transition: 2s;
}
&.rolagem {
    #circulo{
    transform: translatex(690px);
    z-index: 1;
    transition: 2s;
   }
}

#circulo h3 {
    margin-top: 10px;
    font-size: 15px;
}


#circulo div{
    display: flex;
}

#circulo h2{
    font-weight: 700;
    font-size: 35px;
    margin-left: 5px;
    margin-top: 10px;
}

#circulo p{
margin-top: 20px;
font-weight: 700;
}

@media (max-width:940px){
    #cxDayUse{
        width: 90%;
    }

}

@media (max-width:600px){

 
   #container #texto{
        width: 90%;
        top: -200px;
    }
    #container #texto p{
        font-size: 1rem;
    }

    #dayUseTexto{
        margin-left: 10%;
        opacity: 1.5;
        
}
    #cxDayUse{
        width: 90%;
        height: 150px;
        display: none;
        
        #circulo{
          display: none
        }
        h1{
            font-size: 25px;
        }
        p{
            font-size: 15px;
        }
    }
}
    @media (max-width:500px){
.imgTemasek{
    position: relative;
    left:18%;
    width: 80%;
    margin-top: 10rem;
}
.imgCoworking{
    position: relative;
    left:-29%;
    width: 35%;
}
&.paginaCarregada{
    .imgTemasek{
        transform: translatex(-22%);
        z-index: 1;
        transition: 2s ;
    }
    .imgCoworking{
        transform: translatex(145%);
        z-index: 1;
        transition: 2s;
    }
}
}
#circuloMobile{
    display: flex;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color:  #F4F3F0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     h3 {
    margin-top: 10px;
    font-size: 15px;
}


 h2{
    font-weight: 700;
    font-size: 20px;
    margin-left: 5px;
    margin-top: 10px;
}
div{
    display: flex;
    align-items: center;
}
 p{
margin-top: 20px;
font-weight: 700;

}
}


`








export const StyledPlanos2 = styled.section`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
#titulo{
   margin-right: 45%;
    margin-top: 50px;
    margin-left: 20px;
}
#titulo h1{
    font-size: 2.5rem;
    font-weight: 700;
}

.cxEstacao{
    margin-top: 25px;
    margin-bottom: 25px;
    background-color: #ac7b40;
    background-color: rgba(18, 18, 18, 0.2);
    -webkit-backdrop-filter: blur(10px);
    -webkit-background-color: rgba(18, 18, 18, 0.2);
    backdrop-filter: blur(10px);
    background-color: rgba(18, 18, 18, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 

    width:75%;
    height:20rem;
    display: flex;
    align-items: center;
    
}
.img{
    width: 50%;
    height: 18rem;
}
.img img{
    width: 100%;
    height: 100%;
}
.texto{
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center; 
}
.txt{
    width: 89%;
    height: 100%;
    position: relative;
   
    display: flex;
    flex-direction: column;
    text-align: left;
    /* margin-left: 10%; */
}
.txt h2{
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 30px;
}
.txt p{
    margin-top: 10px;
    
    font-size: 20px;
    color: #ffffff;
    
}

#icones{
    margin-top: 2%;
    color: #ffffff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2%; 
}
#icones p{
    font-size: 1rem;
    margin-top: -0.1%;
}
#icones .numeros{
    display: flex;
    align-items: center;
    justify-content: center;
}
section{
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;

    display: flex;
    align-items: center;

    justify-content: space-between;
    /* justify-content: center; */

}
.valor{
    background-color:  #101010;
    width: 30%;
    min-width: 150px;
    height: 80px;
    border-radius:200px ;
  
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.valor div{
display: flex;

}
.valor h4{
    margin-top: 0px;
    color: #ffffff;
}
.valor h3{
font-size:2rem;
margin-top: 5px;
margin-left: 7px;
color: #ffffff;
}
.valor p{
font-size: 20px;

margin-top: 15px;
font-weight: 500;
color: #ffffff;
}
 button{
    width: 40%;
    min-width: 250px;
    height: 40px;
    
    background-color: transparent;
    border: solid 2px #F4F3F0;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 700;
    &:hover{
        border: solid 2px #000000;
        color: #000000;
    }

}
button h5{
   font-size: 1rem;
}
.icone{
font-size: 30px;
margin-left: 50px;
margin-top: 10px;
}


@media(max-width: 1150px) {
    .cxEstacao{
        height: 80%;
        width: 95%;
    }
}
@media(max-width: 900px) {
    .txt .valor{
        width: 250px;
    }
    .cxEstacao{
        height: 100%;
        width: 95%;
        display: flex;
        flex-direction: column;
    }
    .texto{
        display: flex;
        flex-direction: column;
    }
.img{
    width: 100%;
}
.img img{
   
}
}

@media(max-width: 660px) {

    .txt{
        margin-left: 3%;
    }
    .valor{
        margin-top: 0;
    }
    button{
        margin-top: 20px;
        margin-bottom: 10px;
    }
   
    .cxEstacao{
        height: fit-content;
    }

    #titulo{
    
    margin-top: -200px;
}
}
@media(max-width: 490px){
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

}



`