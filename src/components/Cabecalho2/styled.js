import styled from 'styled-components';
import { css } from 'styled-components';



export const StyledCabecalho2 = styled.header`



  nav {
    width: 100%;
    height: 100px;
   
    height: 60px;
    -webkit-backdrop-filter: blur(10px);
    -webkit-background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9); 

    display: flex;
    justify-content: center;
    gap: 10%;
    flex-direction: row;
    z-index: 5;
    position: fixed;  
    
    
  }

  ul {
    display: flex;
    gap: 70px;
    align-items: center;
    list-style: none;
    font-size: 18px;
  }

  ul li a {
   color: #000000;
  

    cursor: pointer;
    &:hover {
        color: #ffffff;
      transition: 0.3s;
    }
  }


  img {
    width: 200px;
    height: 50px;
    margin-top: 7px;
    background: none;
  }

  button{
    height: 100px;
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    margin-top: -30px;
  }
 .linha{
    position: relative;
    top: -25px;
    width: 40px;
    height: 5px;
    background-color:#000000;
    display:block;
    margin: 10px auto;
    transform-origin:center;
    transition:.5s;
 }

 ${({ mobile }) => mobile && css`
   .linha:nth-child(1){
    transform: translateY(0) rotate(-45deg);
    transition: 1s;
   }
   .linha:nth-child(2){
    display: none;
    
    }
    .linha:nth-child(3){
    transform: translateY(-15px) rotate(45deg);
    transition: 1s;
    }
`}
  

  @media (max-width: 940px) {
    ul {
      display: none;
    }
    button{
      display: block;
      position: absolute;
      top: 40px;
      right: 40px;
    }
    nav{
        justify-content: space-between;
    }
    img {
    margin-left:10px;
   
  }
  }
  @media (max-width: 419px) {
    img {
    width: 250px;
    margin-left:10px;
   
  }
  }

`;

