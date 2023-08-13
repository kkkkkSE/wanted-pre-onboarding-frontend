import ROUTES from '../src/constants/routes';
import TEST_ID from '../src/constants/testId';

const { I } = inject();

export = {
  login(newEmail: string) {
    I.amOnPage(ROUTES.SIGNIN);

    I.fillField({ name: TEST_ID.SIGNIN.EMAIL }, newEmail);
    I.fillField({ name: TEST_ID.SIGNIN.PASSWORD }, '12345678');

    I.click({ name: TEST_ID.SIGNIN.SUBMIT_BUTTON });
  },
}
