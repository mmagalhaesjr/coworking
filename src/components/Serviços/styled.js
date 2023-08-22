import styled from 'styled-components';


export const StyledServiços = styled.section`
width: 100%;
height:700px;
color:#ffffff;

display: flex;
flex-direction: column;
background-color:#307A69;



@media(max-width: 1320px){
    height:900px; 
}
@media(max-width: 1200px){
    height:1000px; 
}
@media(max-width: 950px){
    height:1700px; 
}

.titulos{
    display: flex;
    flex-direction: column;
    margin-top: 99px;
    font-size: 70px;
    font-weight: 400;

    text-decoration:underline;
}
h1{
    text-align: center;
}

#container{
display:flex;
justify-content:space-around;
flex-wrap: wrap;
margin-top:70px;
gap: 40px;
}

.servicos{
width: 300px;
height: 150px;
font-size: 50px;
display: flex;
flex-direction:column;
align-items:center;
text-align:center;
}
h2{
    font-size: 25px;
}
p{
    font-size:15px;
    margin-top: 15px;
}

@media(max-width:940px) {
    #container{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .servicos{
        width: 300px;
        height: 150px;
        font-size:30px; 
    }
    h1{
        font-size: 60px;
    }
}



`