import styled from 'styled-components';

import foto from '../../assets/capa/marcos.png';

const fotoCaminho = `url(${foto})`;

export const StyledContato = styled.section`
display: flex;
justify-content: center;
align-items: center;
height:80vh;
background-color: #F4F3F0;
margin: auto;
padding: 20px;
gap: 5.1%;
background-image: ${fotoCaminho};
background-repeat: no-repeat;
background-size: cover;


/* flex-direction: column;  */
//tirar -------------

#container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    
}
/* img{
    position: absolute;
    width: 100%;
    height: 80%;
} */

#titulos{
    width: 40%;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight:100;  
    line-height: 1.3;
    color:#ac7b40;
    color:#101010;
}

#titulos h1{
    font-size:40px;
    z-index: 2;
}


@media (max-width:940px){

   

   #titulos h1{
      font-size: 30px;
    }
    img{
        height: 90%;
    }

}




@media (max-width:940px){
   
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

