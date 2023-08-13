import { useState } from 'react';

import styled from 'styled-components';

import useSignupFormStore from '../hooks/useSignupFormStore';

import TEST_ID from '../constants/testId';

import InputBox from './ui/InputBox';
import Button from './ui/Button';
import ErrorMessage from './ui/ErrorMessage';

export default function SignupForm() {
  const store = useSignupFormStore();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleBlurEmail = () => {
    if (store.validEmail) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleBlurPassword = () => {
    if (store.validPassword) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.changeEmail(event.target.value);

    if (store.validEmail) {
      setEmailError(false);
    }
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.changePassword(event.target.value);

    if (store.validPassword) {
      setPasswordError(false);
    }
  };

  const handleSubmitSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    store.signup();
  };

  return (
    <Container>
      <form onSubmit={handleSubmitSignup}>
        <div>
          <InputBox
            type="text"
            label="이메일"
            value={store.email}
            testId={TEST_ID.SIGNUP.EMAIL}
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
          />
          {emailError && <span>* 이메일 형식으로 작성</span>}
        </div>

        <div>
          <InputBox
            type="password"
            label="비밀번호"
            value={store.password}
            testId={TEST_ID.SIGNUP.PASSWORD}
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
          />
          {passwordError && <span>* 비밀번호 8자 이상 작성</span>}
        </div>

        <Button
          type="submit"
          data-testid={TEST_ID.SIGNUP.SUBMIT_BUTTON}
          name={TEST_ID.SIGNUP.SUBMIT_BUTTON}
          disabled={!store.validEmail || !store.validPassword}
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
    
    div{
      > span{
        display: inline-block;
        color: #dc2e2e;
        font-size: 1.2rem;
        padding-left: 8rem;
        padding-bottom: .4rem;
      }
    }

    button {
      margin-top: 4rem;
    }
  }
`;
