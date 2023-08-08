import styled from 'styled-components';

export default function ErrorMessage({ message } : {
  message : string
}) {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
}

const Container = styled.div`
  p {
    padding-block: 2rem;
    text-align: center;
    font-size: 1.4rem;
    color: #dc2e2e;
  }
`;
