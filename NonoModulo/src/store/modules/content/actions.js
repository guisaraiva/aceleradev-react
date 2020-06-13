import { ContentReduxType } from './types';

export const addTrackToPlayer = (track) => ({
  type: ContentReduxType.ADD_PLAYER_TRACK,
  payload: track,
});

export const getCategoriesRequest = () => ({
  type: ContentReduxType.GET_CATEGORIES_REQUEST,
});

export const getCategoriesSuccess = ({ categories }) => {
  return {
    type: ContentReduxType.GET_CATEGORIES_SUCCESS,
    payload: categories.items,
  };
};

export const getCategoriesFailed = ({ message }) => ({
  type: ContentReduxType.GET_CATEGORIES_FAILED,
  payload: { message },
});

export const getCategoryPlaylistRequest = () => ({
  type: ContentReduxType.GET_CATEGORY_PLAYLIST_REQUEST,
});

export const getCategoryPlaylistSuccess = ({ playlists }) => ({
  type: ContentReduxType.GET_CATEGORY_PLAYLIST_SUCCESS,
  payload: playlists.items,
});

export const getCategoryPlaylistFailed = ({ message }) => ({
  type: ContentReduxType.GET_CATEGORY_PLAYLIST_FAILED,
  payload: { message },
});

export const getPlaylistTracksRequest = () => ({
  type: ContentReduxType.GET_PLAYLIST_TRACKS_REQUEST,
});

export const getPlaylistTracksSuccess = ({ items }) => ({
  type: ContentReduxType.GET_PLAYLIST_TRACKS_SUCCESS,
  payload: items,
});

export const getPlaylistTracksFailed = ({ message }) => ({
  type: ContentReduxType.GET_PLAYLIST_TRACKS_FAILED,
  payload: { message },
});

export const removeTrackToPlayer = () => ({
  type: ContentReduxType.REMOVE_PLAYER_TRACK,
});

export const setPlayerHeight = (height) => ({
  type: ContentReduxType.SET_PLAYER_HEIGHT,
  payload: height,
});

