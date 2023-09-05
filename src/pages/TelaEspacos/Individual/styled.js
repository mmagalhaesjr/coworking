import styled from 'styled-components';


export const StyledEspacos = styled.section`

section{
width:100%;
height: 300px;

background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
}

section:nth-of-type(1){
    background-image: url(src/assets/salao2.png);
    height: 600px;
    
}
section:nth-of-type(3){
    background-image: url(src/assets/salao3.jpg);
    height: 600px;
    
}
section:nth-of-type(5){
    background-image: url(src/assets/salao4.jpg);
    height: 600px;
}

section:nth-of-type(2){
    
}
section:nth-of-type(4){
   
}
section:nth-of-type(6){
   
}

.info{
    backdrop-filter: blur(10px);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(195,192,187,0.7008053221288515) 50%);
    
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);

    
}
.texto{
    width: 100%;
    font-weight: 100;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
   

    
}
.texto h1{
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 30px;
    font-weight: 400;


}
.texto p{
    width: 90%;
    font-weight: 100;
    
}


`