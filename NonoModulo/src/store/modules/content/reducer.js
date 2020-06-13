import produce from 'immer';
import { ContentReduxType } from './types';

const INITIAL_STATE = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: 'idle',
  errorMessage: '',
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ContentReduxType.ADD_PLAYER_TRACK: {
        draft.playingNowId = action.payload.id;
        draft.playingNowTrack = action.payload;
        break;
      }
      case ContentReduxType.GET_CATEGORIES_REQUEST: {
        draft.categories = [];
        draft.status = 'running';
        break;
      }
      case ContentReduxType.GET_CATEGORIES_SUCCESS: {
        draft.errorMessage = '';
        draft.categories = action.payload;
        draft.status = 'success';
        break;
      }

      case ContentReduxType.GET_CATEGORIES_FAILED: {
        draft.categories = [];
        draft.errorMessage = action.payload.message;
        draft.status = 'error';
        break;
      }
      case ContentReduxType.GET_CATEGORY_PLAYLIST_REQUEST: {
        draft.playlists = [];
        draft.status = 'running';
        break;
      }
      case ContentReduxType.GET_CATEGORY_PLAYLIST_SUCCESS: {
        draft.errorMessage = '';
        draft.playlists = action.payload;
        draft.status = 'success';
        break;
      }
      case ContentReduxType.GET_CATEGORY_PLAYLIST_FAILED: {
        draft.errorMessage = action.payload.message;
        draft.playlists = [];
        draft.status = 'error';
        break;
      }
      case ContentReduxType.GET_PLAYLIST_TRACKS_REQUEST: {
        draft.tracks = [];
        draft.status = 'running';
        break;
      }
      case ContentReduxType.GET_PLAYLIST_TRACKS_SUCCESS: {
        draft.errorMessage = '';
        draft.tracks = action.payload.filter(({ track }) => track);
        draft.status = 'success';
        break;
      }
      case ContentReduxType.GET_PLAYLIST_TRACKS_FAILED: {
        draft.tracks = [];
        draft.errorMessage = action.payload.message;
        draft.status = 'error';
        break;
      }
      case ContentReduxType.REMOVE_PLAYER_TRACK: {
        draft.playingNowId = null;
        draft.playingNowTrack = null;
        draft.playerHeight = 0;
        break;
      }
      case ContentReduxType.SET_PLAYER_HEIGHT: {
        draft.playerHeight = action.payload;
        break;
      }
      default:
    }
  });
}