import styled from 'styled-components';


export const StyledPlanos = styled.section`

width: 100%;
height:800px;
color:#eae9e9;

display: flex;
align-items: center;
flex-direction: column;
background: radial-gradient(circle, rgba(93,91,91,1) 0%, rgba(0,0,0,1) 100%);



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
    justify-content: center;
    align-items:center;
    margin-top: 99px;
    font-size: 50px;
    font-weight: 200;
    color:#eae9e9;
    background-color: #398462;
    width: 50%;
    height: 14%;
    z-index: 0;
}
h1{
    text-align: center;
}

#container{
width: 100%;
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
    /* border-radius: 15px; */
    margin-left:10px;
    margin-right:10px;
    background-color: rgba(0, 0, 0, 0.6);
    
    
   /* border: solid 5px #71553d ;  */
   border: solid 5px #eae9e9 ;
   
  
  
   
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
    .titulos{
        background-color: transparent;
    }
   
}


`