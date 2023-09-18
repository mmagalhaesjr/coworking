import styled from 'styled-components';


export const StyledServicos = styled.section`
width: 100%;
height:800px;
color:#ffffff;

display: flex;
flex-direction: column;
text-align: center;
align-items: center;

background-color:#398462;
background: radial-gradient(circle, rgba(93, 91, 91, 1) 0%, rgba(0, 0, 0, 1) 100%);
/* background-color:#07653b; */


@media(max-width: 1320px){
    height:900px; 
}
@media(max-width: 1200px){
    height:1000px; 
}
@media(max-width: 950px){
    height:1900px; 
}

.titulos{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    

    background-color: #398462;
    width: 50%;
    height: 10%;
    margin-top: 99px;
    font-size: 50px;
    font-weight: 200;
    z-index: 4;
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

@media (max-width: 776px) {
    .titulos {
      width: 100%;
      background-color: transparent;
    }
  }



`