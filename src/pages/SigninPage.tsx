import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import useSigninFormStore from '../hooks/useSigninFormStore';

import TEST_ID from '../constants/testId';

import PageTitle from '../components/ui/PageTitle';
import SigninForm from '../components/SigninForm';
import ROUTES from '../constants/routes';

export default function SigninPage() {
  const navigate = useNavigate();

  const store = useSigninFormStore();

  useEffect(() => {
    store.reset();
  }, []);

  const handleClickSignup = () => {
    navigate(ROUTES.SIGNUP);
  };

  useEffect(() => {
    if (store.accessToken) {
      store.reset();

      navigate(ROUTES.TODO);
    }
  }, [store.accessToken]);

  return (
    <Container>
      <PageTitle data-testid={TEST_ID.SIGNIN.TITLE}>
        로그인
      </PageTitle>
      <SigninForm />

      <button
        type="button"
        onClick={handleClickSignup}
      >
        회원가입
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    margin-block: 2rem;
    color: #aaa;
    text-decoration: underline;
  }
`;
