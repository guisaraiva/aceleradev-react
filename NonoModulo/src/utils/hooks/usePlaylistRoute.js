import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryPlaylistFailed,
  getCategoryPlaylistRequest,
  getCategoryPlaylistSuccess,
} from "../../store/modules/content/actions";
import { logout } from "../../store/modules/user/actions";
import { request, sanitizeUrl } from "../../modules/request";
import { endpoints } from "../../modules/endpoints";

const { getCategoryPlaylists } = endpoints;

export const usePlaylistRoute = () => {
  const { auth, content } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    const requestOptions = {
      ...getCategoryPlaylists.options,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };

    dispatch(getCategoryPlaylistRequest());

    request(
      sanitizeUrl(getCategoryPlaylists.url, { categoryId }),
      requestOptions
    )
      .then((data) => dispatch(getCategoryPlaylistSuccess(data)))
      .catch((error) => {
        if (error === 401) {
          dispatch(logout());
          return;
        }
        dispatch(getCategoryPlaylistFailed(error));
      });

  }, [auth, categoryId, dispatch]);
  return { content, categoryId };
}