import { IContact } from '../contacts/types';
import { SubmitHandler } from 'react-hook-form';

export interface IUserCredentials {
  login: string | undefined;
  password: string | undefined;
}

export interface IUser extends IUserCredentials {
  id: undefined | number;
}

export interface INewUser extends IUserCredentials {
  contacts: IContact[];
}

export interface IUserForm {
  title: string;
  onSubmit: SubmitHandler<IUserCredentials>;
  errorMessage: string;
}

export interface IUserSlice
  extends Pick<
    IUser,
    'id' | 'login'
    > {}