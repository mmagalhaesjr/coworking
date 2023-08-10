import styled from 'styled-components';

export const StyledEspaços = styled.div`

    display: flex;
    justify-content:center;
    margin-left:5px;
    margin-top:100px;

    align-items: center;
    

.espaçoDiv{
    @font-face {
        font-family:aktiv ;
        src: url('AktivGrotesk-MediumItalic') format('opentype'), url('AktivGrotesk-MediumItalic') format('truetype');
        font-weight:normal;
        font-style: normal;
    }
    font-family: aktiv;
    width: 400px;
    height:500px;
    border-radius: 15px;
    background-color: #425F50;
    color:#AD9A70;

    margin-left: 10px;
    margin-right: 10px;

    overflow: hidden; 
}

.espaço{
    width: 400px;
    height: 300px;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
  z-index: 5;
}

}

h2{
    font-size: 30px;
    text-align: center;
    margin-top: 15px;
}
p{
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
}

`