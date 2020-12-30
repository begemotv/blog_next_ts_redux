import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface TextInputProps {
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const TextInput: React.FC<TextInputProps> = ({ onChange, value }) => {
    return (
        <div>
            <StyledTextInput
                onChange={onChange}
                value={value}
                name="title"
                id="title"
                placeholder={`Write your title here (5-100 symbols)`}
            />
        </div>
    );
};

const StyledTextInput = styled.input`
    width: 50%;
    padding: 7px;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 1px solid #777777;
    border-radius: 8px;
    outline: none;
    resize: none;
    font-family: Roboto, sans-serif;
`;

export default TextInput;
