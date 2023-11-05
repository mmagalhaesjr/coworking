import styled from 'styled-components';




export const StyledSReuniao = styled.section`

width: 100%;
background-color: #F4F3F0 ;
padding-top: 30px;
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

#texto div{
    width: 230px;
    display: flex;
    align-items:center;
    justify-content: space-between;

    svg{
        margin-top: 20px;
        font-size: 20px;
    }
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
    font-weight: 100;
    margin-top: 20px;
}
span{
    font-weight: 500;
}//fim do container texto



#containerFoto{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
   
}
    #cor{
    width: 100%;
    height: 60%;
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
//fim do container foto
`




export const Styled2 = styled.section`

width: 100%;
background-color: #F4F3F0;


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
        height: 60px;
        margin-bottom: 40px;
        background-color: #000000;
        color: #F4F3F0;
        font-size: 20px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        &:hover{
        background-color: #504f4fd2;
        color:#000000; 
        transition:0.7s;
    }

        }
    

`