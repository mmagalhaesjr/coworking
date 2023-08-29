import styled from 'styled-components';


export const StyledEspacos = styled.section`

img{
    width: 700px;
    height: 400px;
}
.s{
display: flex;
justify-content: space-around;
align-items: center;



}

#s1{
    background: rgb(113,85,61);
    background: linear-gradient(90deg, rgba(113,85,61,1) 10%, #ffffff);
    width: 100%;
    height: 50vh;
}
#s2{
    background: rgb(173,154,112);
    background: linear-gradient(90deg, #ffffff, rgba(146,111,93,0.9893207282913166) 100%);
    width: 100%;
    height: 50vh;
}
#s3{
    background: rgb(113,85,61);
    background: linear-gradient(90deg, rgba(113,85,61,1) 10%, #ffffff);
    width: 100%;
    height: 50vh;
}
.texto{
    width: 500px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
   
}
.texto h1{
    margin-bottom: 30px;
    font-size: 30px;
}
.icone{
    font-size: 30px;
    position: relative;
    top: -150px;
    color: #ffffff;
    cursor: pointer;
}



`