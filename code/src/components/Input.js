import styled, {css} from 'styled-components';

export default styled.input`
    width:100%;
    background:#fff;
    height:52px;
    box-shadow:0px 4px 10px rgba(0,0,0,0.04);
    border: 2px solid #fff;
    border-radius:4px;
    outline:none;
    padding:0 16px;
    font-size:16px;
    transition: border-color 0.2s ease-in;
    appearance: none;


    &:focus{
        border-color:#5061FC;
    }

    ${(error) => error  && css `
        color: #FC5050;
        border-color: #FC5050 !important;
    `};
`;
