import styled from "styled-components";

export const CartItemStyled = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color:#fff;
border: 1px solid #ccc;
border-radius:5px;
height: 100px;
width: 100%;
margin-bottom:20px;
padding: 10px;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
border:none;

.btn-delete {
      padding: 8px;
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

.img{
    display: flex;
    justify-content: center;
    align-items: center;
    height:100%;
    img{
        height:70%;
      }
}
h3{
  font-size:16px;
  width:20%;
}
`;