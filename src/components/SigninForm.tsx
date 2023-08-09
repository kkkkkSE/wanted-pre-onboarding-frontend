import { useEffect } from 'react';

import { styled } from 'styled-components';

import useSigninFormStore from '../hooks/useSigninFormStore';

import TEST_ID from '../constants/testId';

import TextInputBox from './ui/TextInputBox';
import Button from './ui/Button';
import ErrorMessage from './ui/ErrorMessage';

function SigninForm() {
  const store = useSigninFormStore();

  useEffect(() => {
    if (store.accessToken) {
      localStorage.setItem('accessToken', store.accessToken);
    }
  }, [store.accessToken]);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.changeEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.changePassword(event.target.value);
  };

  const handleSubmitSignin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    store.signin();
  };

  return (
    <Container>
      <form onSubmit={handleSubmitSignin}>
        <TextInputBox
          type="text"
          label="이메일"
          value={store.email}
          testId={TEST_ID.SIGNIN.EMAIL}
          onChange={handleChangeEmail}
        />
        <TextInputBox
          type="password"
          label="비밀번호"
          value={store.password}
          testId={TEST_ID.SIGNIN.PASSWORD}
          onChange={handleChangePassword}
        />

        <Button
          type="submit"
          data-testid={TEST_ID.SIGNIN.SUBMIT_BUTTON}
          disabled={!store.valid}
        >
          로그인
        </Button>
      </form>

      {store.errorMessage && (
        <ErrorMessage message={store.errorMessage} />
      )}
    </Container>
  );
}

export default SigninForm;

const Container = styled.div`
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button {
      margin-top: 4rem;
    }
  }
`;
