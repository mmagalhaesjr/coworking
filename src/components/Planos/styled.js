import styled from 'styled-components';


export const StyledPlanos = styled.section`

width: 100%;
height:800px;
color:#71553d;

display: flex;
flex-direction: column;

background: linear-gradient(45deg, #ffffff 0%, rgba(173,154,112,0.8576680672268908) 100%);



@media(max-width: 1320px){
    height:1200px; 
}
@media(max-width: 1200px){
    height:1300px; 
}
@media(max-width: 940px){
    height:1700px; 
}
@media(max-width: 840px){
    height: 2400px;
}



.titulos{
    display: flex;
    flex-direction: column;
    margin-top: 99px;
    font-size: 50px;
    font-weight: 200;
    color:#71553d;
       
    /* color: #ffffffff; */
    z-index: 0;
}
h1{
    text-align: center;
    
}

#container{
display:flex;
justify-content:center;
flex-wrap: wrap;
margin-top:70px;
gap: 10px;
}
.planos{
    display: flex;
    flex-direction: column;
   
    align-items: center;
    width: 20%;
    height: 400px;
    border-radius: 15px;
    margin-left:10px;
    margin-right:10px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.9); */
    
   border: solid 5px #71553d ; 
   
   background-color: rgba(173,154,112,0.3);
   
   backdrop-filter: blur(10px); 
  
}
h2{
font-size: 30px;
text-align: center;
margin-top: 10px;
}
.icone{
    margin-top: 10px;
    font-size: 50px;
}
ul{
margin-top: -20px;
margin-left: 15%;



}
ul li{
    margin-top: 30px;
    font-weight:400;
}



@media(max-width:940px) {
    #container{
        height: 100%;
        margin-top:-70px;
       
    }
    .planos{
        width: 350px;
        height: 500px;
        font-size:20px;  
    }
    h1{
        font-size: 60px;
        margin-bottom:130px;
    }
  
}
@media(max-width: 776px){
    .titulos h1{
        font-size: 35px;
    } 
   
}


`