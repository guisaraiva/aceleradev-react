import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlaylistTracksRequest,
  getPlaylistTracksSuccess,
  getPlaylistTracksFailed,
} from "../../store/modules/content/actions";
import { logout } from "../../store/modules/user/actions";
import { request, sanitizeUrl } from "../../modules/request";
import { endpoints } from "../../modules/endpoints";

const { getPlaylistTracks } = endpoints;

export const useTrackRoute = () => {
  const { auth, content } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  useEffect(() => {
    const requestOptions = {
      ...getPlaylistTracks.options,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };

    dispatch(getPlaylistTracksRequest());
    request(sanitizeUrl(getPlaylistTracks.url, { playlistId }), requestOptions)
      .then((data) => dispatch(getPlaylistTracksSuccess(data)))
      .catch((error) => {
        if (error === 401) {
          dispatch(logout());
          return;
        }
        dispatch(getPlaylistTracksFailed(error));
      });
  }, [auth, playlistId, dispatch]);
  return { content, playlistId };
}