import styled from "styled-components";
export const CounterStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 40%;
padding: 2px 6px;
margin-top: 10px;

.count-box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    .btn-counter{
    width: 35px;
    height: 35px;
    background-color: #fff;
    border: 1px solid #E94560;
    padding: 10px;
    margin: 5px 15px;
    border-radius:5px;
    color:#E94560;
    font-weight: bolder;
    &:hover{
        background-color:#E94560;
        color: white;
    }
    }
    p{
        font-weight: bold;
        text-align: center;

    }
}

.stock-info{
    font-size: 12px;
    font-weight: 400;
    color: #666; 
    margin-top: 0;
}
.btn-addCart{
    margin-top: 20px;
  padding: 10px;
  border: 1px solid #38a3a5;
  border-radius:10px;
  background-color:#38a3a5;
  font-weight:400;
  color: #fff;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover{
    background-color:#2a9d8f;
    border: 1px solid #2a9d8f;
  }

}

`;