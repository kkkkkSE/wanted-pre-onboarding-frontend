import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { styled } from 'styled-components';

import useAccessToken from '../hooks/useAccessToken';

import ROUTES from '../constants/routes';

export default function PostSigninLayout() {
  const navigate = useNavigate();

  const { accessToken, setAccessToken } = useAccessToken();

  useEffect(() => {
    if (!accessToken) {
      navigate(ROUTES.SIGNIN);
    }
  }, [accessToken]);

  const handleClickLogout = () => {
    setAccessToken('');
  };

  return (
    <Container>
      <Outlet />

      <footer>
        <button
          type="button"
          onClick={handleClickLogout}
        >
          로그아웃
        </button>
      </footer>
    </Container>
  );
}

const Container = styled.div`

  padding: 6rem 2rem 2rem;

  footer{
    display: flex;
    justify-content: center;
    padding-top: 3rem;

    button{
      margin-inline: .3rem;
      color: #777;
      text-decoration: underline;
      white-space: nowrap;
    }
  }
`;
