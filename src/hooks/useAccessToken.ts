import { useState } from 'react';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState<string>(
    localStorage.getItem('accessToken') || '',
  );

  const updateAccessToken = (newAccessToken: string) => {
    setAccessToken(newAccessToken);
    localStorage.setItem('accessToken', newAccessToken);
  };

  return {
    accessToken,
    setAccessToken: updateAccessToken,
  };
};

export default useAccessToken;
