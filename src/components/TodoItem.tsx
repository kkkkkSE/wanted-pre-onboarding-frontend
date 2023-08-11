/* eslint-disable jsx-a11y/label-has-associated-control */
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
      {!modifyMode ? (
        <>
          <label>
            <input
              type="checkbox"
              checked={todoItem.isCompleted}
              onChange={handleChangeCheckbox}
            />
            <span>{todoItem.todo}</span>
          </label>

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
  height: 2rem;
  max-width: 60rem;
  margin-block: .6rem;
  padding: 1.2rem 1rem;
  box-shadow: .2rem .2rem .8rem rgba(0, 0, 0, 0.15);

  label {
    flex-grow: 1;
    
    span{
      margin-inline: .8rem;
      display: inline-block;
      word-break: break-all;
    }
  }

  input[type='text']{
    padding-block: .4rem;
    border: none;
    border-bottom: 1px solid #aaa;
    background-color: transparent;

    &:focus{
      outline: none;
    }

    &:nth-of-type(2) {
      margin-inline: .8rem;
      flex-grow: 1;
    }
  }

  button{
    margin-inline: .3rem;
    padding: .6rem .8rem;
    border-radius: .4rem;
    color: #fff;
    white-space: nowrap;

    &:disabled{
      color: #ccc;
    }

    &:nth-of-type(1){
      background-color: #a09acb;
    }

    &:nth-of-type(2){
      background-color: #aaa;
    }
  }
`;
