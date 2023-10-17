import styled from 'styled-components';




export const StyledServicos = styled.section`
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;

background-color: #101010;

#titulos {
    width: 50%;
    height: 300px;
    position: relative;
    top: -100px;
    
  }
  #titulos h1{
    color:#F4F3F0 ;
    font-size: 40px;
  }

#container{
width: 100%;
height: 100%;
position: relative;
top: -50px;

display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;


/* border: solid 1px #ffffff; */

}

.cx{
width:280px;
height: 200px;

display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;

color:#F4F3F0 ;
/* border: solid 1px #ffffff; */
}


.cx h2{
    font-size: 15px;
    font-weight: 600;
}
.cx img{
    width: 60px;
    height: 50px;
    margin-top: 10px;
}
.cx p{
    font-size: 13px;
    margin-top: 10px;
   
}


`