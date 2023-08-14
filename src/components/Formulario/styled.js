import styled from 'styled-components';

export const StyledFormulario = styled.div`

color: white;
    position: relative;
    top: 10%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.6);
    padding: 15px;
    border-radius: 15px;
    width: 70%;
    height:500px ;
    display: flex;
    margin-top: 50px;

form{
    width:100%;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`

