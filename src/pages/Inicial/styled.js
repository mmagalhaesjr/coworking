import styled from 'styled-components';


export const StyledInicial = styled.section`
width: 100%;
height: 100vh;
overflow: hidden;
position: relative;
background-image: url(src/assets/foto-capa.jpg);
background-repeat: no-repeat;
background-size: cover;

#titulo{
    position: absolute;
    width: 100%;
    bottom: 5%;
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
    top: 80%;
    left: 90%;
    display: flex;
    gap: 10px;
    font-size: 45px;
    color: #F4F3F0;
    cursor: pointer;   
}

@media (max-width:800px){
	#titulo h1{
    font-size: 50px;
}

@media (max-width:500px){
	#titulo h1{
    font-size: 30px;
}
}
`