import { Dispatch, SetStateAction } from 'react';

export interface ISetter<T> {
  value: T;
  setValue: TSetter<T>;
}

export type TSetter<T> = Dispatch<SetStateAction<T>>;
