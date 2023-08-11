import styled from 'styled-components';

export default function ErrorMessage({ message } : {
  message : string
}) {
  return (
    <Container>{message}</Container>
  );
}

const Container = styled.p`
  padding-block: 2rem;
  text-align: center;
  font-size: 1.4rem;
  color: #dc2e2e;
`;
