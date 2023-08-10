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

    await store.createTodo(store.todo);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextInputBox
          label="할 일 추가"
          type="text"
          value={store.todo}
          testId={TEST_ID.TODO.ADD_INPUT}
          onChange={handleChangeInput}
        />
        <Button
          type="submit"
          data-testid={TEST_ID.TODO.ADD_BUTTON}
          disabled={!store.todo}
        >
          추가
        </Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding-block: 2rem;

  form{
    display: flex;
    align-items: center;
    justify-content: center;

    button{
      margin-left: 1rem;
      white-space: nowrap;
    }
  }
`;
