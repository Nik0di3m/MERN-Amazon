import React from 'react'
import { Container, FormContainer, ImageContainer, ImageLogin, LoginButton, UserNameInput } from './LoginElements';

const Login = () => {
    return (
        <Container>
            <ImageContainer>
                <ImageLogin src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" />
            </ImageContainer>
            <FormContainer>
                <form>
                    <UserNameInput />
                    <UserNameInput />
                </form>
                <LoginButton>Sign Im</LoginButton>
            </FormContainer>
        </Container>
    )
}

export default Login;
