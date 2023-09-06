import styled from 'styled-components';


export const StyledPlanos = styled.section`

width: 100%;
height:1200px;
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
    height:2000px; 
}
@media(max-width: 840px){
    height: 2400px;
}
@media(max-width: 802px){
    height: 3000px;
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
width: 90%;
display:flex;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
margin-top:70px;



}
.planos{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 300px;
    /* border-radius: 15px; */
    background-color: rgba(0, 0, 0, 0.6);
    
    backdrop-filter: blur(10px); 
    border: solid 5px #eae9e9 ;
    


   
}

h2{
font-size: 30px;
text-align: center;
margin-top: 10px;
}
h3{
font-size: 25px;
text-align: center; 
}
ul{
display: flex;
justify-content: center;
gap: 20px;
width: 100%;
height: 100%;
overflow: hidden;

margin-left: 10px;

}
ul li{
    margin-top: 30px;
    font-weight:100;
}
p{
    font-size: 15px;
}

.itens{
    margin-left: 20px;
    width: 250px;
  
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
    .titulos{
    display: flex;
    width: 100%;
    background-color: transparent;
   }
}

@media(max-width: 802px){
    .titulos{
        margin-top: -50px;
    }
    #container{
        margin-top: -150px;
    }
}

@media(max-width: 776px){
    .titulos h1{
        font-size: 35px;
    } 
   
   
}


`