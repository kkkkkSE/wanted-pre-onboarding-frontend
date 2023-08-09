import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import useSignupFormStore from '../hooks/useSignupFormStore';

import ROUTES from '../constants/routes';
import TEST_ID from '../constants/testId';

import PageTitle from '../components/ui/PageTitle';
import SignupForm from '../components/SignupForm';

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
    <div>
      <PageTitle data-testid={TEST_ID.SIGNUP.TITLE}>
        회원가입
      </PageTitle>
      <SignupForm />
    </div>
  );
}
