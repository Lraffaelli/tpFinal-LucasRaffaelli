import styled from "styled-components";

export const CheckoutStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .detail-box {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .buy-detail {
      display: flex;
      align-items: center;
      flex-direction: column;
      align-self: flex-start;
      background-color: #fff;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
      border-radius: 8px;
      padding: 20px;
      width: 250px;
    }
    .title{
        font-size: 18px;
        font-weight: bold;
    }
    hr{
        width: 100%;
        color: #000;
        margin: 0;
    }
    .total-pay{
        font-size: 24px;
        
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    width: 50%;

    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      width: 50%;
      label {
        font-size: 16px;
        font-weight: bold;
        color: #284b63;
      }
      input {
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: #edf2f4;
      }
    }
  }
  .order-detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
`;
