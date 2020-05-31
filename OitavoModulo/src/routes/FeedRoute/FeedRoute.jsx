import React, { useState, useEffect, useCallback } from 'react';
import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';
import Posts from '../../containers/Posts';
import './FeedRoute.scss';

const FeedRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  const updateLoading = useCallback(() => {
    if(users.length > 0 && posts.length > 0 && stories.length > 0){
      setIsLoading(false);
    }
  }, [users.length, posts.length, stories.length])

  useEffect(() => {
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
    .then(res => res.json())
    .then(response => {
      setUsers(response);
      updateLoading(); 
    });
  }, [updateLoading]);

  useEffect(() => {
    fetch("	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/1/posts")
    .then(res => res.json())
    .then(res => {
      setPosts(res);
      updateLoading();
    })
  }, [updateLoading]);

  useEffect(() => {
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories")
    .then(res => res.json())
    .then(response => {
      setStories(response);
      updateLoading();
    })
  }, [updateLoading]);

  const getUserHandler = (userId) => {
    const result = users.filter((user) => user.id === userId);
    return result.length > 0 ? result[0] : {
      id:userId, 
      name: `User not found (userId = ${userId})`,
      avatar: "",
      username: "",
      email: ""
    };  
  } 
  return (
    <div data-testid="feed-route">
      {isLoading && <Loading />}
      {!isLoading && (
        <React.Fragment>
          <Stories stories={stories} getUserHandler={getUserHandler} />
          <Posts posts={posts} getUserHandler={getUserHandler} />
        </React.Fragment>
      )}
    </div>
  );
};

export default FeedRoute;