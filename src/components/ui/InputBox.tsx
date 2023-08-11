import styled from 'styled-components';

interface InputBoxProps {
  type: string,
  label?: string,
  value: string,
  testId: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function InputBox({
  type, label = '', value, testId, onChange, onBlur = undefined,
}: InputBoxProps) {
  return (
    <Container>
      {label && <span>{label}</span>}
      <input
        type={type}
        value={value}
        data-testid={testId}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Container>
  );
}

const Container = styled.label`
  display: flex;
  align-items: center;
  padding-block: .4rem;

  span {
    display: inline-block;
    width: 7rem;
    white-space: pre-wrap;
    padding-right: 1rem;
  }

  input {
    width: 28rem;
    padding: 1rem 1.2rem;
  }
`;
