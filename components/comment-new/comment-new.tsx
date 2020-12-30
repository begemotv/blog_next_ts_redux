import React, { ChangeEvent, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../button/button';
import TextArea from '../text-area/text-area';
import { uploadCommentThunk } from '../../store/api-actions';
import { useRouter } from 'next/router';
import { AppRoute } from '../../const';

interface CommentNewProps {
    postId: number;
    uploadComment: (postId: number, body: string) => void;
}

const CommentNew: React.FC<CommentNewProps> = ({ postId, uploadComment }) => {
    const router = useRouter();
    const [comment, setComment] = useState(``);

    const handleInput = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(evt.target.value);
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        uploadComment(postId, comment);
        setComment(``);
        router.push(`${AppRoute.POSTS}${postId}`);
    };

    return (
        <CommentNewContainer onSubmit={handleSubmit}>
            <TextArea onChange={handleInput} value={comment} />
            <Button text={`Comment`} />
        </CommentNewContainer>
    );
};

const CommentNewContainer = styled.form`
    padding: 7px;
    margin: 0 auto;
    margin-top: 25px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const mapDispatchToProps = (dispatch) => ({
    uploadComment(postId: number, body: string) {
        dispatch(uploadCommentThunk(postId, body));
    },
});

export default connect(null, mapDispatchToProps)(CommentNew);
