import useTodoStore from '../hooks/useTodoStore';

import TEST_ID from '../constants/testId';

import TodoAddField from '../components/TodoAddField';
import TodoList from '../components/TodoList';

import PageTitle from '../components/ui/PageTitle';
import ErrorMessage from '../components/ui/ErrorMessage';

export default function TodoPage() {
  const store = useTodoStore();

  return (
    <div>
      <PageTitle data-testid={TEST_ID.TODO.TITLE}>
        할 일 목록
      </PageTitle>

      <TodoAddField />
      <TodoList />

      {store.errorMessage && (
        <ErrorMessage message={store.errorMessage} />
      )}
    </div>
  );
}
