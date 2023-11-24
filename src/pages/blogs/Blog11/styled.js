import styled from 'styled-components';




export const StyledBlog11 = styled.section`

display: flex;
flex-direction: column;
align-items: center;


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

span{
    font-weight: 700;
}


#container1{
margin-top: 10%;
margin-bottom: 10%;
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: solid 20px ;
border-image: linear-gradient(to left,#ac7b40 , #101010) 4 repeat;
}

#container2{
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 5%;


}


#titulo{
margin-top: 5%;
width: 95%;
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


.texto{
    margin-top: 2%;
    width: 100%;
    line-height: 1.2;
    text-align:left;
}
.texto p{
font-size: 1.2rem;
}
.subTitulo{
  width: 100%;
  text-align: left;
  margin-top: 3%;
  
} 
.subTitulo p{
    font-weight: 600;
    font-size: 1.3rem;
}
.img{
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%;
}
.img img{
    width: 100%;
}

video{
    width: 100%;
}


@media(max-width:1140px) {
   #bloco2{
    height: 700px;
   }
}

@media(max-width:800px) {
    #container2{
        width: 90%;
    }
    #bloco1, #bloco2{
        display:none ;
    }
}
@media(max-width:500px) {
    #container1{
        border: none;
    }
#titulo h1{
    font-size: 1.5rem;
    text-align: left;
}
.texto p{
font-size: 1rem;
}
}
`