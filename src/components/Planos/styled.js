import styled from 'styled-components';


export const StyledPlanos = styled.section`
width: 100%;
height:700px;
color:#ffffff;

display: flex;
flex-direction: column;
background-color:#2A2A2A;

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
    font-size: 80px;
    font-weight: 700;
    margin-top: 99px;
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
   border: solid 5px #307A69; 
}



@media(max-width:940px) {
    #container{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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



`