import styled from 'styled-components';

export const StyledContato = styled.section`
display: flex;
justify-content: center;
align-items: center;
height:80vh;
background-color: #F4F3F0;
margin: auto;
padding: 20px;
gap: 5%;

flex-direction: column; //tirar -------------

#container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    
}
#titulos{
    width: 40%;
    display: flex;
    flex-direction: column;
    text-align: center;
    color:#000000;
    font-weight:100;  
    line-height: 1.3;

   
}

#titulos h1{
    font-size:40px;
}


@media (max-width:940px){

   #titulos h1{
      font-size: 30px;
    }

}




@media (max-width:940px){
    height: fit-content;
    #container{
flex-direction: column;
    
}
#titulos{
    width: 90%;
    margin-bottom: 30px;
}

#contato{
    margin: 0;
}
form{
    margin-right: 0;
    width: 100%;
}
}



`

