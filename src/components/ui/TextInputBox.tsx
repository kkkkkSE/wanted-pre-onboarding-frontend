import styled from 'styled-components';

interface TextInputBoxProps {
  type: string,
  label?: string,
  value: string,
  testId: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInputBox({
  type, label = '', value, testId, onChange,
}: TextInputBoxProps) {
  return (
    <Container>
      {label && <span>{label}</span>}
      <input
        type={type}
        value={value}
        data-testid={testId}
        onChange={onChange}
      />
    </Container>
  );
}

const Container = styled.label`
  display: flex;
  align-items: center;
  padding-block: .8rem;

  span {
    display: inline-block;
    width: 10rem;
    white-space: pre-wrap;
  }

  input {
    width: 28rem;
    padding: .8rem 1rem;
  }
`;
