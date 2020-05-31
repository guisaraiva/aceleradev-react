import React from 'react';
import Post from '../../components/Post';
const Posts = ({ posts, getUserHandler }) => {
  return (
    <div className="container" data-testid="posts">
      {posts.map((post) => 
        <Post 
          userInfo={getUserHandler(post.userId)} 
          postInfo={post} 
          key={post.id} 
          getUserHandler={getUserHandler} 
          teaser={false}
        />
      )}
    </div>
  )
}
export default Posts;