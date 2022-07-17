import styled from "styled-components";

export default styled.button`
    height:52px;
    padding:0 16px;
    border:none;
    background:#5061FC;
    font-size:16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    color:#fff;
    border-radius: 4px;
    transition:background 0.2s ease-in;

    &:hover{
        background: #6674F4;

    }

    &:active{
        background: #3346F0;
    }
    &[disabled]{
        background:#ccc;
        cursor:default;
    }
`;
