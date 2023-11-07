import styled from 'styled-components';


export const StyledServicos = styled.section`
width: 100%;
/* height:90vh; */

display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
background-color: #F4F3F0 ;




#titulos {
    width: 70%;
    height: 10%;
    margin-top: 80px;
    
  }

  #titulos h1{
    color:#ac7b40;
    font-size: 40px;
  }

#container{
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10%;
align-items: center;
width: 90%;
max-width: 1700px;
margin-top: 50px;
}

.cx{
max-width:300px;
min-width:200px;
width: 20%;
height: 200px;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
color:#101010;
}

.cx h2{
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    color:#ac7b40;
}
.cx img{
    width: 60px;
    height: 50px;
}
.cx p{
    font-size: 15px;
    margin-top: 30px;
}

@media (max-width:940px){
    min-height: 750px;
    #container{
width: 90%;
}
    #titulos h1{
    font-size: 30px;
  }
    
.cx{
width:140px;
height: 150px;

img{
    width: 50px;
    height: 35px;
}
h2{
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
}
p{
    font-size: 10px;
    margin-top: 10px;
}
}
}

@media (max-width:670px){

#titulos h1{
font-size: 25px;
margin-top: 0px;
  }

#container{
width: 100%;
}

.cx{
min-width: 60px;
}

}
@media (max-width:530px){
    height:100vh;
}
@media (max-width:400px){
height: 900px;
}
`