import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip' 

interface Container {
    isFocused: boolean;
    isFilled: boolean;
    isErroed: boolean;
}

export const Container = styled.div<Container>`
    background: #232129;
    border-radius: 10px;
    
    padding: 16px;
    width: 100%;

    color: #666360;
    border: 2px solid #232129;

    display: flex;
    align-items: center;
    
    & + div{
        margin-top: 8px;
    }

    ${props => props.isErroed && css `
        color: #c63030;
        border-color: #c63030;
    `}

    ${ props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${props => props.isFilled && css `
        color: #ff9000;
    `}


    input{
        background: transparent;
        flex: 1;
        border: 0;
        color: #f4ede8;
        
        &::placeholder{
            color: #666360;
        }
        & + input {
            margin-top: 8px;
        }

    }
    svg {
            margin-right: 16px;
        }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 10px;

    svg{
        margin: 0;
    }
    
    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`