import React, { useState, useEffect } from 'react';
import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';
import Posts from '../../containers/Posts';
import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const userPostById = (postUserId) =>users.find((user)=>postUserId === user.id);
  
  useEffect(() => {
  const fetchDataFeed = async () =>{
    const dataFeed = await (await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')).json();
    setUsers(dataFeed);
  };
  fetchDataFeed();
}, []);
  
  useEffect(() => {
  if (usersFetched === users.length) {
    return;
  }
  const fetchDataFeed = async () => {
    const dataFeed = await (await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`)).json();
    setPosts([...posts, ...dataFeed]);
    setUsersFetched(usersFetched + 1);
  };
  fetchDataFeed();
},[ posts, users, usersFetched]); //[users, usersFetched]);

  useEffect(()=>{
    const fetchDataFeed = async ()=>{
      const dataFeed = await (await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')).json();
      setStories(dataFeed);
    };
    fetchDataFeed();
  },[users])
  return (
    <div data-testid="feed-route">
      {
        users.length > 0 && stories.length > 0 && (
          <Stories stories={stories} getUserHandler={userPostById} />
        )
      }

      {users.length !== usersFetched ? <Loading /> : 
      <Posts posts={posts} getUserHandler={userPostById} />
}
    </div>
  );
};

export default FeedRoute;