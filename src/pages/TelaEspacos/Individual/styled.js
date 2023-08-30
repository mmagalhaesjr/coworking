import styled from 'styled-components';


export const StyledEspacos = styled.section`

img{
    width: 50%;
    height: 90%;
    /* box-shadow: 0 0 10px rgba(173,154,112,1) ; */
    border-radius: 10px;
    
}
.s{
display: flex;
justify-content: space-around;
align-items: center;
text-overflow:hidden;



}

#s1{
    
    background: linear-gradient(90deg, rgba(113,85,61,1) 50%, rgba(255,255,255,1) 100%);
    width: 100%;
    height: 50vh;
    flex-direction: row-reverse;
}
#s2{
    background: rgb(173,154,112);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(173,154,112,1) 50%);
    
    width: 100%;
    height: 50vh;
    flex-direction: row;
}
#s3{
    background: rgb(113,85,61);
    background: linear-gradient(90deg, rgba(113,85,61,1) 50%, rgba(255,255,255,1) 100%);
    width: 100%;
    height: 50vh;
    flex-direction: row-reverse;
}
.texto{
    width: 40%;
    font-weight: 100;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    text-overflow:hidden;
    
    
   
}
.texto h1{
    font-weight: 400;
    margin-bottom: 30px;
    font-size: 30px;
    
    
}
.texto p{
    
    font-size: 25px;
    
  
}
.icone{
    font-size: 30px;
    position: absolute;
    left: 40px;
    top: 30px;
    color: #ffffff;
    cursor: pointer;
}
@media(max-width:1028px){
.texto{
    width: 100%;
    
}
}
@media(max-width:1010px){
    img{
        width: 90%;
        height: 50%;
        margin-top:10px;
    }
    .s{
        align-items: center;
        width: 100%;
        height: 800px;
    }
    .texto{
        color: #ffffff;
        text-align: center;
    }

    .texto p{
        font-size: 15px;
    }
    
    .icone{
        display: none;
    }
   
}

@media(max-width:630px){
  
   
    #s1{ 
        background: rgb(113,85,61);
        background: linear-gradient(0deg, rgba(113,85,61,1) 34%, rgba(255,255,255,1) 100%);

        flex-direction: column;
    }
    #s2{ 
        background: rgb(173,154,112);
        background: linear-gradient(0deg, rgb(173,154,112) 34%, rgba(255,255,255,1) 100%);
        flex-direction: column;
    }
    #s3{ 
        background: rgb(113,85,61);
        background: linear-gradient(0deg, rgba(113,85,61,1) 34%, rgba(255,255,255,1) 100%);
        flex-direction: column;
    }

}

@media(max-width:380px){
img{
    height: 150px;
}
}
`