import styled from "styled-components";

export const Container = styled.div`
    margin-top:32px;
`;

export const Header = styled.header`
    display:flex;
    align-items:color-interpolation-filters;
    justify-content: space-between;

    strong {
        color:#222;
        font-size: 24px;
    }

    a{
        color: #5061FC;
        text-decoration:none;
        font-weight: bold;
        border: 2px solid #5061FC;
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.2s ease-in;

        &:hover{
            background: #5061FC;
            color: #fff;
        }
    }


`;
