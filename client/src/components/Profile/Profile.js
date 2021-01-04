import React from 'react';
import withAuth from '../withAuth';
import UserInfo from './UserInfo';

const Profile = ({ session }) => (
  <div>
    <UserInfo session={session} />
    {/* <UserRecipe */}
  </div>
);

export default withAuth((session) => session && session.authUserInfo)(Profile);
