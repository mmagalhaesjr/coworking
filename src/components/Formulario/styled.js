import styled from 'styled-components';

export const StyledFormulario = styled.section`



form{
    width:600px; 
    max-width: 700px;
    height:70%;
    min-height: 400px;
    max-height: 450px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #101010;
    
    /* border-radius: 15px; */
}
input{
    margin-bottom: 30px;
}
.inputBox{
    position: relative;
    width: 80%;    
    background-color: #000000;
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
  
    color:#926F5D; 
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
    padding: 1%;
}
.imputMesnsagem:focus ~ .labelInput,
.imputMesnsagem:valid ~ .labelInput{
    top: -10px;
    font-size: 12px;
    color:#926F5D; 
}

.labelInput{
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none;
    transition: .5s;
    background-color: #000000;
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

button{
        background-color: #eae9e9;
        width: 20%;
        height: 40px;
        font-size: 90%;
        font-weight: 700;
        cursor: pointer;
        border-radius: 40px;
        position:relative;
        top:20px;
        border: none;
    &:hover{
        background-color: #504f4fd2;
        color:#926F5D; 
        transition:0.7s;
    }
}

@media(max-width:940px ){
    height: fit-content;
    #titulos{
        width: 90%;
        margin-right: 5%;
    }
    #titulos h1{
    font-size:35px;
}
   
    p{
        font-size:15px;
        
    }
    button{
        top:5px;
        width:40%;
    }
    form{
        height: 50%;
        margin-bottom: 20px;
    }
   

}

@media(max-width:600px ){
    flex-direction: column;
    height: fit-content;
    #titulos h1{
    font-size:30px;
}
   form{ 
    height: 400px;
    width: 80%;
   }
   #titulos{
        margin-bottom: 2rem;
   }
}
`

