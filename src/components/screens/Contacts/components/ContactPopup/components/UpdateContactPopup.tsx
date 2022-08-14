import React, { FC, useState } from 'react';

import { IContact, IContactPopup, IFormContactsInputs } from '../../../../../../store/contacts/types';

import { useUpdateContactMutation } from '../../../../../../store/contacts/contacts.api';

import Popup from '../../../../../ui/Popup';
import ContactForm from './ContactForm';

import { SubmitHandler } from 'react-hook-form';

interface IUpdateContactPopup extends IContactPopup {
  contact: IContact;
}

const UpdateContactPopup: FC<IUpdateContactPopup> = ({ contact, setValue, heading, value }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [updateContact, result] = useUpdateContactMutation();

  const onSubmit: SubmitHandler<IFormContactsInputs> = data => {
    if (result.isError) return;

    updateContact({ userId: contact.userId, id: contact.id, ...data })
      .unwrap()
      .then(_ => { setValue(false); setErrorMessage('') })
      .catch(e => setErrorMessage(e.data))
  };

  return (
    <Popup heading={heading} visible={value} setVisible={setValue}>
      <ContactForm onSubmit={onSubmit} errorMessage={errorMessage} />
    </Popup>
  );
};

export default UpdateContactPopup;