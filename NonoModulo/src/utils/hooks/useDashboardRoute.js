import { useEffect } from 'react';
import {
  getCategoriesFailed,
  getCategoriesRequest,
  getCategoriesSuccess,
} from "../../store/modules/content/actions";

import {
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  logout,
} from "../../store/modules/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../modules/request";
import { useRouteMatch } from "react-router-dom";
import { endpoints } from "../../modules/endpoints";
const { getCategories, getUserProfile } = endpoints;
export const useDashboardRoute = () => {
  const { auth, content, user } = useSelector((state) => state);
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    const requestOptions = {
      ...getUserProfile.options,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };
    dispatch(getUserRequest());
    request(getUserProfile.url, requestOptions)
      .then((data) => dispatch(getUserSuccess(data)))
      .catch((error) => {
        if (error === 401) {
          dispatch(logout());
           return;
        }
        dispatch(getUserFailed(error));
      });
  }, [auth, dispatch]);
  useEffect(() => {
    const requestOptions = {
      ...getCategories.options,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };
    dispatch(getCategoriesRequest());
    request(getCategories.url, requestOptions)
      .then((data) => dispatch(getCategoriesSuccess(data)))
      .catch((error) => {
        if (error === 401) {
          dispatch(logout());
          return;
        }
        dispatch(getCategoriesFailed(error));
      });
  }, [auth, dispatch]);
  return {
    getUseDashboardRoute: {
      content, user, path, url
    }
  };
}