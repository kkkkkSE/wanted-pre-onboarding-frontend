import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

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

  useEffect(() => {
    if (store.accessToken) {
      store.reset();

      navigate(ROUTES.TODO);
    }
  }, [store.accessToken]);

  return (
    <div>
      <PageTitle data-testid={TEST_ID.SIGNIN.TITLE}>
        로그인
      </PageTitle>
      <SigninForm />
    </div>
  );
}
