import styled from 'styled-components';


export const StyledTelaInicial = styled.section`
 @media(max-width:940px){
        #whattsapp{
            display: none;
        }
    }

#salao{
    width: 100%;
    height: 100vh;
    background-color: #171B1E;
    margin-bottom:-10px;

   

    @media(max-width:1120px){
    width: 100%;
    height: 500px;
    }

    @media(max-width:700px){
        width: 100%;
        height: 400px;

        #whattsapp{
            display: none;
        }
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

a{
    color: #000000; 
    text-decoration: none;
}

#whattsapp{
    z-index: 1;
    position: fixed;
    font-size: 80px;
    right: 25px;
    top:500px;
    cursor: pointer;
    color: #000000;
    text-decoration: none;
}
#whattsapp:hover{
    color: #307a69;
    transition:0.3s;
}

`