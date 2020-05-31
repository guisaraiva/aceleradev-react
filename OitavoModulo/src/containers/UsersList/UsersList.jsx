import React from 'react';
import User from '../../components/User';
import './UsersList.scss';

const UersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="user-list">
      {users.map((user, index)=> <User infoUser={user} key={index}/>)}
    </section>
  )
};

export default UersList;
