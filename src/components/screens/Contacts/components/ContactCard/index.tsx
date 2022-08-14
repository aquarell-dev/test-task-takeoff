import { FC, useRef, useState } from 'react';

import { IContact } from '../../../../../store/contacts/types';

import { UpdateContactPopup, DeleteContactPopup } from '../ContactPopup';

import { useDeleteContactByIdMutation } from '../../../../../store/contacts/contacts.api';
import { useOutside } from '../../../../../hooks/useOutside';

const ContactCard: FC<{ contact: IContact }> = ({ contact }) => {
  const [updateContactOpen, setUpdateContactOpen] = useState<boolean>(false);
  const [deleteContactOpen, setDeleteContactOpen] = useState<boolean>(false);
  const [deleteContactErrorMessage, setDeleteContactErrorMessage] = useState<string>('');

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [deleteContact, _] = useDeleteContactByIdMutation();

  const handleDeleteContact = () => {
    deleteContact(contact)
      .unwrap()
      .then(_ => {
        setDeleteContactOpen(false);
        setDeleteContactErrorMessage('');
      })
      .catch(e => setDeleteContactErrorMessage(e.data));
  };

  return (
    <div
      className="relative w-[200px] h-[192px] p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl mx-auto">
      <div className='absolute right-0 top-0 bottom-0 left-0 flex justify-end my-2 mx-4'>
        <svg
          onClick={() => setUpdateContactOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 cursor-pointer"
          fill="none" viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
        </svg>
        <svg
          onClick={() => setDeleteContactOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 cursor-pointer"
          fill="none" viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>
      <div className="block p-6 bg-white sm:p-8 rounded-xl">
        <div className="mt-16">
          <h5 className="text-xl font-bold text-gray-900">{contact.name}</h5>
          <p className="mt-2 text-sm text-gray-500">
            {contact.phone}
          </p>
        </div>
      </div>
      <UpdateContactPopup
        contact={contact}
        heading={`Update Contact ${contact.id}`}
        value={updateContactOpen}
        setValue={setUpdateContactOpen}
      />
      <DeleteContactPopup
        handler={handleDeleteContact}
        heading={`Are you sure you want to delete the ${contact.id} contact?`}
        value={deleteContactOpen}
        setValue={setDeleteContactOpen}
        errorMessage={deleteContactErrorMessage}
      />
    </div>
  );
};

export default ContactCard;