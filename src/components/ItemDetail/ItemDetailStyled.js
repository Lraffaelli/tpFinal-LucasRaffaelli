import styled from "styled-components";

export const ItemDetailStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 900px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  .img-detail {
    width: 40%;
    border-right: 1px solid #ccc;
    .image {
      width: 80%;
    }
  }

  .info-detail {
    width: 400px;
    h2 {
      color: #666;
    }

    .price-detail {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      span {
        color: #1d3557;
        font-size: 50px;
        font-weight: 900;
        padding-top: 15px;
        sup {
          position: relative;
          font-size: 25px;
          top: 4px;
        }
      }
    }
  }
`;
