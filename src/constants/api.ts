export const STATIC_API_PATHS = {
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  TODO: '/todos',
};

export const DYNAMIC_API_PATHS = {
  TODO: (id: number) => `/todos/${id}`,
};
