import axios, { AxiosError } from 'axios';
import { INewUser, IUser } from './types';

class UserService {
  public authenticate = (login: string, password: string) => {
    return axios.get<IUser[]>('users/').then(r => r.data.find(user => user.login === login && user.password === password));
  };

  public getValueFromLocalStorageByKey = (key: string): IUser | null => {
    const value = localStorage.getItem(key);

    if (!value) return null;

    return JSON.parse(value) as IUser;
  };

  public register = (login: string, password: string): Promise<IUser | AxiosError<string>> => {
    return axios.post<IUser>('users/', { login, password, contacts: [] } as INewUser)
      .then(r => r.data)
      .catch(err => err);
  };
}

const userService = new UserService();

export default userService;