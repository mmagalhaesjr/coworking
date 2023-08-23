import styled from 'styled-components';

export const StyledEspaços = styled.form`

display: flex;
flex-direction: column;
height: 100vh;
background-color:#171B1E;

.titulos{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    margin-top: 99px;

    text-decoration:underline #425F50;
   
    /* border-bottom:10px solid #425F50  ; 
    border-bottom-right-radius: 50px; */
   
    

    font-size: 70px;
    font-weight: 400;
    
}

#container{
    height: 450px;
    margin-top:50px;
    display: flex;
    justify-content:center;
    margin-left:5px;
    align-items: center;

    /* @media(max-height: 732px){
        margin-bottom: 20px;
        overflow: auto; 
        .div-exemplo::-webkit-scrollbar {
    width: 1em; 
}

.div-exemplo::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 4px; 
}

.div-exemplo::-webkit-scrollbar-track {
    background-color: #f5f5f5; 
}
} */
}

.espacoDiv{
    background-color: rgba(0, 0, 0, 0.6);
    width: 300px;
    height: 280px;
    border-radius: 15px;
    
    color:#ffffff;
    margin-left: 10px;
    margin-right: 10px;
    overflow: hidden;
    cursor: pointer;
}
.espacoDiv p{
    color:#425F50;
    color: #171B1E;
    font-weight: 400;
}

.espacoDiv:hover{
    height: 400px;
    transform: translatey(-10%);
    transition: 0.5s;
    p{
        color:#425F50;
        transition: 3s;
        
    }
    .espaco{
        height: 50%;
        transform: scale(1.1);
        transition: transform 1.5s ease;
        z-index: 5;

    }
}


.espaco{
    width: 100%;
    height: 80%;
    border-radius: 15px;
    cursor: pointer;
}

h2{
    font-size: 30px;
    text-align: center;
    margin-top: 30px;
    font-weight:400;
}
p{
    text-align: center;
    margin-top: 30px;
    font-size: 17px;
    color:#ffffff;
    font-weight: 100;
    margin: 20px;
}

@media(max-width:1033px ){
    #espacos{
        height: 2000px;
    }
  #container{
    flex-direction: column;
    gap:20px;
    margin-top: 30px;
  }  
  .espacoDiv{
    display: flex;
    width: 350px;
    height:150px;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .espaco{
    width: 70%;
    height:100%;
   position: relative;
   top: -5px;
  }
  h2{
    font-size: 20px;
    margin-top: 10px;
   
  }
  p{
    display: none;
  }
 h1{
    font-size: 60px;
 }

 .espacoDiv:hover{
   
    width: 350px;
    height:150px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform:none;

    .espaco{
    width: 70%;
    height:100%;
    top: -5px;

    }
}
}





`