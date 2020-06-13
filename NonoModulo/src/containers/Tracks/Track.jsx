import React from "react";
import PropTypes from "prop-types";
import { BsPlayFill, BsVolumeUpFill } from "react-icons/bs";
import Ink from "react-ink";
import "./Track.scss";
import { useTrack } from "../../utils/hooks";

const Track = ({ track }) => {
  const { handleClick, isPlaying } = useTrack(track);
  return (
    <div
      className={`track ${isPlaying && "is-playing"}`}
      data-testid="track"
      onClick={handleClick}
    >
      <div className="track__play">
        <div className="track__play__wrapper">
          <BsPlayFill className="track__play__icon" />
          <BsVolumeUpFill className="track__play__icon" />
        </div>
      </div>
      <div className="track__info">
        <span className="track__name">{track.name}</span>
        <span className="track__artists">
          {track.artists.length &&
            track.artists.map(({ name }) => name).join(", ")}
        </span>
      </div>
      <Ink />
    </div>
  );
};

Track.propTypes = {
  track: PropTypes.object.isRequired,
};

export default Track;