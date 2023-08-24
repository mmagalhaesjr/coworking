import styled from 'styled-components';


export const StyledPlanos = styled.section`
width: 100%;
height:700px;
color:#ffffff;

display: flex;
flex-direction: column;
/* background-color:#2A2A2A; */

background-color: #a3a594;

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
    color: #000000;

    text-decoration:underline #425F50;

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

    background-color:rgba(0, 0, 0, 0.6);
   border: solid 5px  #425F50; 
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