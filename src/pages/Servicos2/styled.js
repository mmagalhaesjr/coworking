import styled from 'styled-components';




export const StyledServicos2 = styled.section`
width: 100%;
height:100vh;

#container{
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    background-color:  #F4F3F0;
}

#containerTxt{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 10%;
   
}
#titulo{
    display: flex;
    text-align: start;
    line-height: 1.2;
    font-size: 45px;

}
ul{
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.5;
    font-weight: 400;

}
#containerImg{
   background-color:#101010 ;
    height: 85%;
    width: 35%;
  
}
img{
    position: absolute;
    width: 35%;
    left: 56%;
    

}

@media (max-width:1200px){
#titulo{
    font-size: 30px;
}
ul{
    font-size: 1.5rem;
}
#containerImg{
    height: 65%;
  
}
}

@media (max-width:940px){
#titulo{
    font-size: 30px;
}
ul{
    font-size: 1.5rem;
}
#containerImg{
    height: 55%;
  
}
}

@media (max-width:550px){

}
`