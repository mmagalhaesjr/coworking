import styled from 'styled-components';



export const StyledPlanos = styled.section`
width: 100%;
height:130vh;
display: flex;
align-items: center;
flex-direction: column;


#container{
width: 100%;
height: 90%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin-top: 5%;

}

#container img{
    width:100%;
    height: 82%;
    margin-top: 100px;
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
    background-color: #ffffff;
}

#container #texto h2{
    margin-top: 20px;
    font-size: 30px;
}
#container #texto p{
    margin-top: 20px;
    font-size: 25px;
}


#cxDayUse{
    margin-top: 100px;
    width:760px;
    max-width:760px;
    height:500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C4BCBC;
    background-color: #a98261;
    border-radius: 200px;
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




`








export const StyledPlanos2 = styled.section`
width: 100%;
height:100vh;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 170px;

#titulo{
   margin-right: 45%;
    margin-top: 50px;
}
#titulo h1{
    font-size: 2rem;
    font-weight: 700;
}

.cxEstacao{
    margin-top: 50px;
    background-color: #a98261;
   
    width:75%;

    border: solid 30px #a98261;
   
    display: flex;
}

.img{
    width: 40%;
    height: 300px;
    background-color: #000000;
}
.img img{
    width: 100%;
    height: 100%;
}

.texto{
  width: 100%;
  height: 100%;
}
.txt{
    width: 89%;
    height: 100%;
    position: relative;
   
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10%;

}
.txt h2{
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 30px;
}
.txt p{
    margin-top: 10px;
    
    font-size: 20px;
    color: #ffffff;
    
}
section{
    width: 100%;
    margin-top: 10px;

    display: flex;
    justify-content: space-between;
}
.valor{
    background-color:  #101010;
    width: 30%;
    min-width: 150px;
    height: 80px;
    border-radius:200px ;
    margin-top: 10px;
    margin-bottom: 10px;
   
  

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
    margin-top: 20px;
    margin-right: 10%;

   
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