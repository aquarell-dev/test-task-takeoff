import React, { FC } from 'react';

import { RHFInput } from '../../../../../ui/Input';
import Button from '../../../../../ui/Button';

import { IFormContactsInputs } from '../../../../../../store/contacts/types';

import { SubmitHandler, useForm } from 'react-hook-form';

interface IContactForm {
  onSubmit: SubmitHandler<IFormContactsInputs>;
  errorMessage: string;
}

const ContactForm: FC<IContactForm> = ({ onSubmit, errorMessage }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormContactsInputs>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-4'
    >
      <RHFInput label={'name'} register={register} required={true}
                placeholder={errors.name ? 'Name is required.' : 'Name'}/>

      <RHFInput label={'phone'} register={register} required={true}
                placeholder={errors.phone ? 'Phone is required' : 'Phone'}/>

      <p className={'text-red-500 text-sm'}>{errorMessage}</p>

      <Button twSizes={'w-full h-10'} text={errorMessage.length === 0 ? 'Go!' : 'Try again'} color={errorMessage.length === 0 ? 'green' : 'red'} type={'submit'}/>
    </form>
  )
};

export default ContactForm;