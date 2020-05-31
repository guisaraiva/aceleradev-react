import React, { useCallback, useState } from "react";


import { Link } from 'react-router-dom';


import './Story.scss';


const Story = ({ story, user, handleClose }) => {

  const [progress, updateProgress] = useState(0);


  const {username, avatar, name} = user;

  const {videoUrl} = story;


  const videoProgressCallback = (e) => {

    const {currentTime, duration } = e.currentTarget;

    const progress = (currentTime/duration) * 100;

    updateProgress(progress);

  }

  

  return (

    <section className="story" data-testid="story">

      <div className="container">

        <header className="story__header">

          <div className="user">

            <Link to={`users/${username}`} className="user__thumb">

              <img src={avatar} alt={username} />

            </Link>

            <Link to={`users/${username}`} className="user__name">

              {name}

            </Link>

          </div>

          <button onClick={() => handleClose(false)} className="story__close">

            <span className="fas fa-times" />

          </button>

        </header>

        <div className="story__progress">

          <div className="story__progress__elapsed" style={{width: `${progress}%`}}></div>

        </div>

      </div>

      <div className="container">

        <section className="story__video__wrapper">

          <video autoPlay className="video-player" loop playsInline src={videoUrl} onTimeUpdate={videoProgressCallback}></video>

        </section>

      </div>

    </section>

  );

};


export default Story;