import { useEffect, useRef, useState } from 'react';

import useTodoStore from '../hooks/useTodoStore';

import { TodoItem } from '../types';

import TEST_ID from '../constants/testId';

interface TodoItemEditProps {
  todoItem: TodoItem;
  setModifyMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoItemEdit({
  todoItem, setModifyMode,
}: TodoItemEditProps) {
  const store = useTodoStore();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [value, setValue] = useState('');

  useEffect(() => {
    inputRef.current?.focus();

    setValue(todoItem.todo);
  }, []);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit();
    }

    if (event.key === 'Escape') {
      onCancel();
    }
  };

  const onSubmit = () => {
    if (value) {
      store.updateTodo(todoItem.id, value, todoItem.isCompleted);

      setModifyMode(false);
    }
  };

  const onCancel = () => {
    setModifyMode(false);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        data-testid={TEST_ID.TODO.MODIFY_INPUT}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />

      <button
        type="button"
        onClick={onSubmit}
        data-testid={TEST_ID.TODO.SUBMIT_BUTTON}
        disabled={!value}
      >
        제출
      </button>

      <button
        type="button"
        onClick={onCancel}
        data-testid={TEST_ID.TODO.CANCEL_BUTTON}
      >
        취소
      </button>
    </>
  );
}
