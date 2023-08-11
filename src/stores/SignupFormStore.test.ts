import SignupFormStore from './SignupFormStore';

const context = describe;

const mockSignup = jest.fn();

jest.mock('../services/ApiService', () => ({
  get apiService() {
    return {
      signup: mockSignup,
    };
  },
}));

describe('SignupFormStore', () => {
  let store: SignupFormStore;

  beforeEach(() => {
    jest.clearAllMocks();

    store = new SignupFormStore();
  });

  describe('회원가입', () => {
    beforeEach(() => {
      store.reset();
    });

    context('이메일을 입력하지 않았거나, 유효하지 않은 이메일 입력 시', () => {
      beforeEach(() => {
        store.changePassword('password');
      });

      it('이메일 유효성 검사를 통과하지 못한다', () => {
        store.changeEmail('');

        expect(store.validEmail).toBe(false);

        store.changeEmail('example');

        expect(store.validEmail).toBe(false);
      });
    });

    context('비밀번호를 입력하지 않았거나, 유효하지 않은 비밀번호 입력 시', () => {
      beforeEach(() => {
        store.changeEmail('email@example.com');
      });

      it('비밀번호 유효성 검사를 통과하지 못한다', () => {
        store.changePassword('');

        expect(store.validPassword).toBe(false);

        store.changePassword('1234567');

        expect(store.validPassword).toBe(false);
      });
    });

    context('회원가입 API 호출 시 요청 성공 응답을 받으면', () => {
      beforeEach(() => {
        store.changeEmail('email@example.com');
        store.changePassword('password');
      });

      it('로그인에 성공하여 스토어의 done이 true로 변경된다', async () => {
        await store.signup();

        expect(mockSignup).toBeCalled();

        expect(store.done).toBe(true);
        expect(store.errorMessage).toBe('');
      });
    });

    context('회원가입 API 호출 시 요청 실패 응답을 받으면', () => {
      const errorMessage = 'Error Message';

      beforeEach(() => {
        store.changeEmail('email@example.com');
        store.changePassword('password');

        mockSignup.mockRejectedValue(Error(errorMessage));
      });

      it('에러 메세지가 스토어의 errorMessage에 저장된다', async () => {
        await store.signup();

        expect(mockSignup).toBeCalled();

        expect(store.done).toBe(false);
        expect(store.errorMessage).toBe(errorMessage);
      });
    });
  });
});
