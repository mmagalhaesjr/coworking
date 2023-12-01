import styled from 'styled-components';


export const StyledIconesCadaEspacos = styled.section`
width: 100%;
background-color: #F4F3F0;
display: flex;
flex-direction: column;
align-items: center;

#container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;  
}

#titulo{
    margin-top: 100px;
    font-size: 40px;
}


#container1{
width: 80%;
max-width: 1300px;
/* min-width: 610px; */
display: flex;
align-items: center;
justify-content: center;
gap: 80px;
flex-wrap: wrap;
margin-top: 5%;


}


.cxImg{
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    justify-content: center;

    
}
.cxImg img{
    width: 4rem;
    height: 4rem;
    
}
.cxImg p{
    margin-top: 20px;
    
}
#container2{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 100px;
    gap: 50px;

}
.box{
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1%;
    flex-wrap: wrap;

    
}
    .cxIcone{
        width: 9rem; 
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .cxIcone img{
    width: 100px;
    height: 100px;
    margin-top: 10px;
    }
    .cxIcone p{
        margin-top: 20px;
    }

    h2{
        font-size: 40px;
       

    }

    #texto{
       width: 95%;
    }
    #texto p{
        font-size: 25px;
        margin-top: 50px;
       
    }

    #texto button{
        margin-top: 50px;
        margin-bottom: 50px;
        width: 30%;
        min-width: 200px;
        max-width:300px ;
        height: 60px;
        background-color: #000000;
        color: #F4F3F0;
        font-size: 20px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        &:hover{
        background-color: #504f4fd2;
        color:#000000; 
        transition:0.7s;
    }

        
    }

    @media (max-width:1300px){
        #container2{
            width: 100%;
            
        }
        .box{
            width: 100%;
        }
        
    }
    @media (max-width:620px){

       #container{
       width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       }

        #titulo{
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 1.5rem;
        }

        #container1{
            gap: 10%;
        }
        .cxIcone{
        width: 40%; 
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;

    }
    .cxImg{
        width: 100px;
    }
    .cxImg img{
        width: 50px;
        height: 50px;
    }
}

`