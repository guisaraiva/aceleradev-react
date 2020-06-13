import produce from 'immer';
import { AuthReduxType } from './types';

const INITIAL_STATE = {
  accessToken: '',
  errorMessage: '',
  expirationTime: '',
  expiresIn: '',
  isLogged: false,
  tokenType: '',
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case AuthReduxType.CALLBACK_SUCCESS: {
        draft.accessToken = action.payload.accessToken;
        draft.expirationTime = new Date().getTime() + parseInt(action.payload.expiresIn);
        draft.expiresIn = action.payload.expiresIn;
        draft.isLogged = true;
        draft.tokenType = action.payload.tokenType;
        break;
      }
      case AuthReduxType.CALLBACK_ERROR: {
        draft.errorMessage = action.payload;
        draft.isLogged = false;
        break;
      }
      default:
    }
  });
}