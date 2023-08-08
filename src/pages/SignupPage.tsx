import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import useSignupFormStore from '../hooks/useSignupFormStore';

import SignupForm from '../components/SignupForm';
import ROUTES from '../constants/routes';

export default function SignupPage() {
  const navigate = useNavigate();

  const store = useSignupFormStore();

  useEffect(() => {
    store.reset();
  }, []);

  useEffect(() => {
    if (store.done) {
      navigate(ROUTES.SIGNIN);
    }
  }, [store.done]);

  return (
    <Container>
      <h2 data-testid="signup-page">
        회원가입
      </h2>
      <SignupForm />
    </Container>
  );
}

const Container = styled.div`
  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
  }
`;
