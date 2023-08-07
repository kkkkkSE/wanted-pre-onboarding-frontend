import axios, { AxiosInstance } from 'axios';

import { DYNAMIC_API_PATHS, STATIC_API_PATHS } from '../constants/api';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

export default class ApiService {
  private instance : AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_BASE_URL,
    });
  }

  async signup({ email, password } : {
    email: string,
    password: string,
  }) {
    await this.instance.post(
      STATIC_API_PATHS.SIGNUP,
      { email, password },
    );
  }

  async signin({ email, password } : {
    email: string,
    password: string,
  }) {
    const { data } = await this.instance.post(
      STATIC_API_PATHS.SIGNIN,
      { email, password },
    );

    const accessToken = data.access_token;

    return accessToken;
  }

  async getTodos() {
    const { data } = await this.instance.get(
      STATIC_API_PATHS.TODO,
    );

    return data;
  }

  async createTodos({ todo } : {
    todo: string
  }) {
    const { data } = await this.instance.post(
      STATIC_API_PATHS.SIGNIN,
      { todo },
    );

    return data;
  }

  async updateTodos({ id, todo, isCompleted } : {
    id: number,
    todo: string,
    isCompleted: boolean,
  }) {
    const { data } = await this.instance.put(
      DYNAMIC_API_PATHS.TODO(id),
      { todo, isCompleted },
    );

    return data;
  }

  async deleteTodos({ id } : {
    id: number
  }) {
    await this.instance.delete(
      DYNAMIC_API_PATHS.TODO(id),
    );
  }
}

export const apiService = new ApiService();
