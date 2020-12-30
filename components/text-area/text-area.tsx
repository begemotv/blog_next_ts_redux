import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface TextAreaProps {
    onChange: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
    isComment?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ onChange, value, isComment }) => {
    return (
        <div>
            <StyledTextArea
                onChange={(evt) => onChange(evt)}
                value={value}
                name="body"
                id="body"
                placeholder={isComment ? `Please write here (5-280 symbols)` : `Please write here`}
            />
        </div>
    );
};

const StyledTextArea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #777777;
    border-radius: 8px;
    transition: all 0.3s ease;
    outline: none;
    resize: none;
    min-height: 150px;
    font-family: Roboto, sans-serif;
    :hover {
        border-color: lightgray;
    }
`;

export default TextArea;
