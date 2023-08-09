import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import ROUTES from '../constants/routes';

export default function PostSigninLayout() {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!accessToken) {
      navigate(ROUTES.SIGNIN);
    }
  }, [accessToken]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
