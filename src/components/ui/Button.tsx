import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 1rem 2.8rem;
  width: fit-content;
  color: #ffffff;
  background-color: #7C73C0;
  border-radius: .4rem;

  &:disabled {
    background-color: #ccc;
  }
`;

export default Button;
