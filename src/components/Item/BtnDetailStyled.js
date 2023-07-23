import { Link } from "react-router-dom";
import styled from "styled-components";

export const BtnDetailStyled = styled(Link)`

text-decoration: none;
font-weight: 600;
font-size: 14px;
width:80px;
height:20px;
background-color:#3483FA ;

padding: 10px 25px;
border-radius: 5px;
margin:5px 0;
color: #fff;
transition:all 300ms;
&:hover{
    background-color:#0D49A1;
    color: #fff;
}
`;