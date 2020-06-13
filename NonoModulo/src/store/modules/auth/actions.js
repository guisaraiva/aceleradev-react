import { AuthReduxType } from './types';

export const authCallbackSucess = (credentials) => ({
  type: AuthReduxType.CALLBACK_SUCCESS,
  payload: { ...credentials }
})

export const authCallbackError = (errorMessage) => ({
  type: AuthReduxType.CALLBACK_ERROR,
  payload: errorMessage,
})

