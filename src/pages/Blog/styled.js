import styled from 'styled-components';


export const StyledBlog = styled.main`
width: 100%;



display: flex;
align-items: center;
text-align: center;
flex-direction: column;


#whattsapp{
    z-index: 8;
    position: fixed;
    font-size: 3rem;
    right: 25px;
    top:630px;
    cursor: pointer;
    color: #15da0e;
    text-decoration: none;
}
#whattsapp:hover{
    color: #398462;
    transition:0.3s;
}

#titulo{
margin-top: 7%;
width: 90%;
}
#titulo h1{
font-size: 2rem;
font-weight: 700;
}

#container{
    margin-top: 5%;
    width: 95%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5%; 
}

.materia{
    width:20%;
    min-width:350px ;
    height: 50%;
    margin-bottom: 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
   
    background-color: #ffffff;

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