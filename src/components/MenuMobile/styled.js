import styled from 'styled-components';

export const StyledMenuMobile = styled.div`



    
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(7,101,59,0.768032212885154) 100%);

    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index:1;
    top:100px;
    display: block;
    text-align:center;
   

 li a{
    color:#ffffff;
    font-weight:200;
    text-decoration: none;
    list-style: none;
    display: block;
    padding: 20px 30px;
    font-size: 16pxl;
    margin-top: 10px;
   
   
    &:hover{
    background-color:#000000;
    width: 100%;
    transition: 1s;
    
   }
}



`