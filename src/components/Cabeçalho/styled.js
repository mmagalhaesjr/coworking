import styled from 'styled-components';



// export const StyledprimeiraFaixa = styled.header`

// width:100%;
// height: 60px;
// background-color: #111111;
// display: flex;
// justify-content: space-between;
// position: fixed;
// z-index: 1;
// a {
// text-decoration: none; 
// color: inherit; 

//   &:hover{
//     color:#307A69; 
//     transition:0.3s;
//     }
// }

// #icones{
// width: 20%;
// height: 100%;
// color:#ffffff;
// font-size: 25px;
// cursor: pointer;
// display: flex;
// justify-content: space-around;
// margin-top: 15px;  
// }

// #telefone{
// width: 20%;
// margin-top: 15px;
// color:#ffffff;
// font-size: 27px;
// text-align:center;
// }
// `

export const StyledCabeçalho = styled.header`

nav{
background: rgba(0, 0, 0, 1);
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
height: 60px;
margin-top: 15px;
}

/* button{
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
} */

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
   
    /* ul{
        flex-direction: column;
        justify-content: space-around;
        position: fixed;
        top: 0;
        left:0;
        background: #307A69;
        width: 100vw;
        height: 100vh;
        gap:0;

        
        pointer-events: none;
        
    } */
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
