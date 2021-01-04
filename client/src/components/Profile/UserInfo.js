import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ session }) => {
  const { username, email } = session.authUserInfo;

  console.log(session.authUserInfo);

  return <h1>Hello</h1>;
};

export default UserInfo;
