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

export const ListContainer = styled.div`

    header{
        margin-top:24px;
    margin-bottom:8px;
        button{
        background: transparent;
        border:none;
        display: flex;
        align-items:center;
        }

        span{
            margin-right: 18px;
            font-weight: bold;
            color:#5061FC;
        }
    }
`;

export const Card = styled.div`
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding:16px;
    border-radius: 4px;
    display:flex;
    align-items: center;
    justify-content: space-between;

    & + & {
        margin-top:16px;
    }

    .info{
        .contact-name{
            display:flex;
            align-items:center;

            small {
                background:#E0E3FF;
                color:#5061FC;
                font-weight: bold;
                text-transform:uppercase;
                padding:4px;
                border-radius: 4px;
                margin-left: 8px;
            }
        }

        span {
            display:block;
            font-size:14px;
            color: #BCBCBC;
        }
    }

    .actions{
        display:flex;
        align-items:color-interpolation-filters;
        button{
            background:transparent;
            border:none;
            margin-left:8px;
        }
    }
`;


