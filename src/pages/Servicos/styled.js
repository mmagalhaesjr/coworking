import styled from 'styled-components';




export const StyledServicos = styled.section`
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;

background-color: #F4F3F0 ;

#titulos {
    width: 50%;
    height: 300px;
    position: relative;
    top: -150px;
    
  }
  #titulos h1{
    color:#101010; 
    font-size: 40px;
  }

#container{
width: 100%;
height: 100%;
position: relative;
top: -100px;

display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
}

.cont{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -100px;
    gap: 50px;
    margin-top: 100px;
    
}

.cx{
width:190px;
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
    margin-top: 10px;
}
.cx img{
    width: 60px;
    height: 50px;
  
}
.cx p{
    font-size: 15px;
    margin-top: 10px;
    
   
}


`