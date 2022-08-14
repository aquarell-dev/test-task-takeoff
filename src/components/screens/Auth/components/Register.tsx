import { FC, useState } from 'react';

import UserCredentialsForm from './UserCredentialsForm';

import { IUser, IUserCredentials } from '../../../../store/user/types';
import userService from '../../../../store/user/user.services';

import { useActions } from '../../../../hooks/useActions';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Register: FC = () => {
  const [error, setError] = useState<string>('');

  const { authenticate } = useActions();

  const navigate = useNavigate();

  const confirmAuth = (user: IUser) => { authenticate(user); navigate('/contacts') };

  const onSubmit = ({ login, password }: IUserCredentials) => {
    if (login && password)
      userService.register(login, password)
        .then(data =>
          axios.isAxiosError(data) && data.response?.status === 400 ?
            setError(data.response.data) :
            confirmAuth({ login, password, id: (data as IUser).id })
        );
  };

  return <UserCredentialsForm title='Sign up' onSubmit={onSubmit} errorMessage={error} />
};

export default Register;