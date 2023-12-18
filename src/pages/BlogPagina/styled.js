import styled from 'styled-components';


export const StyledBlogPagina = styled.main`
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
    top:90%;
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
    max-width: 1700px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap; 
    gap: 5%; 

    border: solid 1px red;
}

@media(max-width:500px) {
    #titulo{
margin-top: 20%;
    }
}

`