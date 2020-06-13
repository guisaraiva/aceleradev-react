import { useState, useEffect } from 'react';
import {
  authCallbackError,
  authCallbackSucess,
} from "../../store/modules/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { getInfoFromUrlHash } from "../../modules/url";

export const useAuthorizeRoute = () => {
  const [redirect, setRedirect] = useState(false);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const urlHash = window.location.hash;
  useEffect(() => {
    const hashData = getInfoFromUrlHash(urlHash);
    if (hashData.error) {
      dispatch(authCallbackError(hashData.error));
      return;
    }
    dispatch(authCallbackSucess(hashData));
  }, [dispatch, urlHash]);
  useEffect(() => {
    if (isLogged) {
      setTimeout(() => setRedirect(true), 3000);
    }
  }, [isLogged]);
  return { redirect };
}