import React, { useState, useEffect } from 'react';
import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';
import Loading from '../../components/Loading';

const ProfileRouteUsers = () =>{
  const [userId, setUserId] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [name, setName] = useState('');
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const {pathname} = window.location;
    const param = pathname.split('/')[2];

    const fetchDataProfile = async () => {
      const dataProfile = await (await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${param}`)).json();
      setUserId(dataProfile[0].id);
      setUserAvatar(dataProfile[0].avatar);
      setUserName(dataProfile[0].username);
      setUserEmail(dataProfile[0].email);
      setName(dataProfile[0].name);
    };
    fetchDataProfile();
  },[])

  useEffect(()=>{
    if(userId) {
      const fetchDataProfile = async () =>{
        const dataProfile = await (await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${userId}/posts`)).json();
      setUserPosts(dataProfile);
      setIsLoading(false);
      };
      fetchDataProfile();
    }
  },[userId]);

  return(
    <div data-testid="profile-route">
      <UserProfile 
      name={name} 
      avatar={userAvatar} 
      username = {userName}
      email={userEmail} />

      {isLoading ? (<Loading />) : <UserPosts posts={userPosts}/>}
    </div>
  )
};

export default ProfileRouteUsers

