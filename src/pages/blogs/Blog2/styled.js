import styled from 'styled-components';



export const StyledBlog2 = styled.section`

display: flex;
flex-direction: column;
align-items: center;


#titulo{
margin-top: 5%;
width: 100%;
text-align: center;
}
#titulo h1{
font-size: 2rem;
margin-bottom: 3%;
}

#container{
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 5%;

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
    margin-top: 3%;
    width: 100%;
}
.img img{
    width: 100%;
}



@media(max-width:800px) {
    #container{
        width: 90%;
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