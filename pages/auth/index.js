import React from 'react';
import AuthForm from 'components/Auth/auth-form';
import UserProfile from 'components/Profile/user-profile';

const AuthPage = () => {
  return (
    <>
      <AuthForm></AuthForm>
      <UserProfile></UserProfile>
    </>
  );
};

export default AuthPage;
