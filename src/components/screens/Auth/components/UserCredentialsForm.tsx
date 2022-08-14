import React, { FC } from 'react';

import { useForm } from 'react-hook-form';

import { IUserCredentials, IUserForm } from '../../../../store/user/types';

import { RHFInput } from '../../../ui/Input';
import Button from '../../../ui/Button';

const UserCredentialsForm: FC<IUserForm> = ({ title, onSubmit, errorMessage }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IUserCredentials>();

  return (
    <form className='flex justify-center items-center py-20 flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <p className='text-xl'>{title}</p>
      <RHFInput label={'login'} register={register} required={'Login is required'} placeholder={'Login'}/>
      <p className={'text-red-500 text-sm'}>{errors.login?.message}</p>
      <RHFInput label={'password'} register={register} required={'Password is required'} placeholder={'Password'}/>
      <p className={'text-red-500 text-sm'}>{errors.password?.message}</p>
      <p className={'text-red-500 text-md'}>{errorMessage}</p>
      <Button text={'Let us go'} color={'green'} type={'submit'}/>
    </form>
  );
};

export default UserCredentialsForm;