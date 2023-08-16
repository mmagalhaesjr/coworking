import styled from 'styled-components';

export const StyledCorpo = styled.div`

img{
    width: 100%;
    height: 100vh;
    background-color: #171B1E;
    margin-bottom:-10px;

    @media(max-width:700px){
        width: 100%;
        height: 400px;  
    }
    @media(max-width:540px){
        width: 100%;
        height: 300px;  
    }
}


#titulos{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
}
p{font-size:20px;
}





`
