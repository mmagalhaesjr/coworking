import styled from 'styled-components';

export const StyledCabeçalho = styled.div`
background-color: #2A2A2A;
height:103px;
width:100%;
position: fixed;
z-index: 1;

display: flex;

section{
height:100px;
width: 70%;

display: flex;
justify-content: space-around;
align-items: flex-end;

position:relative;
left: 150px;

}
p{
    @font-face {
        font-family:aktiv ;
        src: url('AktivGrotesk-MediumItalic') format('opentype'), url('AktivGrotesk-MediumItalic') format('truetype');
        font-weight:normal;
        font-style: normal;
    }
    font-family: aktiv;
    color: #ffffff;
    cursor: pointer;
&:hover{
        color:#307A69; 
    }
}
div{
    display: flex;
    align-items:center;
}

img{
    width:300px;
    height: 60px;
}


`
