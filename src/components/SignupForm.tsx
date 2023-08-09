import styled from 'styled-components';

import useSignupFormStore from '../hooks/useSignupFormStore';

import { TEST_ID_SIGNUP } from '../constants/testId';

import TextInputBox from './ui/TextInputBox';
import Button from './ui/Button';
import ErrorMessage from './ui/ErrorMessage';

export default function SignupForm() {
  const store = useSignupFormStore();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.changeEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.changePassword(event.target.value);
  };

  const handleSubmitSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    store.signup();
  };

  return (
    <Container>
      <form onSubmit={handleSubmitSignup}>
        <TextInputBox
          type="text"
          label="이메일"
          value={store.email}
          testId={TEST_ID_SIGNUP.EMAIL}
          onChange={handleChangeEmail}
        />
        <TextInputBox
          type="password"
          label="비밀번호"
          value={store.password}
          testId={TEST_ID_SIGNUP.PASSWORD}
          onChange={handleChangePassword}
        />

        <Button
          type="submit"
          data-testid={TEST_ID_SIGNUP.SUBMIT_BUTTON}
          disabled={!store.valid}
        >
          회원가입
        </Button>
      </form>

      {store.errorMessage && (
        <ErrorMessage message={store.errorMessage} />
      )}
    </Container>
  );
}

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
