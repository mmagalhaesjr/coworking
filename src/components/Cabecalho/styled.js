import styled from 'styled-components';
import { css } from 'styled-components';


export const StyledCabecalho = styled.header`



  nav {
    width: 100%;
    height: 100px;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    z-index: 5;
    

    position: fixed;    
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
      color: #398462;
      transition: 0.3s;
    }
  }

  img {
    width: 310px;
    height: 80px;
    margin-top: 7px;
    background: none;
  }
 

  button{
  
   border: solid 1px red;
    
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
    transition:.5s;
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
    nav{
        justify-content: space-between;
    }
  }
  @media (max-width: 419px) {
    img {
    width: 250px;
   
  }
  }

`;

// export const Primeirabarra = styled.header`
// width: 100%;
// height: 30px;
// background-color:#000000;
// position: absolute;

// `