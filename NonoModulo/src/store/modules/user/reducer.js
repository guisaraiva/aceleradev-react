import produce from 'immer';
import { UserReduxType } from './types';

const INITIAL_STATE = {
  email: '',
  errorMessage: '',
  name: '',
  status: 'idle',
  thumb: '',
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case UserReduxType.GET_USER_REQUEST: {
        draft.status = 'running';
        break;
      }
      case UserReduxType.GET_USER_SUCCESS: {
        draft.status = 'success';
        draft.email = action.payload.email;
        draft.name = action.payload.name;
        draft.thumb = action.payload.thumb;
        break;
      }
      case UserReduxType.GET_USER_FAILED: {
        draft.errorMessage = action.payload.message
        draft.status = 'error';
        break;
      }
      default:
    }
  });
}