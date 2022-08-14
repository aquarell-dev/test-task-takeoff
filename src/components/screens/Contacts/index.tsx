import { FC, useState } from 'react';

import { useAuth } from '../../../hooks/useAuth';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { useGetContactsByUserIdQuery } from '../../../store/contacts/contacts.api';

import NotSignedIn from './components/NotSignedIn';
import ContactCard from './components/ContactCard';
import { ErrorMessage } from '../../ui/Message';
import Loader from '../../ui/Loader';
import ContactsControls from './components/ContactsControls';

const Contacts: FC = () => {
  const [searchContacts, setSearchContacts] = useState<string>('');

  const { authenticated } = useAuth();

  const { id } = useTypedSelector(state => state.user);

  const { data, isError, isLoading } = useGetContactsByUserIdQuery(id as number, {
    skip: !authenticated
  });

  if (isError) return <ErrorMessage message='Server Error Has Occurred' />;

  if (isLoading) return <Loader />;

  return (
    <>
      {
        authenticated
          ?
          (
            <div className='items-center flex flex-col space-y-10 py-20'>
              <p className='text-2xl'>Contacts List</p>
              <ContactsControls value={searchContacts} setValue={setSearchContacts} />
              <div className='grid place-items-center grid-cols-3 gap-x-8 gap-y-10'>
                {data?.filter(
                  contact => contact.name.includes(searchContacts) || contact.phone.includes(searchContacts)
                ).map(contact => <ContactCard key={contact.id} contact={contact}/>)}
              </div>
            </div>
          )
          :
          <NotSignedIn/>
      }
    </>
  );
};

export default Contacts;