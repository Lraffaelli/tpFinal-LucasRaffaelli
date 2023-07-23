import styled from "styled-components";

export const FooterStyled = styled.div`
display: flex;
height: 60px;
background: linear-gradient(180deg, rgba(75,92,157,1) 0%, rgba(65,89,177,1) 50%, rgba(75,92,157,1) 100%);

justify-content: center;
.brand {
    display: flex;
    justify-content: center;
    align-items: center;
    .img{
        width: 40px;
        margin-right:2px;
        img{
            width: 40px;
            
        }
    }
    .createBy{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h4{
            color: #fff;
            font-size: 18px;
            margin: 0;
        }
        p{
            color: #fff;
            font-size: 14px;
            margin: 0;
        }
    }
    
}
`;