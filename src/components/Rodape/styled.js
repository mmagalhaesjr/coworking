import styled from 'styled-components';

export const StyledRodape = styled.footer`
background-color:#2A2A2A;
background-color: #101010;
height: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #ffffff;
padding-left: 5%;
text-align: center;


@media(max-width:940px){
    height:1000px;
}
@media(max-width:600px){
    padding-top: 70px;
    height: 800px;
}
#container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

   
    bottom:0;
    @media(max-width:940px){
    flex-direction:column;
    height: fit-content;

}
    .container{
        width: 400px;
        height: 200px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
        @media(max-width:600px){
            height: fit-content;
            margin-bottom: 50px;

            #logo{
            height: fit-content;
            } 
}
    }
    .contInterno{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        gap:30px;

        font-size: 30px;
        margin-top: 30px;
        color:#ffffff;
        cursor: pointer;  
}

.containerRedesS{
    width: 100%;
        height: 100px;
        display: flex;
       
        font-size: 35px;
        margin-top: 30px;

        justify-content: center;
        align-items: center;
        
        gap:30px;
        cursor: pointer;  
}



ul li a{
color: #ffffff;



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

h3{
margin-top: -30px;
font-size: 30px;
color: #ffffff;


}

p{
font-size: 16px;

}

#endereço{
gap:3px;
text-align: center;
flex-direction: column;
font-size: 15px;

}

#contato{
display: flex;
text-align: start;
flex-direction: column;
gap:10px;
font-size: 15px;

@media(max-width:600px){
margin-top: 0;

           
}

}

img{
    width: 250px;
    height: 50px;
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

#endereco li a #endereço{
    &:hover{
    color:#926F5D; 
    transition:0.3s;
    }
}
}
   

`