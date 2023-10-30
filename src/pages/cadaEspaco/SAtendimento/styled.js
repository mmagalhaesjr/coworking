import styled from 'styled-components';




export const StyledSAtendimento = styled.section`

width: 100%;
height: 100vh;
background-color: #F4F3F0 ;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


#titulo{

}
#titulo h1{
    font-size: 50px;
    position: relative;
    top: -50px;
}

#container{
    width: 100%;
    height: 100%;
    display: flex;
}



#containerTexto{
    width: 60%;
    height: 100%;
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
font-size: 40px;
}
#texto h2{
    font-size: 25px;
    margin-top: 50px;
    font-weight: 100;
}
h3{
    font-size: 25px;
    margin-top: 50px;
}
#texto ul{
    margin-top: 20px;
}
#texto ul li{
    font-size: 25px;
    margin-top: 20px;
    margin-left: 40px;
    font-weight: 100;
}

h4{
    display: flex;
    flex-direction: column;
    font-size: 25px;
    font-weight: 500;
    margin-top: 20px;
}
span{
    font-weight: 500;
}


/* .faixa{
    width: 100%;
    height: 150px;
    position: relative;
    top: 100px;
    background-color: #9C6839;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.cxIcone{
        width: 200px; 
        height: 130px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .cxIcone img{
    width: 50px;
    height: 50px;
    margin-top: 10px;
    }
    .cxIcone p{
        margin-top: 20px;
        color: #F4F3F0;
        font-size: 25px;
        font-weight: 100;
    } */

    #containerFoto{
        width: 40%;
    }
    #cor{
    background-color: #9C6839;
    background-color: #101010;
    width: 90%;
    height: 70%;
    margin-right: 40px;
    position: relative;
    top: 15%;
    left: 0%;
   
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
  margin: 100px auto;
  width: 320px;
  height: 240px;
}

.swiper-slide {
   width: 100%;
   height: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  position: relative;
  left: -5%;

}

.foto{
    width: 100%;
    height: 100%;
    position: relative;
    top: 5%;
    left: -5%;
    
}

`


export const Styled2 = styled.section`

width: 100%;
height: 200vh;
background-color: #F4F3F0
;

display: flex;
flex-direction: column;
align-items: center;

#titulo{
    margin-top: 100px;
    font-size: 40px;
}


#container1{
width: 80%;
max-width: 1300px;
min-width: 610px;
display: flex;
align-items: center;
justify-content: center;
gap: 80px;
flex-wrap: wrap;
margin-top: 100px;

}

#container1 img{
    width: 60px;
    height: 60px;

   
}
.cxImg{
    width: 200px;
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    justify-content: center;

   
}
.cxImg p{
    margin-top: 20px;
    
}
#container2{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 150px;
    gap: 100px;

}
.box{
    display: flex;
    align-items: center;
}
    .cxIcone{
        width: 200px; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cxIcone img{
        width: 100px;
    height: 100px;
    margin-top: 10px;
    }
    .cxIcone p{
        margin-top: 20px;
    }


    #texto{
       
    }
    #texto h2{
        font-size: 40px;
    }
    #texto p{
        font-size: 25px;
        margin-top: 50px;
    }

    #texto button{
        margin-top: 50px;
        width: 30%;
        height: 25%;
        background-color: #000000;
        color: #F4F3F0;
        font-size: 20px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        &:hover{
            transition: .5s;
            background-color: #9C6839;
            width: 32%;
            height: 27%;
                font-size: 23px;
            }

        }
`