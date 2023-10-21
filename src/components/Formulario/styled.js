import styled from 'styled-components';

export const StyledFormulario = styled.section`
display: flex;
justify-content: center;
align-items: center;
height:80vh;
background-color: #F4F3F0;
gap: 100px;


form{
    width:50%; 
    height:70%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.9);
    background-color: #000000;
    /* border-radius: 15px; */
    margin-top: -100px;

    position: relative;
    left: -100px;

   
   
}
#titulos{
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    top:-150px;
    text-align: center;
    color:#000000;
    font-weight:100;  

    line-height: 1.5;
}

#titulos h1{
    font-size:50px;
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
    color: #398462;
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
    color: #398462;
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


button{
        background-color: #2A2A2A;
        color:#eae9e9;
        width: 35%;
        height: 10%;
        font-size: 15px;
        cursor: pointer;
        border-radius: 10px;
        position:relative;
        top:20px;
    &:hover{
        border: 2px solid #eae9e9;
        color:#398462;
        transition:0.7s;

    }
}

@media(max-width:940px ){
    
    
    h1{
        font-size: 60px;
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
        width: 90%;
        margin-bottom: 20px;
    }
    form #titulos{
        margin-top: 300px; 
    }
    
}

@media(max-width:600px ){
   form{ 
    height: 70%;
   }
   #titulos{
        margin-top: 270px;
   }
}
`

