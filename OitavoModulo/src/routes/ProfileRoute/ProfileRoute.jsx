import React, { useState, useEffect, useCallback} from 'react';
import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [isLoading, setisLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);  
  const {username} = useParams()

  const findUserByUsername = useCallback(
    (username) => {
      const result = users.filter((user) => user.username === username);
      return result.length > 0 ? result[0] : {
        id: "", 
        name: `User not found (username = ${username})`,
        avatar: "",
        username: username,
        email: ""
      };
    },[users.length])

    useEffect(() => {
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
    .then(res => res.json())
    .then(response => {
      setUsers(response);
      setisLoading(false); 
    });
  }, []);

  useEffect(() => {
    const userFound = findUserByUsername(username);
    setUser(userFound);    
  },[users.length])

  useEffect(() => {
    if(user.id){
      fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`)
      .then(res => res.json())
      .then(response => {
        setPosts(response);
        setisLoading(false);
      })
    }
  }, [user.id]);

  return (
    <div data-testid="profile-route">
      {isLoading && <Loading />}
      {!isLoading && (
        <React.Fragment>
          <UserProfile {...user} />
          <UserPosts posts={posts} userInfo={user} />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProfileRoute;

