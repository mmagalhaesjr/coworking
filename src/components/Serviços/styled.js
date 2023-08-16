import styled from 'styled-components';


export const StyledServiços = styled.section`
width: 100%;
height:700px;
color:#ffffff;

display: flex;
flex-direction: column;
background-color:#171B1E;

@media(max-width: 600px){
    height:1500px; 
}

.titulos{
    display: flex;
    flex-direction: column;
    font-size: 100px;
}
h1{
    text-align: center;
}

#container{
display:flex;
justify-content:space-between;
flex-wrap: wrap;
margin-top:70px;
}

.serviços{
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
    .serviços{
        width: 300px;
        height: 150px;
        font-size:30px; 
    }
    h1{
        font-size: 60px;
    }
}


`