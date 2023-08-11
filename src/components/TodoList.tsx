import { useEffect } from 'react';

import styled from 'styled-components';

import useAccessToken from '../hooks/useAccessToken';
import useTodoStore from '../hooks/useTodoStore';

import TodoItem from './TodoItem';

export default function TodoList() {
  const { accessToken } = useAccessToken();

  const store = useTodoStore();

  useEffect(() => {
    if (accessToken) {
      store.fetchTodoList();
    }
  }, []);

  if (store.todoList.length === 0) {
    return (
      <Container>
        <p>등록된 할 일이 없습니다.</p>
      </Container>
    );
  }

  return (
    <Container>
      {store.todoList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
        />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > p {
    padding-block: 3rem;
    text-align: center;
  }
`;
