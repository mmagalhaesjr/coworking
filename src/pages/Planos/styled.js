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

}

#container img{
    width:100%;
    height: 100%;
    margin-top: 100px;
   
}

#container #texto{
    width: 60%;
    height: 130px;
    position: relative;
    top:-50px;

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
    margin-top: 50px;
    width:50%;
    height:500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C4BCBC;
    border-radius: 200px;
}

#dayUseTexto{

   position: relative;
   left: 0%;
    width: 50%;
   
   
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
}
#circulo h3 {
    margin-top: 10px;
    font-size: 20px;

}
#circulo div{
    display: flex;
}
#circulo h2{
    font-weight: 700;
    font-size: 30px;
    margin-left: 5px;
    margin-top: 10px;
}
#circulo p{
margin-top: 15px;
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
    position: relative;
    left: -20%;
    margin-top: 50px;
}
#titulo h1{
    font-size: 40px;
    font-weight: 700;
}

.cxEstacao{
    margin-top: 50px;
    background-color: #C4BCBC;
    width: 90%;
    height: 400px;
    display: flex;
}

.img{
    width: 40%;
    height: 100%;
    background-image: url(src/assets/foto-capa.jpg);
    background-size: cover;
    background-color: #033a02;
}

.texto{
  width: 100%;
  height: 100%;
}
.txt{
    width: 60%;
    height: 100%;
    position: relative;
   
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10%;
}
.txt h2{
    margin-top: 50px;
    font-size: 30px;
}
.txt p{
    margin-top: 30px;
    font-size: 20px;
    color: #ffffff;
}
.valor{
    margin-top: 50px;
    background-color:  #5a5656;
    width: 200px;
    height: 100px;
    border-radius:200px ;
    margin-left: 10%;

    display: flex;
}
.valor h3{
font-size: 40px;
margin-top: 30px;
margin-left: 10px;
color: #ffffff;
}
.valor p{
font-size: 20px;
margin-top: 40px;
margin-left: 15px;
font-weight: 500;
color: #ffffff;
}
 button{
   width: 40%;
    height: 40px;

    position: relative;
    left: 55%;
    top: -10%;
    background-color: transparent;
    border: solid 2px #F4F3F0;
    color: #ffffff;
    font-weight: 700;

}

`