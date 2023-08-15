import styled from 'styled-components';

export const StyledFormulario = styled.section`
display: flex;
flex-direction: column;
height: 100vh;
background-color:#171B1E;

form{
    width:80%; 
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    color: white;
    top: 10%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.6);
    padding: 15px;
    border-radius: 15px;
    
}
#titulos{
    display: flex;
    flex-direction: column;
    position: relative;
    top:-150px;
    margin-bottom: 0px;   
    text-align: center;
    color:#ffffff;
}

input{
    margin-bottom: 30px;
}
.inputBox{
    position: relative;
    width: 80%;    
     
}
.inputUser{
    background: none;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
    font-size: 20px;
    width: 100%;
    letter-spacing: 2px;
}
.inputUser:focus ~ .labelInput,
.inputUser:valid ~ .labelInput{
    top: -20px;
    font-size: 12px;
    color: #307A69;
}

.imputMesnsagem{
    color: #000000;
    font-size: 15px;
    width: 100%;
    height: 100px;
    letter-spacing: 2px;
    border-radius: 5px;
    margin-top: 20px;
    border:none;
    outline: none;
}
.imputMesnsagem:focus ~ .labelInput,
.imputMesnsagem:valid ~ .labelInput{
    top: -10px;
    font-size: 12px;
    color: #307A69;
}

.labelInput{
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none;
    transition: .5s;
} 
#submit{
    background-color: #2A2A2A;
    border: none;
    padding: 15px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 10px;
    width: 50%;
}
#submit:hover{
    border: 2px solid #FFF509;
}

button{
        background-color: #2A2A2A;
        color: #ffffff;
        width: 300px;
        height: 60px;
        font-size: 15px;
        cursor: pointer;
        border-radius: 10px;
        position:relative;
        top:20px;
    &:hover{
        border: 2px solid #ffffff;
        color:#307A69;
        transition:0.7s;

    }
}
h1{
    font-size: 100px;
}

@media(max-width:940px ){
    #titulos{
        left: 50%;
        transform: translate(-50%,-50%);
        margin-top: 300px;
    }
    h1{
        font-size: 60px;
    }
    p{
        font-size:15px;
        
    }
    button{
        top:5px;
    }
}
`

