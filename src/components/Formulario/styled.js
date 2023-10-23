import styled from 'styled-components';

export const StyledFormulario = styled.section`
display: flex;
justify-content: center;
align-items: center;
height:80vh;
background-color: #F4F3F0;
margin: auto;
background-color: blue;
padding: 20px;


form{
    width:50%; 
    height:80%;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.9);
    background-color: #000000;
    /* border-radius: 15px; */

}
#titulos{
    width: 50%;
    display: flex;
    flex-direction: column;
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
        border: none;
    &:hover{
        background-color: #504f4fd2;
        color:#926F5D; 
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
        margin-bottom: 20px;
    }
    form #titulos{
        margin-top: 300px; 
    }
    #titulos h1{
    font-size:35px;
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

