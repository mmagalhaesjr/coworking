import styled from 'styled-components';

export const StyledRodape = styled.footer`

background-color:#2A2A2A;
height: 250px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #ffffff;
h6{
    margin-bottom: 10px;
}

#container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:50px;
   
    bottom:0;
}

    .container{
        width: 400px;
        height: 200px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .contInterno{
        width: 100%;
        height: 100px;
        display: flex;
        color:#ffffff;
        font-size: 30px;
        margin-top: 30px;
        gap:30px;
        cursor: pointer;  
}

ul li a{
color: #ffffff;
cursor: pointer;
&:hover{
    color:#307A69; 
    transition:0.3s;
    }
}
ul{
justify-content:space-evenly;
text-align: center;
font-size: 15px; 
}

h3{
margin-top: -30px;
font-size: 30px;
color: #ffffff;
}

p{
font-size: 16px;
}

#endereço{
gap:3px;
text-align: center;
flex-direction: column;
font-size: 15px;
}

img{
    width: 200px;
}
   

`