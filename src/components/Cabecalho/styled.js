import styled from 'styled-components';
import { css } from 'styled-components';


export const StyledCabecalho = styled.header`

   

  nav {
    width: 100%;
    height: 100px;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    z-index: 5;
    
  }

  ul {
    display: flex;
    gap: 30px;
    align-items: center;
    list-style: none;
  }

  ul li a {
    
    color: #000000;

    cursor: pointer;
    &:hover {
      color: #07653b;
      transition: 0.3s;
    }
  }

  img {
    width: 350px;
    height: 70px;
    margin-top: 15px;
    background: none;
  }

  button{
 
    width: 100px;
    height: 100px;
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    margin-top: -30px;
  }
 .linha{
    position: relative;
    width: 40px;
    height: 5px;
   background-color:#ffffff;
    display:block;
    margin: 10px auto;
    transform-origin:center;
    
 }

 /* .linha:nth-child(1){
    transform: translateY(7px) rotate(-45deg);
   }
   .linha:nth-child(2){
    display: none;
    }
    .linha:nth-child(3){
    transform: translateY(-7px) rotate(45deg);
    } */
 
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
  }

`;