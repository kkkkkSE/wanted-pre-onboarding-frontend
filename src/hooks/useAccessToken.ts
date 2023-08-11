import { useState } from 'react';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken') || '',
  );

  const updateAccessToken = (newAccessToken: string) => {
    try {
      localStorage.setItem('accessToken', newAccessToken);

      setAccessToken(newAccessToken);
    } catch (e) {
      setAccessToken('');
    }
  };

  return {
    accessToken,
    setAccessToken: updateAccessToken,
  };
};

export default useAccessToken;
