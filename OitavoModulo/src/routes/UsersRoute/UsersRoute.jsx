import React, { useState, useEffect } from 'react';
import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    const fetchDataUsers = async() =>{
      const dataUsers = await (await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')).json();
      setUsers(dataUsers);
    };
    fetchDataUsers();
  },[]);
  return (
    <div className="container" data-testid= 'users-route'>
      <UsersList users={users}/>
    </div>
  );
};
export default UsersRoute;
