import styled from 'styled-components';



export const StyledEspacos = styled.section`

display: flex;
flex-direction: column;
height: 150vh;



background: rgb(0,0,0);
background: linear-gradient(45deg, #ffffff 0%, rgba(173,154,112,0.8576680672268908) 100%);


@media(max-width:1033px ){
    height:0;
}

.titulos{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align:center;
    align-items: center;
    color:#71553d;
    margin-top: 99px;    

    font-size: 50px;
    font-weight: 200;
    
}

#container{
    margin-top:50px;
    gap:50px;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    margin-left:5px;
    align-items: center;

}

.espacoDiv{
    /* background-color: rgba(0, 0, 0, 0.6); */

    backdrop-filter: blur(10px); 
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    width: 300px;
    height: 280px;
    border-radius: 15px;
    margin-top:50px;
    
    color:#71553d;
    margin-left: 10px;
    margin-right: 10px;
    overflow: hidden;
    cursor: pointer;
}
.espaco{
    width: 100%;
    height: 80%;
    border-radius: 15px;
    cursor: pointer;
}
.espacoDiv:hover{
    height: 400px;
    
    transform: translatey(-10%); //aberbuta do espaço
    transition: 1.5s;
    p{
        color:#71553d;
        transition: 2s;
    }
    .espaco{
        height: 50%;
        transform: scale(1.1);
        transition: transform 1.5 ease;
        z-index: 1;
        filter: brightness(60%);
    }
}
h2{
    font-size: 30px;
    text-align: center;
    margin-top: 10px;
    font-weight:200;
}
 p{
    color:#ad9a70;
    font-weight: 400;

    text-align: center;
    margin-top: 30px;
    font-size: 17px;
    font-weight: 100;
    margin: 20px;
}

@media(max-width: 1435px){
    height:1500px; 
}

@media(max-width: 1067px){
    height:1700px; 
}
@media(max-width:1033px ){
  #container{
    flex-direction: column;
    gap:40px;
    margin-top: 90px;
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

  .divTexto{
        flex-wrap: wrap;
        width: 150px;
        height: 50%;
        margin-left: 5px;
        display: flex;
        align-items: center;
    }

  .espaco{
    width: 200px;
    height:100%;
    position: relative;
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
@media(max-width: 776px){
    height:1700px; 
    
    .espacoDiv{
        display: flex;
        justify-content: space-between;
    }
    #container{
        flex-direction: column;
        display: flex;
    }
    .divTexto{
        display: flex;
        justify-content: space-between;

        flex-wrap: wrap;
    }
    .titulos h1{
        font-size: 35px;
    }
    
}





`