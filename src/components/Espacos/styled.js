import styled from 'styled-components';

export const StyledEspacos = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 150vh;
  background: radial-gradient(circle, rgba(93, 91, 91, 1) 0%, rgba(0, 0, 0, 1) 100%);

  .titulos {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: #eae9e9;
    background-color: #398462;
    width: 50%;
    height: 10%;
    margin-top: 99px;
    font-size: 50px;
    font-weight: 200;
    z-index: 4;
  }

  #container {
    margin-top: 50px;
    gap: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 5px;
    align-items: center;
    z-index: 4;

   
  }

  .espacoDiv {
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    width: 300px;
    height: 280px;
    margin-top: 50px;
    color: #eae9e9;
    margin-left: 10px;
    margin-right: 10px;
    overflow: hidden;
    cursor: pointer;
  }

  .imgEspaco {
    width: 100%;
    height: 80%;
    cursor: pointer;
  }


  h2 {
    font-size: 30px;
    text-align: center;
    margin-top: 10px;
    font-weight: 200;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    text-align: center;
    margin-top: 30px;
    font-size: 17px;
    font-weight: 100;
    margin: 20px;
  }

  @media (min-width:940px){
    .espacoDiv:hover {
    height: 400px;
    transform: translateY(-10%);
    transition: 1.5s;
    p {
      color: rgba(93, 91, 91, 1);
      color: #ffffff;
      transition: 2s;
      transform: scale(1.1);
    }
    .imgEspaco {
      height: 50%;
      transform: scale(1.1);
      transition: transform 1.5s ease;
      z-index: 1;
      filter: brightness(60%);
    }
  }
  }

  @media (max-width: 1435px) {
    height: 1500px;
  }

  @media (max-width: 1067px) {
    height: 1800px;
  }

  @media (max-width: 1064px) {
    height: 2000px;
  }

  @media (max-width: 1033px) {
    height: 0;
  }

  @media (max-width: 1033px) {
    height: 1300px;
    #container {
      width: 100%;
    }
    .espacoDiv {
      height: 200px;
      width: 300px;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    .divTexto {
      flex-wrap: wrap;
      width: 150px;
      height: 50%;
      margin-left: 5px;
      display: flex;
      align-items: center;
    }
    .imgEspaco {
      width: 90%;
      height: 70%;
      position: relative;
    }
    h2 {
      font-size: 20px;
      margin-top: 10px;
    }
    p {
      display: none;
    }
    h1 {
      font-size: 60px;
    }
    /* .espacoDiv:hover {
      width: 350px;
      height: 150px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: none;
      .imgEspaco {
        width: 70%;
        height: 100%;
        top: -5px;
      }
    } */
  }


  @media (max-width: 776px) {
    margin-top: -50px;
    justify-content: space-between;
    #container {
      position: relative;
      bottom: 100px;
      display: flex;
    }
    .espacoDiv {
      width: 40%;
      display: flex;
    }
    .divTexto {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .titulos h1 {
      font-size: 35px;
      background-color: none;
    }
    .titulos {
      width: 100%;
      background-color: transparent;
    }
  }
`;