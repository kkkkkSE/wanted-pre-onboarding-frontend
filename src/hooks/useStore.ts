import { useEffect } from 'react';

import Store from '../stores/Store';

import useForceUpdate from './useForceUpdate';

const useStore = <T extends Store>(store: T) => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.subscribe(forceUpdate);

    return () => store.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return store;
};

export default useStore;
