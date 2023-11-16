import styled from 'styled-components';
import  { css } from 'styled-components';



export const StyledMenuMobile = styled.div`
background-color: #000000;
    /* background: #07653b; */
    /* background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(7,101,59,0.88032212885154) 100%); */
    position: fixed;
    width: 100%;
    height: 1000px;
    z-index:5;
    opacity: 0;
    pointer-events:none;
    transition: 0.5s;
    color: #ffffff;

  
    .nav-lista{
        margin-top: 130px;
        text-align:center; 
        color: #ffffff;
    }
   
nav{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: scale(0);
    transition: 1s;
    color: #ffffff;
    gap: 1rem;
}

 a{
    font-weight:200;
    text-decoration: none;
    list-style: none;
    display: block;
    padding: 20px 30px;
    font-size: 16pxl;
    color: #ffffff;
    
    &:hover{
    background-color:#398462;
    width: 100%;
    transition: 1s;
   }
}

${({mobile}) => mobile && css`

    opacity:1;
    pointer-events:auto;
    transition: .7s;
    transform: translatex(0);
    color: #ffffff;

    nav{
        transform: scale(1);
       
    }
    
`}
`