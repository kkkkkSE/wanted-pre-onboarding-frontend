import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export default function NotFound() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <h2>404 Error</h2>
      <p>페이지를 찾을 수 없습니다.</p>
      <button
        type="button"
        onClick={handleClickBack}
      >
        이전 페이지로 돌아가기
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h2 {
    font-size: 3.6rem;
    font-weight: bold;
  }

  p {
    padding-block: 1.2rem 3rem;
  }

  button {
    padding: 1.2rem 1.8rem;
    color: #fff;
    background-color: #aaa;
    border-radius: .5rem;
  }
`;
