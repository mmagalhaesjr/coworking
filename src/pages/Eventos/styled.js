import styled from 'styled-components';

export const StyledEventos = styled.section`
width: 100%;
height:130vh;
display: flex;
align-items: center;
flex-direction: column;



#container{
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
 #cxTexto{
    width: 40%;
    margin-top: 70px;
    margin-bottom: 50px;
    text-align: center;
 }
#cxTexto h2{
    font-size: 25px;
    line-height: 1.5;
}
#cxTexto h2 span{
    font-weight: 700;
}
#cxVideo{
    width: 90%;
    height: 70%;
    margin-top: 20px;
    background-color: #000;
}

`

export const StyledEventos2 = styled.section`
width: 100%;
height:130vh;
display: flex;
align-items: center;
flex-direction: column;




#container{
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
 #cxTexto{
    width: 40%;
    margin-top: 70px;
    margin-bottom: 50px;
    text-align: center;
 }
#cxTexto h2{
    font-size: 25px;
    line-height: 1.5;
}

#cxImg{
    width: 90%;
    height: 70%;
    margin-top: 20px;
}
#cxImg img{
    width: 100%;
    height: 100%;
    position: relative;
    top: -20%;
    z-index: 2;
}
.faixa{
    width: 40%;
    height: 20%;;
    background-color:#101010 ;
    position: relative;
    top: -10px;
    left: -10px;
    z-index: 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    text-align: left;
    color: #ffffff;
    font-size: 1.5rem;
}
.faixa p{
    margin-left: 15%;
}
`

export const StyledEventos3 = styled.section`
width: 100%;
height:100vh;
display: flex;
align-items: center;
flex-direction: column;

#container{
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
 #cxTexto{
    width: 60%;
    margin-top: 70px;
    margin-bottom: 50px;
    text-align: center;
 }
#cxTexto h2{
    font-size: 25px;
    line-height: 1.5;
}
#cxForm{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;

}

.cxForm{
    width: 30%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #bfb3b5;
}

.texto{
    width: 90%;
    height: 90%;

    /* border: solid 1px black; */
}

.texto h2{
    font-size: 2.7rem;
}

.texto  p{
    font-size: 1.5rem;
    margin-top: 10px;
}

.texto .botao{
    width: 100%;
    height: 80px;
    margin-top: 20px; 
    background-color: #101010;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    color: #ffffff;
    font-size: 2.5rem;

    &:hover{
        background-color: #504f4fd2; 
        transition:0.7s;
    }

}


`