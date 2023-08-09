import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import ROUTES from '../constants/routes';

export default function PreSigninLayout() {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (accessToken) {
      navigate(ROUTES.TODO);
    }
  }, [accessToken]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
