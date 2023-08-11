import styled from 'styled-components';

import useTodoStore from '../hooks/useTodoStore';

import TEST_ID from '../constants/testId';

import TextInputBox from './ui/TextInputBox';
import Button from './ui/Button';

export default function TodoAddField() {
  const store = useTodoStore();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.changeTodo(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (store.newTodo) {
      await store.createTodo();
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <TextInputBox
        label="할 일 추가"
        type="text"
        value={store.newTodo}
        testId={TEST_ID.TODO.ADD_INPUT}
        onChange={handleChangeInput}
      />
      <Button
        type="submit"
        data-testid={TEST_ID.TODO.ADD_BUTTON}
        disabled={!store.newTodo}
      >
        추가
      </Button>
    </Container>
  );
}

const Container = styled.form`
  padding-block: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button{
    margin-left: 1rem;
    white-space: nowrap;
  }
`;
