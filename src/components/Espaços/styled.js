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
    font-weight: 700;
    color: #ffffff;
    margin-top: 30px;
  
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
    color:#ffffff;
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
    margin-top: 20px;
    font-weight:400;
}
p{
    text-align: center;
    margin-top: 30px;
    font-size: 17px;
    color:#ffffff;
    font-weight: 100;
}

@media(max-width:1033px ){
    #espaços{
        height: 2000px;
    }
  #container{
    flex-direction: column;
    gap:20px;
    margin-top: 30px;
  }  
  .espaçoDiv{
    display: flex;
    width: 350px;
    height:150px;

    margin-top: 20px;
    margin-left: 0;
    margin-right: 0;

    display: flex;
    
    align-items:center;
    
  }
  .espaço{
    width: 70%;
    height:100%
  }
  h2{
    font-size: 20px;
    margin-top: 10px;
   
  }
  p{
    display: none;
  }
 h1{
    font-size: 50px;
 }
}


`