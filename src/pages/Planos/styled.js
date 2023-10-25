import styled from 'styled-components';







export const StyledPlanos = styled.section`
width: 100%;
height:130vh;
display: flex;
align-items: center;
flex-direction: column;

border: solid 2px black;




#container{
width: 100%;
height: 90%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

}

#container img{
    width:70%;
    height: 100%;
   
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

    border: solid 2px black;
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
    width:70%;
    height:500px;
    background-color: #C4BCBC;
    border-radius: 200px;
}

#circulo{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:  #F4F3F0;
    margin-left: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#circulo p{
    margin-top: 10px;
}
#circulo span{
    font-size: 30px;
    font-weight: 700;
}


`

export const StyledPlanos2 = styled.section`
width: 100%;
height:100vh;
display: flex;
align-items: center;
flex-direction: column;

border: solid 2px red;

.cxEstacao{
    background-color: #000000;
    width: 90%;
    height: 400px;

    display: flex;
}

.img{
    width: 40%;
    height: 100%;
    background-color: #033a02;
}

.texto{
  width: 100%;
  height: 100%;
}
.txt{
    width: 60%;
    height: 100%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10%;

    border: solid 2px #0de709;



}
.txt h2{
    margin-top: 50px;
    font-size: 30px;
}
.txt p{
    margin-top: 30px;
    font-size: 20px;
}
.valor{
    margin-top: 50px;
    background-color:  #C4BCBC;
    color: #000000;
    width: 200px;
    height: 100px;
    border-radius:200px ;
    margin-left: 10%;

    display: flex;
}
.valor h3{
font-size: 40px;
margin-top: 30px;
margin-left: 25px;
}
.valor p{
font-size: 15px;
margin-top: 45px;
margin-left: 10px;
font-weight: 500;
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