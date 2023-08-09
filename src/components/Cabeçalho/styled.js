import styled from 'styled-components';





export const StyledprimeiraFaixa = styled.div`
width:100%;
height: 60px;
background-color: #111111;
position: fixed;





`

export const StyledCabeçalho = styled.div`
background: rgba(0, 0, 0, 0.7);
height:140px;
width:100%;
position: fixed;
z-index: 1;
margin-top:60px ;

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
button{
        background-color: #2A2A2A;
        color: #ffffff;
        width: 150px;
        height: 60px;
        font-size: 15px;
        cursor: pointer;
        border-radius: 10px;
        position:relative;
        top:20px;

       
        

    &:hover{
        border: 2px solid #ffffff;
        color:#307A69;

    }


}

`
