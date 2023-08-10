import useStore from './useStore';

import { todoStore } from '../stores/TodoStore';

const useTodoStore = () => useStore(todoStore);

export default useTodoStore;
