import React, { FC, useState } from 'react';

import UserCredentialsForm from './UserCredentialsForm';

import userService from '../../../../store/user/user.services';
import { IUser, IUserCredentials } from '../../../../store/user/types';

import { useActions } from '../../../../hooks/useActions';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const [error, setError] = useState<string>('');

  const { authenticate } = useActions();

  const navigate = useNavigate();

  const confirmAuth = (user: IUser) => { authenticate(user); navigate('/contacts') };

  const onSubmit = ({ login, password }: IUserCredentials) =>
    login &&
    password &&
    userService.authenticate(login, password)
      .then(user => user ? confirmAuth(user) : setError('No user has been found.'));

  return <UserCredentialsForm title='Log in' onSubmit={onSubmit} errorMessage={error} />

};

export default Login;