import useStore from './useStore';

import { signinFormStore } from '../stores/SigninFormStore';

const useSigninFormStore = () => useStore(signinFormStore);

export default useSigninFormStore;
