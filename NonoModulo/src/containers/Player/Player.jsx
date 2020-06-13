import React from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import Ink from "react-ink";
import "./Player.scss";
import { usePlayer } from "../../utils/hooks";

const Player = () => {
  const { getUsePlayer, handleUsePlayer } = usePlayer();
  return (
    <div
      ref={getUsePlayer.playerRef}
      className={`player ${getUsePlayer.currentTrack ? "is-playing" : ""}`}
      data-testid="player"
    >
      {getUsePlayer.currentTrack && (
        <div className="player__wrapper">
          <div className="player__progress-bar">
            <div
              className="player__progress-bar__stroke"
              style={{ width: `${getUsePlayer.progressBarWidth}` }}
            />
          </div>
          <div className="container">
            <figure
              className="player__album-cover"
              style={{
                backgroundImage: `url(${
                  getUsePlayer.currentTrack.album?.images[1]?.url || ""
                })`,
              }}
            />
            <div className="player__status">
              <div className="player__artist">
                <span className="player__music">
                  {getUsePlayer.currentTrack.name}
                </span>
                <span className="player__artists">
                  {getUsePlayer.currentTrack.artists &&
                    getUsePlayer.currentTrack.artists
                      .map(({ name }) => name)
                      .join(", ")}
                </span>
                <div
                  className={`player__status__current ${
                    getUsePlayer.isPlaying ? "is-playing" : ""
                  }`}
                >
                  <span>Pausado</span>
                  <span>Reproduzindo</span>
                </div>
              </div>
            </div>
            <div
              className="player__controls"
              onClick={handleUsePlayer.togglePlayPause}
            >
              <div
                className={`player__control ${
                  !getUsePlayer.isPlaying ? "is-paused" : ""
                }`}
              >
                {!getUsePlayer.isPlaying ? <BsPlayFill /> : <BsPauseFill />}
                <Ink />
              </div>
            </div>
          </div>
          <audio
            ref={getUsePlayer.audioElementRef}
            autoPlay
            onEnded={handleUsePlayer.handleOnEnded}
            onTimeUpdate={handleUsePlayer.handleTimeUpdate}
            preload="metadata"
            src={getUsePlayer.currentTrack.preview_url}
          />
        </div>
      )}
    </div>
  );
};

export default Player;