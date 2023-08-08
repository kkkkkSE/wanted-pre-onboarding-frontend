import useStore from './useStore';

import { signupFormStore } from '../stores/SignupFormStore';

const useSignupFormStore = () => useStore(signupFormStore);

export default useSignupFormStore;
