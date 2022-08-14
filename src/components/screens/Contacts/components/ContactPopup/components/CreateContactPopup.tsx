import React, { FC, useState } from 'react';

import { IContactPopup, IFormContactsInputs } from '../../../../../../store/contacts/types';

import { useCreateContactMutation } from '../../../../../../store/contacts/contacts.api';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';

import Popup from '../../../../../ui/Popup';
import ContactForm from './ContactForm';

import { SubmitHandler } from 'react-hook-form';

const CreateContactPopup: FC<IContactPopup> = ({ value, setValue, heading }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [createContact, result] = useCreateContactMutation();

  const { id } = useTypedSelector(state => state.user);

  const onSubmit: SubmitHandler<IFormContactsInputs> = data => {
    if (result.isError) return;

    if (id) {
      createContact({ userId: id, ...data })
        .unwrap()
        .then(_ => { setValue(false); setErrorMessage('') })
        .catch(e => setErrorMessage(e.data))
    }
  };

  return (
    <Popup heading={heading} visible={value} setVisible={setValue}>
      <ContactForm onSubmit={onSubmit} errorMessage={errorMessage} />
    </Popup>
  );
};

export default CreateContactPopup;