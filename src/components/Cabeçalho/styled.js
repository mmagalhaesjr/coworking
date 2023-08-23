import styled from 'styled-components';

export const StyledCabeçalho = styled.header`

nav{
background: rgba(0, 0, 0, 2);
height:100px;
width:100%;
position: fixed;
z-index: 1;
display: flex;
justify-content:space-evenly;  
flex-direction: row;


}

ul{
display: flex;
gap:30px;
align-items: center;

}


ul li a{
color: #ffffff;
cursor: pointer;
&:hover{
    color:#307A69; 
    transition:0.3s;
    }
}

img{
width:300px;
height: 70px;
margin-top: 15px;
background:none;
}


.hamburger{
    display:none;
    border:none;
    background: none;
    cursor: pointer;
    border-top: 3px solid #ffffff;
 
}
.hamburger::before,
.hamburger::after{
    content: " ";
    display: block;
    width: 30px;
    height: 3px;
    background: #ffffff;
    margin-top: 5px;
}

@media(max-width:940px){
   
    ul{
        display:none;
    }
    
    .hamburger{
        display: block;
        position: absolute;
        top:40px;
        right:40px ;
    }

    nav .ativar ul{
        pointer-events: all;
    }

}
   


`
