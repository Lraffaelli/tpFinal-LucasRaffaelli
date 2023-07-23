import styled from "styled-components";

export const EmptyCartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background-color: #ebebeb;

  .bag-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    width: 50%;

    padding: 15px;
    img {
      width: 30%;
    }
    .btn-discover {
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      background-color: #3483fa;      
      padding: 10px 25px;
      border-radius: 5px;
      margin: 5px 0;
      color: #fff;
      transition: all 300ms;
      &:hover {
        background-color: #0d49a1;
        color: #fff;
      }
    }
  }
`;
