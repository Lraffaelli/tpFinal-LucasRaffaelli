import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleNavLink = styled(NavLink)`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    padding: 5px 15px;
    text-decoration: none;
    cursor: pointer;
    transition:all 300ms;
    &:hover{
        
        border-bottom: 1px solid #fff;
        

    }

`;