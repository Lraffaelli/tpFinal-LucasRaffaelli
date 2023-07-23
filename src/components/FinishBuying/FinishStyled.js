import styled from "styled-components";

export const FinishStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .btn {
    
    padding: 10px;
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .buy {
    background-color: #E94560;
    &:hover {
        background-color: #e92949;
    }
  }

  .go-on {
    background-color: #38a3a5;
    &:hover {
        background-color:#2a9d8f;
    }
  }
`;
