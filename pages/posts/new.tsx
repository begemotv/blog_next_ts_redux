import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/button/button';
import Layout from '../../components/layout/layout';
import TextArea from '../../components/text-area/text-area';
import TextInput from '../../components/text-input/text-input';
import { AppRoute } from '../../const';
import { uploadPostThunk } from '../../store/api-actions';
import { useRouter } from 'next/router';

interface NewPostProps {
    uploadPost: (title: string, body: string) => void;
}

const NewPost: React.FC<NewPostProps> = ({ uploadPost }) => {
    const router = useRouter();
    const [body, setBody] = useState(``);
    const [title, setTitle] = useState(``);

    const handleBodyInput = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(evt.target.value);
    };

    const handleTitleInput = (evt: ChangeEvent<HTMLInputElement>) => {
        setTitle(evt.target.value);
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        uploadPost(title, body);
        router.push(AppRoute.HOME);
    };

    return (
        <Layout pageTitle="New Post" isNewPost={true}>
            <StyledFormContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <TextInput onChange={handleTitleInput} value={title} />
                    <TextArea onChange={handleBodyInput} value={body} />
                    <Button text={'Post'} />
                </StyledForm>
            </StyledFormContainer>
        </Layout>
    );
};

const StyledFormContainer = styled.div`
    width: 50%;
    padding: 30px;
    margin: 0 auto;
    border: 1px solid #eeeeee;
    background-color: white;
`;

const StyledForm = styled.form`
    text-align: center;
    border-radius: 10px;
    padding: 15px;
    box-shadow: -1px 4px 10px 0px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
`;

const mapDispatchToProps = (dispatch) => ({
    uploadPost(title: string, body: string) {
        dispatch(uploadPostThunk(title, body));
    },
});

export default connect(null, mapDispatchToProps)(NewPost);
