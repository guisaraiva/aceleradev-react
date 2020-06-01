import React from 'react';
import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      { posts.map((p) => <Post postInfo={p} userInfo={getUserHandler(p.userId)} key={p.id} />)}
    </section>
  </div>
);
export default Posts;