import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
    position: relative;
    padding: 5px 7px;
    margin-top: 10px;
    min-width: 140px;
    font-size: monospace;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    background-color: #e5195f;
    :hover {
        background-color: #f28caf;
        transition: background-color 200ms linear;
    }
`;

export default Button;
