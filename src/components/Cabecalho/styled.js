import styled from 'styled-components';
import { css } from 'styled-components';




export const StyledCabecalho = styled.header`

  nav {
    width: 100%;
    height: 100px;
    
    background-color: transparent;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    position: fixed;   
    z-index: 9;
  }
  ul {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    font-size: 18px;
  }

  ul li a {
   color: #ffffff;
    cursor: pointer;
    &:hover {
      color: #000000;
      transition: 0.3s;
    }
  }
  .logo2 img {
    display: none;
    width: 200px;
    height: 50px;
    margin-top: 7px;
    background: none; 
    }
  img {
    width: 200px;
    height: 50px;
    margin-top: 18px;
    background: none;
  }
  button{
    height: 100px;
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    margin-top: -50px;
    z-index: 9;
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
 &.rolagem {
        nav {
            height: 60px;
            -webkit-backdrop-filter: blur(10px);
            -webkit-background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);  
            display: flex;
            justify-content: center;
            z-index: 9;
        }
        nav .logo2 img {
        display: block; 
            }
        @media (max-width:900px) {
            nav .logo2 img{
                margin-left: -20%;
        }
        }
        nav .logo img{
            display: none;
        }
            ul li a{
                color:#000000 ;
                &:hover {
                color: #ffffff;
                transition: 0.3s;
        }
        }
        button{
            margin-top: -60px;
        }    
        .linha{
            background-color: #000000;
            color: #000000;
        }
    }//termino da rolagem




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

