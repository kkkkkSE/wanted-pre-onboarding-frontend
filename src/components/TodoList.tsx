import { useEffect } from 'react';

import styled from 'styled-components';

import useTodoStore from '../hooks/useTodoStore';

import TodoItem from './TodoItem';

export default function TodoList() {
  const store = useTodoStore();

  useEffect(() => {
    store.fetchTodoList();
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
      <ul>
        {store.todoList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
          />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  > p {
    padding-block: 3rem;
    text-align: center;
  }
`;
