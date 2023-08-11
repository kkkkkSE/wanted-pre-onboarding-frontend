import TodoStore from './TodoStore';

const context = describe;

const mockServices = {
  createTodo: jest.fn(),
  updateTodo: jest.fn(),
  deleteTodo: jest.fn(),
};

jest.mock('../services/apiService', () => ({
  get apiService() {
    return {
      createTodo: mockServices.createTodo,
      updateTodo: mockServices.updateTodo,
      deleteTodo: mockServices.deleteTodo,
    };
  },
}));

describe('TodoStore', () => {
  let store: TodoStore;

  beforeEach(() => {
    jest.clearAllMocks();

    store = new TodoStore();
  });

  describe('할 일 추가하기', () => {
    beforeEach(() => {
      store.resetNewTodo();
    });

    context('새 할 일이 빈 문자열일 때 할 일 생성 메서드 호출 시', () => {
      const emptyTodo = '';

      it('할 일 추가 API 요청을 하지 않음', async () => {
        store.changeTodo(emptyTodo);

        await store.createTodo();

        expect(mockServices.createTodo).not.toBeCalled();
      });
    });

    describe('새 할 일 입력 후 할 일 생성 메서드 호출', () => {
      const newTodo = 'new todo';

      beforeEach(() => {
        store.changeTodo(newTodo);
      });

      context('할 일 추가 API 호출 시 요청 성공 응답을 받으면', () => {
        const newTodoItem = {
          id: 1,
          todo: newTodo,
          isCompleted: false,
          userId: 1,
        };

        beforeEach(() => {
          mockServices.createTodo.mockResolvedValue(newTodoItem);
        });

        it('할 일 리스트의 마지막에 새 할 일 추가', async () => {
          await store.createTodo();

          expect(mockServices.createTodo).toBeCalledWith({ todo: newTodo });

          expect(store.todoList.at(-1)).toBe(newTodoItem);

          expect(store.newTodo).toBe('');
        });
      });

      context('할 일 추가 API 호출 시 요청 실패 응답을 받으면', () => {
        beforeEach(() => {
          mockServices.createTodo.mockRejectedValue(Error());
        });

        it('"추가 실패" 메세지가 스토어의 errorMessage에 저장됨', async () => {
          store.changeTodo(newTodo);

          await store.createTodo();

          expect(store.errorMessage).toBe('추가 실패');
        });
      });
    });
  });

  describe('할 일 수정하기', () => {
    const todoItem = {
      id: 1,
      todo: 'todo',
      isCompleted: false,
      userId: 1,
    };

    context('수정할 할 일을 입력하지 않고 할 일 수정 메서드 호출 시', () => {
      const emptyTodo = '';

      it('할 일 수정 API 요청을 하지 않음', async () => {
        await store.updateTodo(todoItem.id, emptyTodo, todoItem.isCompleted);

        expect(mockServices.updateTodo).not.toBeCalled();
      });
    });

    describe('수정할 할 일 입력 후 할 일 수정 메서드 호출', () => {
      const todoList = [todoItem];

      const editTodo = 'edit todo';

      beforeEach(() => {
        store.setTodoList(todoList);
      });

      context('할 일 수정 API 호출 시 요청 성공 응답을 받으면', () => {
        beforeEach(() => {
          mockServices.updateTodo.mockResolvedValue({
            ...todoItem, todo: editTodo,
          });
        });

        it('할 일 리스트에 해당 할 일 수정', async () => {
          const index = todoList.findIndex((item) => item.id === todoItem.id);

          await store.updateTodo(todoItem.id, editTodo, todoItem.isCompleted);

          expect(mockServices.updateTodo).toBeCalled();

          expect(store.todoList[index].todo).toBe(editTodo);
        });
      });

      context('할 일 수정 API 호출 시 요청 실패 응답을 받으면', () => {
        beforeEach(() => {
          mockServices.updateTodo.mockRejectedValue(Error());
        });

        it('"수정 실패" 메세지가 스토어의 errorMessage에 저장됨', async () => {
          await store.updateTodo(todoItem.id, editTodo, todoItem.isCompleted);

          expect(store.errorMessage).toBe('수정 실패');
        });
      });
    });
  });

  describe('할 일 삭제하기', () => {
    const todoItem = {
      id: 1,
      todo: 'todo',
      isCompleted: false,
      userId: 1,
    };

    const todoList = [todoItem];

    beforeEach(() => {
      store.setTodoList(todoList);
    });

    context('할 일 삭제 API 호출 시 요청 성공 응답을 받으면', () => {
      it('할 일 리스트에 해당 할 일 삭제', async () => {
        await store.deleteTodo(todoItem.id);

        expect(mockServices.deleteTodo).toBeCalled();

        const findIndex = store.todoList.findIndex((item) => item.id === todoItem.id);

        expect(findIndex).toBe(-1);
      });
    });

    context('할 일 삭제 API 호출 시 요청 실패 응답을 받으면', () => {
      beforeEach(() => {
        mockServices.deleteTodo.mockRejectedValue(Error());
      });

      it('"삭제 실패" 메세지가 스토어의 errorMessage에 저장됨', async () => {
        await store.deleteTodo(todoItem.id);

        expect(store.errorMessage).toBe('삭제 실패');
      });
    });
  });
});
