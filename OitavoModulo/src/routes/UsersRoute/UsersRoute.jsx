import React, { useState, useEffect } from 'react';

import Loading from '../../components/Loading'
import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
    .then(res => res.json())
    .then(response => {
      setUsers(response);
      setIsLoading(false);
    })
  })


  return (
    <div className="container" data-testid= 'users-route'>
      {isLoading && <Loading />}
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
