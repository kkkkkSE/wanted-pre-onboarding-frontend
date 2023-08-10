import { AxiosError } from 'axios';

import { apiService } from '../services/apiService';

import Store from './Store';

const AT_SIGN = '@';

const PASSWORD_MIN_LENGTH = 8;

export default class SigninFormStore extends Store {
  email = '';

  password = '';

  accessToken = '';

  errorMessage = '';

  get valid() {
    return (
      this.email.includes(AT_SIGN) && this.password.length >= PASSWORD_MIN_LENGTH
    );
  }

  reset() {
    this.email = '';
    this.password = '';
    this.errorMessage = '';

    this.publish();
  }

  changeEmail(email: string) {
    this.email = email;

    this.publish();
  }

  changePassword(password: string) {
    this.password = password;

    this.publish();
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;

    this.publish();
  }

  setErrorMessage(message: string) {
    this.errorMessage = message;

    this.publish();
  }

  setDone() {
    this.errorMessage = '';

    this.publish();
  }

  async signin() {
    try {
      const accessToken = await apiService.signin({
        email: this.email,
        password: this.password,
      });

      this.setAccessToken(accessToken);
    } catch (e) {
      if (e instanceof AxiosError) {
        this.setErrorMessage(e.response?.data.message || 'ERROR');

        return;
      }

      if (e instanceof Error) {
        this.setErrorMessage(e.message);
      }
    }
  }
}

export const signinFormStore = new SigninFormStore();
