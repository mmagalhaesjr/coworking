import styled from 'styled-components';

export const StyledEspaços = styled.section`

display: flex;
flex-direction: column;
height: 100vh;
background-color:#171B1E;

.titulos{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 100px;
  
}

#container{
    height: 450px;
    margin-top:50px;
    display: flex;
    justify-content:center;
    margin-left:5px;
    align-items: center;
}

.espaçoDiv{
    font-family: Arial, Helvetica, sans-serif;
    width: 400px;
    height:500px;
    border-radius: 15px;
    background-color: #425F50;
    color:#AD9A70;
    margin-left: 10px;
    margin-right: 10px;
    overflow: hidden; 
}

.espaço{
    width: 400px;
    height: 300px;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
  z-index: 5;
}

}

h2{
    font-size: 30px;
    text-align: center;
}
p{
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
}


`