import { ChangeEvent, FC, useRef, useState } from 'react';
import { CreateContactPopup } from '../ContactPopup';
import Input from '../../../../ui/Input';
import { ISetter } from '../../../../../types/types';
import { useOutside } from '../../../../../hooks/useOutside';

const ContactsControls: FC<ISetter<string>> = ({ value, setValue }) => {
  const [newContactOpen, setNewContactOpen] = useState<boolean>(false);

  const contactsRef = useRef(null);

  useOutside(contactsRef, () => newContactOpen && setNewContactOpen(false));

  return <div className='w-full bg-gray-100 py-2 flex space-x-4 justify-center items-center'>
    <button
      className='px-4 bg-yellow-600 px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-700 transition-colors transition-duration-300'
      onClick={() => setNewContactOpen(!newContactOpen)}
    >
      <p className='text-white'>Create New Contact</p>
    </button>
    <Input value={value} handler={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} placeholder={'Search by name or phone'} />
    <div ref={contactsRef}>
      <CreateContactPopup heading={'Create Contact'} value={newContactOpen} setValue={setNewContactOpen} />
    </div>
  </div>
};

export default ContactsControls;