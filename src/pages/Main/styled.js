import styled from 'styled-components';
import { color, backOut } from 'framer-motion';


export const StyledTelaInicial = styled.section`


p{font-size:20px;
}

a{
    text-decoration: none;
}

#whattsapp{
    z-index: 8;
    position: fixed;
    font-size: 50px;
    right: 25px;
    top:670px;
    cursor: pointer;
    color: #15da0e;
    text-decoration: none;
}
#whattsapp:hover{
    color: #398462;
    transition:0.3s;
}
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

    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;

    background-attachment: fixed;

    
    @media(max-width:1120px){
    width: 100%;
    height: 500px;
    }

    @media(max-width:940px){
        #whattsapp{
            display: none;
        }
    }
    @media(max-width:700px){
        width: 100%;
        height: 400px;
        
    }

    @media(max-width:540px){
        width: 100%;
        height: 300px;  
        
    }
}

`