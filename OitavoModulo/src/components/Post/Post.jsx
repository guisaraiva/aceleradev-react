import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);
  return (
    <article className="post" data-testid="post">
      {
      userInfo && (
      <div className="post__header">
        <div className="user">
          <Link className="user__thumb" to={`/users/${userInfo.username}`}>
            <img src={userInfo.avatar} alt="" />
          </Link>
          <Link className="user__name" to={`/users/${userInfo.username}`}>
            {userInfo.name}
          </Link>
        </div>
        <button type="button" className="post__context">
          <span className={`follow-btn ${follow && 'is-following'}`} onClick={() => setFollow(!follow)}>
            {follow ? 'Seguindo' : 'Seguir'}
          </span>
        </button>
      </div>
      )
    }
      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>
      {
      userInfo && postInfo.comments.length > 0 && (
        <nav className="post__controls">
          <button type="button" className="post__control" onClick={() => setLike(!like)}>
            <i className={`${like ? 'fas' : 'far'} fa-heart`} />
          </button>
          <div className="post__status">
            <div className="user">
              <span>
                curtido por
                <Link to="/">
                  {postInfo.comments[0].name}
                </Link>
                e outra
                {((postInfo.comments.length - 1) + like) > 1 && 's'}
                <Link to="/">
                  {like ? postInfo.comments.length : postInfo.comments.length - 1}
                  pessoa
                  {((postInfo.comments.length - 1) + like) > 1 && 's'}
                  .
                </Link>
              </span>
            </div>
          </div>
        </nav>
      )
    }
    </article>
  );
};
export default Post;