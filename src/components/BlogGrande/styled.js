import styled from 'styled-components';

export const StyledBlogGrande = styled.main`
width:100%;
min-width:350px ;

display: flex;
align-items: center;
justify-content: center;


margin-top: 2.5%;
margin-bottom: 2.5%;

section{
    width: 35%;
}

.materia{
    width: 100%;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    color:#000000;
    &:hover{
        background-color: #bfbfbf;
    }
}

.texto{
    width: 95%;
}
.materia h1{
    font-size: 1rem;
    text-align: center;
    margin-top: 5%;
    font-weight: 700;

    
}
.materia p{
    font-size: .7rem;
    margin-top: 10%;
    margin-bottom: 10%;
}
.foto{
    width: 100%;
    height: 200px;
  

}
.foto img{
    width: 100%;
    height: 100%;
}

@media(max-width:1300px) {
    #titulo{
        margin-top: 10%;
    }
    
}
@media(max-width:800px) {
    #titulo{
        margin-top: 20%;
    }
    
}

`