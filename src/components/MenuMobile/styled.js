import styled from 'styled-components';
import  { css } from 'styled-components';

export const StyledMenuMobile = styled.div`



    
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(7,101,59,0.768032212885154) 100%);

    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100vh;
    top:100px;
    display: block;
    text-align:center;
    z-index:1;
   
    opacity: 0;
    pointer-events:none;

    transition: 0.5s;
   
nav{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    margin-top: 60PX;
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
    background-color:#000000;
    width: 100%;
    transition: 1s;
    
   }
}

svg{
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #ffffff;

    transform: rotate(45deg);
    transition: 2s;
    

    &:hover{
    color: #000000;
    transition: 1.5s;
   }
}


${({mobile}) => mobile && css`
    opacity:1;
    pointer-events:auto;

    transition: .7s;

    transform: translatex(0);

    svg{
        transform: rotate(90deg);
        transition: 2s;
    }
`}

`