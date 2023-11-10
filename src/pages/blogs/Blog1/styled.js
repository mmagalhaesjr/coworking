import styled from 'styled-components';



export const StyledBlog1 = styled.section`

display: flex;
flex-direction: column;
align-items: center;

#container1{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#titulo{
margin-top: 10%;
width: 100%;
text-align: center;
}
#titulo h1{
font-size: 2rem;
margin-bottom: 3%;
}
h1{
margin-top:5% ;
font-size: 2rem;
margin-bottom: 3%; 
}

#container2{
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 5%;
}
#bloco1{
   
    width: 100px;
    height:150vh;
    position: absolute;
    top: 20%;
    background-color: #ac7b40;
    left: 0;
    z-index: 0;
  
  }
  #bloco2{
   
    width: 100px;
    height:150vh;
    position: absolute;
    right: 0%;
    top: 180%;
    background-color: #101010;
   
    z-index: 0;
   
  }
 
  
 
.texto{
    margin-top: 2%;
    width: 100%;
    line-height: 1.2;
    text-align:left;
}
.texto p{
font-size: 1.2rem;
}
.img{
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%;
}
.img img{
    width: 100%;
}



@media(max-width:800px) {
    #container2{
        width: 90%;
    }
    #bloco1, #bloco2{
        display:none ;
    }
}
@media(max-width:480px) {
    .texto{
   
}
.texto p{
font-size: 1rem;
}
}
`