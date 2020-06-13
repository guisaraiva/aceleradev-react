import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  removeTrackToPlayer,
  setPlayerHeight,
} from "../../store/modules/content/actions";
import { usePrevious } from "./usePrevious";

export const usePlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const playingNowId = useSelector((state) => state.content.playingNowId);
  const playingNowTrack = useSelector((state) => state.content.playingNowTrack);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressBarWidth, setProgressBarWidth] = useState("0%");
  const prevPlayingNowId = usePrevious(playingNowId);
  const audioElementRef = useRef(null);
  const playerRef = useRef(null);
  const playerHeight = playerRef?.current?.offsetHeight || 0;

  const togglePlayPause = () => {
    const audioPlayer = audioElementRef.current;
    if (isPlaying && !audioPlayer.paused) {
      setIsPlaying(false);
    } else if (!isPlaying && audioPlayer.paused) {
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const audioPlayer = audioElementRef.current;
    const width =
      Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + "%";
    setProgressBarWidth(width);
  };
  const handleOnEnded = () => {
    dispatch(removeTrackToPlayer());
  };
  useEffect(() => {
    if (playingNowId === prevPlayingNowId) {
      return;
    }
    setCurrentTrack(playingNowTrack);
  }, [playingNowId, prevPlayingNowId, playingNowTrack]);
  useEffect(() => {
    const audioPlayer = audioElementRef.current;
    if (prevPlayingNowId === playingNowId) {
      if (isPlaying && audioPlayer?.paused) {
        audioPlayer.play();
      }
      if (!isPlaying && !audioPlayer?.paused) {
        audioPlayer.pause();
      }
    } else {
      setIsPlaying(true);
    }
  }, [isPlaying, playingNowId, prevPlayingNowId]);
  useEffect(() => {
    if (playerHeight > 0) {
      dispatch(setPlayerHeight(playerHeight));
    }
  }, [isPlaying, dispatch, playerHeight]);
  return {
    getUsePlayer: {
      currentTrack,
      progressBarWidth,
      playerRef,
      audioElementRef,
    },
    handleUsePlayer: {
      togglePlayPause,
      handleTimeUpdate,
      handleOnEnded
    }
  };
}