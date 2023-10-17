import styled from 'styled-components';


export const StyledInicial = styled.section`
width: 100%;
height: 100vh;
overflow: hidden;

background-image: url(src/assets/foto-capa.jpg);
background-repeat: no-repeat;
background-size: cover;

#titulo{
    position: relative;
    width: 100%;
    top: 550px;
    border-bottom: 1px solid #ffffff;
}
#titulo h1{
    position: relative;
    left: 20px;
    font-size: 80px;
    color: #F4F3F0;
    
}

#setas{
    position: relative;
    top: 580px;
    left: 90%;
    display: flex;
    font-size: 60px;
    color: #F4F3F0;
    
}

`