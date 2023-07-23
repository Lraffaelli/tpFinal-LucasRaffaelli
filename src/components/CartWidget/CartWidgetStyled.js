import styled from "styled-components";
export const Cart = styled.div`

display: flex;
justify-content: center;
align-items: center;

div{
    display: flex;

    img{
    width: 30px;
    height: 30px;   

    }

    .shop-number{
        display:flex;
        justify-content: center;
        align-items: center;
        height: 10px;
        width: 10px;
        padding:  10px  ;
        background-color: #E94560;
        border-radius:100%;       
        left: -5px;
        bottom: 10px;
        position: relative;

        span{       
        color: #fff;       
        font-size: 14px;
        font-weight: bold;
        
         } 
    }
     
}

`;