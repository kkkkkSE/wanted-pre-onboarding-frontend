import { AxiosError } from 'axios';

import { apiService } from '../services/ApiService';

import Store from './Store';

const AT_SIGN = '@';

const PASSWORD_MIN_LENGTH = 8;

export default class SignupFormStore extends Store {
  email = '';

  password = '';

  errorMessage = '';

  done = false;

  get validEmail() {
    return this.email.includes(AT_SIGN);
  }

  get validPassword() {
    return this.password.length >= PASSWORD_MIN_LENGTH;
  }

  reset() {
    this.email = '';
    this.password = '';
    this.errorMessage = '';
    this.done = false;

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

  setErrorMessage(message: string) {
    this.errorMessage = message;
    this.done = false;

    this.publish();
  }

  setDone() {
    this.errorMessage = '';
    this.done = true;

    this.publish();
  }

  async signup() {
    try {
      await apiService.signup({
        email: this.email,
        password: this.password,
      });

      this.setDone();
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

export const signupFormStore = new SignupFormStore();
