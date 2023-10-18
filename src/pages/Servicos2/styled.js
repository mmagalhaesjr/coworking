import styled from 'styled-components';




export const StyledServicos2 = styled.section`
width: 100%;
height:100vh;
display: flex;
text-align: center;
align-items: center;
background-color: #F4F3F0 ;

#containerTxt{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 100px;
}

#titulo{
    width: 80%;
    font-size: 60px;
    margin-top: 60px;
}

ul{
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.5;

}
#containerImg{
    background-color: #101010;
    height: 100%;
    width: 40%;
}
img{
    position: absolute;
    width: 40%;
    left: 55%;

}


`