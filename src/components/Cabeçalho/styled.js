import styled from 'styled-components';


export const StyledprimeiraFaixa = styled.div`
width:100%;
height: 60px;
background-color: #111111;
position: fixed;
display: flex;
justify-content: space-between;
z-index: 1;

a {
text-decoration: none; 
color: inherit; 

  &:hover{
    color:#307A69; 
    transition:0.3s;
    }
}

#icones{
width: 20%;
height: 100%;
color:#ffffff;
font-size: 25px;
cursor: pointer;
display: flex;
justify-content: space-around;
margin-top: 15px;  
}

#telefone{
width: 20%;
margin-top: 15px;
color:#ffffff;
font-size: 27px;
text-align:center;
}
`

export const StyledCabeçalho = styled.div`
background: rgba(0, 0, 0, 0.7);
height:140px;
width:100%;
position: fixed;
z-index: 1;
margin-top:60px ;

display: flex;

section{
height:100px;
width: 70%;

display: flex;
justify-content: space-around;
align-items: flex-end;

position:relative;
left: 150px;
}

p{
font-family:Arial, Helvetica, sans-serif;
color: #ffffff;
cursor: pointer;
    
&:hover{
    color:#307A69; 
    transition:0.3s;
    }
}
div{
display: flex;
align-items:center;
}

img{
 width:300px;
height: 60px;
}
button{
background-color: #2A2A2A;
color: #ffffff;
width: 150px;
height: 60px;
font-size: 15px;
cursor: pointer;
border-radius: 10px;
position:relative;
top:20px;

    &:hover{
        border: 2px solid #ffffff;
        color:#307A69;
        transition:0.7s;
    }


}

`
