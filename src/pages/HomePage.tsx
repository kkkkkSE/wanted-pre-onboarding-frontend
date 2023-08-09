import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import useAccessToken from '../hooks/useAccessToken';

import ROUTES from '../constants/routes';
import TEST_ID from '../constants/testId';

import PageTitle from '../components/ui/PageTitle';

export default function HomePage() {
  const navigate = useNavigate();

  const { accessToken } = useAccessToken();

  useEffect(() => {
    if (accessToken) {
      navigate(ROUTES.TODO);
    } else {
      navigate(ROUTES.SIGNIN);
    }
  }, []);

  return (
    <div>
      <PageTitle data-testid={TEST_ID.HOME.TITLE}>
        홈페이지
      </PageTitle>
    </div>
  );
}
