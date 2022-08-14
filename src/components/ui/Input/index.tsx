import React, { FC } from 'react';
import { cn } from '../../../utils';
import { UseFormRegister } from 'react-hook-form';

interface IInput {
  type?: React.HTMLInputTypeAttribute;
  value: string;
  handler: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  error?: boolean;
}

interface IRHFInput extends Pick<IInput, 'placeholder' | 'type'> {
  label: string;
  register: UseFormRegister<any>; // TODO fix typing here
  required: boolean | string;
}

export const RHFInput: FC<IRHFInput> = ({ label, register, required, ...inputProps }) =>
  <input
    className={cn(
      'bg-gray-200 px-4 py-2 rounded-md shadow-md focus:outline-none',
    )}
    {...inputProps}
    {...register(label, { required })}
  />;

const Input: FC<IInput> = ({ type, value, handler, placeholder, error }) =>
  <input
    type={type ?? 'text'}
    className={cn('bg-gray-200 px-4 py-2 rounded-md shadow-md', error ? 'outline outline-red-500' : 'focus:outline-none')}
    value={value}
    onChange={handler}
    placeholder={placeholder}
  />;

export default Input;