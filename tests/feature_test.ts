import ROUTES from '../src/constants/routes';
import TEST_ID from '../src/constants/testId';

import setup from './setup';

Feature('feature test');

function generateRandomString(length:number) : string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    result += alphabet.charAt(randomIndex);
  }

  return `${result}@`;
}

const randomEmail = generateRandomString(13);

Scenario('Sign up', ({ I }) => {
  I.amOnPage(ROUTES.SIGNUP);

  I.fillField({ name: TEST_ID.SIGNUP.EMAIL }, randomEmail);
  I.fillField({ name: TEST_ID.SIGNUP.PASSWORD }, '12345678');

  I.click({ name: TEST_ID.SIGNUP.SUBMIT_BUTTON });

  I.see('로그인');
});

Scenario('Sign in', ({ I }) => {
  I.amOnPage(ROUTES.SIGNIN);

  I.fillField({ name: TEST_ID.SIGNIN.EMAIL }, randomEmail);
  I.fillField({ name: TEST_ID.SIGNIN.PASSWORD }, '12345678');

  I.click({ name: TEST_ID.SIGNIN.SUBMIT_BUTTON });

  I.see('할 일 목록');
});

Scenario('Add Todo', ({ I }) => {
  setup.login(randomEmail);

  I.fillField({ name: TEST_ID.TODO.ADD_INPUT }, randomEmail);

  I.click({ name: TEST_ID.TODO.ADD_BUTTON });

  I.see(randomEmail);
});

Scenario('Cancel Modify Todo', ({ I }) => {
  setup.login(randomEmail);

  I.click({ name: TEST_ID.TODO.MODIFY_BUTTON });

  I.fillField({ name: TEST_ID.TODO.MODIFY_INPUT }, 'modify todo');

  I.click({ name: TEST_ID.TODO.CANCEL_BUTTON });

  I.see(randomEmail);

  I.dontSee('제출');
  I.dontSee('취소');

  I.see('수정');
  I.see('삭제');
});

Scenario('Cancel Modify Todo', ({ I }) => {
  setup.login(randomEmail);

  I.click({ name: TEST_ID.TODO.MODIFY_BUTTON });

  I.fillField({ name: TEST_ID.TODO.MODIFY_INPUT }, 'modify todo');

  I.click({ name: TEST_ID.TODO.SUBMIT_BUTTON });

  I.see('modify todo');

  I.dontSee('제출');
  I.dontSee('취소');

  I.see('수정');
  I.see('삭제');
});

Scenario('Delete Todo', ({ I }) => {
  setup.login(randomEmail);

  I.click({ name: TEST_ID.TODO.DELETE_BUTTON });

  I.dontSee(randomEmail);
});
