import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  addTrackToPlayer,
  removeTrackToPlayer,
} from "../../store/modules/content/actions";

export const useTrack = (track) => {
  const playingNowId = useSelector((state) => state.content.playingNowId);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (isPlaying && playingNowId === track.id) {
      setIsPlaying(false);
      dispatch(removeTrackToPlayer());
      return;
    }
    dispatch(addTrackToPlayer(track));
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    if (playingNowId === track.id) {
      return;
    }
   setIsPlaying(false);
  }, [playingNowId, track.id]);
  return {
    isPlaying, handleClick
  };
}