import styled from 'styled-components';


export const StyledPlanos = styled.section`
width: 100%;
height:700px;
color:#ffffff;

display: flex;
flex-direction: column;
/* background-color:#2A2A2A; */

background-image: linear-gradient(-45deg, #ad9a70, #ffffff );

@media(max-width: 1320px){
    height:1200px; 
}
@media(max-width: 1200px){
    height:1300px; 
}
@media(max-width: 950px){
    height:1700px; 
}

.titulos{
    display: flex;
    flex-direction: column;
    margin-top: 99px;
    font-size: 70px;
    font-weight: 200;
    color:#71553d;

    

    /* border-bottom:10px solid #425F50; 
    border-bottom-right-radius: 50px; */
   
}
h1{
    text-align: center;
}

#container{
display:flex;
justify-content:space-evenly;
flex-wrap: wrap;
margin-top:70px;
gap: 40px;
}
.planos{
    width: 300px;
    height: 400px;
    border-radius: 15px;

    backdrop-filter: blur(10px); 
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    
   border: solid 5px  #425F50; 
}



@media(max-width:940px) {
    #container{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:-70px;
    }
    .planos{
        width: 300px;
        height: 150px;
        font-size:30px; 
    }
    h1{
        font-size: 60px;
    }
}
@media(max-width: 776px){
    .titulos h1{
        font-size: 35px;
    } 
}


`