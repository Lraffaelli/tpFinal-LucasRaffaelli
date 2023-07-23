import styled from "styled-components";

export const ItemStyled= styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:25%;
margin: 0 5px;
border-radius:15px;
padding:15px ;
margin-bottom: 30px;
background-color: #fff;
transition:all 300ms ease-in-out;

&:hover{
    transform: scale(1.02);
    box-shadow: 0px 2px 8px rgba(0,0,0,0.3);
}

.img-container{
    display: flex;
    justify-content: center;
    height:50%;
    width:90%;
    padding-bottom:15px;
    border-bottom: 1px solid #ccc;
    .imagen{
        height: 150px;
        
    }
}

.item-info{
    display:flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
    

    h2{
    text-align: center;   
    width: 90%;
    font-size: 16px;
    font-weight:600;
    color:#4c5c68;
    margin-bottom:20px;
    }

    .stock-d{
        font-size: 12px;
        font-weight: 400;
        color: #666;
        }

.item-body{
    display: flex;
    justify-content:space-around;
    align-items:flex-end;
    width: 100%;
    margin-bottom:20px;
    
    sup{
        position: relative;
        font-size:20px;
        top:6px;
        }
    span{
        font-size: 32px;
        color:#1d3557 ;
        font-weight: 900;
        padding: 0 20px;
        }
    
    .more{
    width: 100px;
    margin: 15px 0;
    padding: 10px;
    border:none;
    border-radius: 5px;
    background-color:#c2c2c2;
    color:#FFFFFF;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    

    &:hover{
        background-color:#b2b2b2;
        }
    }

    
}
}




`;