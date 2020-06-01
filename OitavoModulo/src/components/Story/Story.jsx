import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const [videoMetaData, setVideoMetaData] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const progress = useCallback(() => {
    if (videoMetaData.duration !== 0 & currentTime !== 0) {
      const elapsedTime = ((currentTime / videoMetaData.duration) * 100);
       return `${elapsedTime.toFixed(2)}%`;
    }
    return '0%';
  }, [videoMetaData, currentTime]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={`/users/${user.username}`} className="user__thumb">
              <img src={user.avatar} alt={user.name} />
            </Link>
            <Link to={`/users/${user.username}`} className="user__name">{user.name}</Link>
          </div>
          <button
            type="button"
            className="story__close"
            onClick={() => handleClose()}
          >
            <i className="fas fa-times" />
          </button>
        </header>
        <div className="story__progress">
          <div
            style={{ width: progress() }}
            className="story__progress__elapsed"
          />
        </div>
      </div>
      {story.videoUrl && (
        <div className="container">
          <section className="story__video__wrapper">
            <video
              autoPlay
              className="video-player"
              loop
              playsInline
              onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
              onLoadedMetadata={(e) => {
                setVideoMetaData({
                  videoHeight: e.target.videoHeight,
                  videoWidth: e.target.videoWidth,
                  duration: e.target.duration,
                });
              }}
              src={story.videoUrl}
            />
          </section>
        </div>
      )}
    </section>
  );
};
export default Story;