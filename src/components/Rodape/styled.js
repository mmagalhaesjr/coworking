import styled from 'styled-components';

export const StyledRodape = styled.footer`
background-color: #101010;
height: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #ffffff;
text-align: center;


#container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    bottom:0;

}
h3{
    margin-top: -30px;
    
    font-size: 30px;
    color: #ffffff;

}
.cx{
    margin-top: 5%;
    width:20%;
    min-width: 200px;
    height: 150px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15%;

    
}
 
.cxContato{
    height: 100px;
    margin-top: 10px;
    display: flex;
    align-items: left;
    flex-direction: column;
    
    gap:10px;
    font-size: 15px;

   
}

.cxRedes{
    width: 100%;
    height: 100px;
  
    display: flex; 
    justify-content: center;
    gap:30px;
    font-size: 30px;
    cursor: pointer;  
    margin-top: 10px;
    
}
.cxRedes li a{
   
    color: inherit;
    cursor: pointer;
&:hover{
    color:#926F5D; 
    transition:0.3s;
    }
}
ul{
    justify-content:center;
    text-align: center;
    font-size: 15px; 
    list-style: none;
}

.cxEndereco{
    height: 100px;
    margin-top: 10px;

    gap:3px;
    text-align: center;
    flex-direction: column;
    font-size: 15px;
}
p{
    font-size: 16px;
}
.cxEndereco  {
    color: #ffffff;
    cursor: pointer;
    &:hover{
    color:#926F5D; 
    transition:0.3s;
    }
}

img{
    width: 250px;
    height: 60px;
    background:none;
}
h6{
    margin-bottom: 10px;
    width: 80%;
    text-align:center;
}
.icones{
    display: flex;
    gap:5px;   
}


@media (max-width:1050px) {
    height: 100%;
    #container{
        display: flex;
        flex-direction: column;
    }
}

@media (max-width:600px){
height: 900px;
}


`