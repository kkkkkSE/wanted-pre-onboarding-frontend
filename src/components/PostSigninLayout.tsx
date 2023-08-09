import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { styled } from 'styled-components';

import useAccessToken from '../hooks/useAccessToken';

import ROUTES from '../constants/routes';

export default function PostSigninLayout() {
  const navigate = useNavigate();

  const { accessToken } = useAccessToken();

  useEffect(() => {
    if (!accessToken) {
      navigate(ROUTES.SIGNIN);
    }
  }, [accessToken]);

  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem 2rem 2rem;
`;
