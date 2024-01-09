import styled from 'styled-components';


export const StyledBlogPagina = styled.main`
width: 100%;

display: flex;
align-items: center;
text-align: center;
flex-direction: column;

#whattsapp{
    z-index: 8;
    position: fixed;
    font-size: 3rem;
    right: 25px;
    top:90%;
    cursor: pointer;
    color: #15da0e;
    text-decoration: none;
}
#whattsapp:hover{
    color: #398462;
    transition:0.3s;
}

#titulo{
margin-top: 7%;
width: 90%;
}
#titulo h1{
font-size: 2rem;
font-weight: 700;
}

#container{
    width: 95%;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap; 
    gap: 5%; 
}

.swiper {
  width: 100%;
}
.swiper-wrapper{
    width: 100%;
}
.swiper-slide{
  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap; 
    gap: 3% 5%;
}

.mySwiper  {

  }

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #643802;
}

@media(max-width:500px) {
    #titulo{
        margin-top: 20%;
    }
}

`