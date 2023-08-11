import { useState } from 'react';

import styled from 'styled-components';

import useTodoStore from '../hooks/useTodoStore';

import TEST_ID from '../constants/testId';

import { TodoItem as TodoItemType } from '../types';

import TodoItemEdit from './TodoItemEdit';

interface TodoItemProps {
  todoItem: TodoItemType;
}

export default function TodoItem({ todoItem } : TodoItemProps) {
  const store = useTodoStore();

  const [modifyMode, setModifyMode] = useState(false);

  const handleChangeCheckbox = () => {
    store.updateTodo(
      todoItem.id,
      todoItem.todo,
      !todoItem.isCompleted,
    );
  };

  const handleClickModify = () => {
    setModifyMode(true);
  };

  const handleClickDelete = () => {
    store.deleteTodo(todoItem.id);
  };

  return (
    <Container>
      <input
        type="checkbox"
        checked={todoItem.isCompleted}
        onChange={handleChangeCheckbox}
      />

      {!modifyMode ? (
        <>
          <span>{todoItem.todo}</span>

          <button
            type="button"
            onClick={handleClickModify}
            data-testid={TEST_ID.TODO.MODIFY_BUTTON}
          >
            수정
          </button>

          <button
            type="button"
            onClick={handleClickDelete}
            data-testid={TEST_ID.TODO.DELETE_BUTTON}
          >
            삭제
          </button>
        </>
      ) : (
        <TodoItemEdit
          todoItem={todoItem}
          setModifyMode={setModifyMode}
        />
      )}
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  padding: 1.2rem 1rem;

  &:nth-child(odd){
    background-color: #e5f9f2;
  }

  :nth-child(2) {
    flex-grow: 1;
    margin-inline: .8rem;
  }

  span{
    display: inline-block;
    word-break: break-all;
  }

  input[type='text']{
    padding: .4rem;
    border: none;
    border-bottom: 1px solid #777;
    background-color: transparent;

    &:focus{
      outline: none;
    }
  }

  button{
    margin-inline: .3rem;
    color: #777;
    text-decoration: underline;
    white-space: nowrap;

    &:disabled{
      color: #ccc;
    }
  }
`;
