import styled from "styled-components";

export const CartListStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top:50px;
  width: 90%;

  .buy-finish {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self:flex-start;    
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 20px;
    width: 250px;

    .btn-buy {
      padding: 15px;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      border: none;
      margin: 10px 0;
      background-color: #e94560;
      &:hover {
        background-color: #e92949;
      }
    }
    .btn-clear{
      text-decoration: none;      
      font-size: 14px;
      background-color: #3483fa;      
      padding: 10px 25px;
      border-radius: 5px;
      margin: 5px 0;
      color: #fff;
      transition: all 300ms;
      border: none;
      &:hover {
        background-color: #0d49a1;
        color: #fff;
      }
    }

    .span-box {
      display: flex;
      justify-content: center;
      align-self: center;
      padding: 0 0px;
      border-bottom: 1px solid #ccc;
      p {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;
